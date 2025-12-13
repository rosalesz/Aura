from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import models, schemas, database, auth

router = APIRouter()

@router.get("/", response_model=schemas.Cart)
def get_cart(current_user: models.User = Depends(auth.get_current_user), db: Session = Depends(database.get_db)):
    # Calculate total on the fly or retrieve from somewhere.
    # For this simple MVP, we re-calculate from items.
    items = []
    total = 0.0
    for item in current_user.cart_items:
        subtotal = item.quantity * item.product.price
        total += subtotal
        items.append({
            "id": item.id,
            "product": item.product,
            "quantity": item.quantity,
            "subtotal": subtotal
        })
    return {"items": items, "total": total}

@router.post("/items", response_model=schemas.Cart)
def add_to_cart(
    item_in: schemas.CartItemBase,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    # Check if product exists
    product = db.query(models.Product).filter(models.Product.id == item_in.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    # Check if item already in cart
    cart_item = db.query(models.CartItem).filter(
        models.CartItem.user_id == current_user.id,
        models.CartItem.product_id == item_in.product_id
    ).first()

    if cart_item:
        cart_item.quantity += item_in.quantity
    else:
        cart_item = models.CartItem(
            user_id=current_user.id,
            product_id=item_in.product_id,
            quantity=item_in.quantity
        )
        db.add(cart_item)
    
    db.commit()
    db.refresh(cart_item)
    return get_cart(current_user, db)

@router.delete("/items/{item_id}")
def remove_from_cart(
    item_id: int,
    current_user: models.User = Depends(auth.get_current_user),
    db: Session = Depends(database.get_db)
):
    cart_item = db.query(models.CartItem).filter(
        models.CartItem.id == item_id,
        models.CartItem.user_id == current_user.id
    ).first()
    
    if not cart_item:
        raise HTTPException(status_code=404, detail="Item not found")
        
    db.delete(cart_item)
    db.commit()
    return get_cart(current_user, db)
