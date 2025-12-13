from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .routers import auth, products, cart, orders

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Aura API", version="0.1.0")

# CORS
origins = [
    "http://localhost:3000",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(products.router, prefix="/api/products", tags=["products"])
app.include_router(cart.router, prefix="/api/cart", tags=["cart"])
app.include_router(orders.router, prefix="/api/orders", tags=["orders"])

@app.get("/")
def read_root():
    return {"message": "Welcome to Aura API"}
