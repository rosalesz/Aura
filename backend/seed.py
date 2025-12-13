from sqlalchemy.orm import Session
from app.database import SessionLocal, engine
from app import models

def seed_data():
    db = SessionLocal()
    
    # Check if products exist
    if db.query(models.Product).count() > 0:
        print("Data already seeded.")
        return

    products = [
        models.Product(
            name="Getsemaní Neon",
            description="Gorra estilo urbano oscura con detalles neón inspirada en la vida nocturna de Getsemaní.",
            price=120000.0,
            stock=50,
            category="NOVEDADES",
            image_url="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=600&auto=format&fit=crop"
        ),
        models.Product(
            name="Walled City Noir",
            description="Gorra negra minimalista, perfecta para cualquier ocasión bajo el sol caribeño.",
            price=145000.0,
            stock=30,
            category="FIRMA",
            image_url="https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=600&auto=format&fit=crop"
        ),
        models.Product(
            name="Rosario Azure",
            description="Tonos azules vibrantes que evocan las aguas de las Islas del Rosario.",
            price=110000.0,
            stock=45,
            category="LIMITADO",
            image_url="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5d?q=80&w=600&auto=format&fit=crop"
        ),
        models.Product(
            name="Bocagrande Sun",
            description="Estilo lifestyle claro y fresco, ideal para días de playa.",
            price=135000.0,
            stock=20,
            category="CLÁSICO",
            image_url="https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=600&auto=format&fit=crop"
        )
    ]

    db.add_all(products)
    db.commit()
    print("Products seeded successfully!")
    db.close()

if __name__ == "__main__":
    # Ensure tables exist
    models.Base.metadata.create_all(bind=engine)
    seed_data()
