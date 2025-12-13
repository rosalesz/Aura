from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
import uuid
from .. import models, schemas, database, auth

router = APIRouter()

@router.post("/", response_model=schemas.Order)
def create_order(
    order_in: schemas.OrderBase,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    cart_items = current_user.cart_items
    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")
    
    # Calculate total and check stock
    total = 0.0
    order_items = []
    
    for item in cart_items:
        if item.quantity > item.product.stock:
             raise HTTPException(status_code=400, detail=f"Not enough stock for {item.product.name}")
        subtotal = item.quantity * item.product.price
        total += subtotal
        
        # Deduct stock
        item.product.stock -= item.quantity
        
        order_items.append({
            "product_id": item.product_id,
            "quantity": item.quantity,
            "price": item.product.price
        })

    # Create Order
    new_order = models.Order(
        order_number=f"ORD-{uuid.uuid4().hex[:8].upper()}",
        user_id=current_user.id,
        total=total,
        status="pending",
        address=order_in.address
    )
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    
    # Create Order Items and Clear Cart
    for item_data in order_items:
        db_item = models.OrderItem(
            order_id=new_order.id,
            product_id=item_data["product_id"],
            quantity=item_data["quantity"],
            price=item_data["price"]
        )
        db.add(db_item)
        
    # Clear cart
    db.query(models.CartItem).filter(models.CartItem.user_id == current_user.id).delete()
    db.commit()
    
    return new_order

@router.get("/", response_model=list[schemas.Order])
def get_my_orders(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    return current_user.orders
