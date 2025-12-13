from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional
from .. import models, schemas, database, auth

router = APIRouter()

@router.get("/", response_model=schemas.ProductList)
def get_products(
    search: Optional[str] = None,
    category: Optional[str] = None,
    page: int = 1,
    limit: int = 20,
    db: Session = Depends(database.get_db)
):
    query = db.query(models.Product)
    if search:
        query = query.filter(models.Product.name.contains(search))
    if category:
        query = query.filter(models.Product.category == category)
        
    total = query.count()
    products = query.offset((page - 1) * limit).limit(limit).all()
    
    return {"items": products, "total": total}

@router.get("/{product_id}", response_model=schemas.Product)
def get_product(product_id: int, db: Session = Depends(database.get_db)):
    product = db.query(models.Product).filter(models.Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

# Admin routes omitted for brevity in MVP (can be added later)
# Or assume generic endpoint for creating products for seed
@router.post("/", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(database.get_db)):
    # In real app, check for admin
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product
