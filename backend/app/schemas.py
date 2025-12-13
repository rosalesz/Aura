from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# --- Auth ---
class UserBase(BaseModel):
    email: str
    name: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    role: str
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User

class LoginRequest(BaseModel):
    email: str
    password: str

# --- Products ---
class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    stock: int
    category: str
    image_url: str

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    id: int
    class Config:
        orm_mode = True

class ProductList(BaseModel):
    items: List[Product]
    total: int

# --- Cart ---
class CartItemBase(BaseModel):
    product_id: int
    quantity: int

class CartItem(BaseModel):
    id: int
    product: Product
    quantity: int
    subtotal: float

class Cart(BaseModel):
    items: List[CartItem]
    total: float

# --- Orders ---
class OrderBase(BaseModel):
    address: str
    payment_method: str

class OrderItem(BaseModel):
    product_id: int
    quantity: int
    price: float

class Order(BaseModel):
    id: int
    order_number: str
    total: float
    status: str
    created_at: datetime
    items: List[OrderItem] = []
    class Config:
        orm_mode = True
