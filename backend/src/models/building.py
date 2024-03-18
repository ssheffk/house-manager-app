from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import DateTime
from datetime import datetime
from schemas.building import BuildingBase
from db_config import Base, engine

class Building(Base):
    __tablename__ = "buildings"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(unique=True)
    date_of_build: Mapped[datetime] = mapped_column(DateTime ,nullable=False)
    city: Mapped[str] = mapped_column(nullable=False)
    street: Mapped[str] = mapped_column(unique=True)
    apartments: Mapped[int] = mapped_column(nullable=False)
    floors: Mapped[int] = mapped_column(nullable=False)
    
    apartments_data = relationship("Apartment", back_populates="building")
    
    def __init__(self, building_base: BuildingBase):
        self.name = building_base.name
        self.date_of_build = building_base.date_of_build
        self.city = building_base.city
        self.street = building_base.street
        self.apartments = building_base.apartments
        self.floors = building_base.floors
        
    def to_dict(self):
        """Convert Building instance to a dictionary."""
        return {
            "id": self.id,
            "name": self.name,
            "date_of_build": self.date_of_build,
            "city": self.city,
            "street": self.street,
            "apartments": self.apartments,
            "floors": self.floors
        }

Base.metadata.create_all(engine)  
# apartment in the same building if it is created cannot be created
# apartment in the different build can be created if not created