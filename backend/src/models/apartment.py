from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey
from schemas.apartment import ApartmentBase
from db_config import Base, engine

class Apartment(Base):
    __tablename__ = "apartments"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    building_id: Mapped[int] = mapped_column(ForeignKey("buildings.id"), nullable=False)
    # pet: relation with another will stay as true/false for now
    #TODO:  pet field
    pet: Mapped[bool] = mapped_column(nullable=False)
    apartment_number: Mapped[int] = mapped_column(nullable=False)
    floor: Mapped[int] = mapped_column(nullable=False)
    # parking_space: keep as a true/false to be change
    #TODO:  parking field
    parking_space: Mapped[bool] = mapped_column(nullable=False)
    #TODO:  renters field
    # renters
    family_name: Mapped[str] = mapped_column(nullable=False)
    
    building = relationship("Building", back_populates="apartments_data")
    users = relationship("User", back_populates="apartment")
    
    
    def __init__(self, apartment_base: ApartmentBase):
        self.building_id = apartment_base.building_id
        self.pet = apartment_base.pet
        self.apartment_number = apartment_base.apartment_number
        self.floor = apartment_base.floor
        self.parking_space = apartment_base.parking_space
        self.family_name = apartment_base.family_name
        
    def to_dict(self):
      """Convert Apartment instance to a dictionary."""
      return {
          "id": self.id,
          "building_id": self.building_id,
          "pet": self.pet,
          "apartment_number": self.apartment_number,
          "floor": self.floor,
          "parking_space": self.parking_space,
          "family_name": self.family_name
      }
      
Base.metadata.create_all(engine)