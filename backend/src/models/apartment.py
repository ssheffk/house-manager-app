from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import ForeignKey, PrimaryKeyConstraint
from db_config import Base

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
    
    
    def __init__(self, building_id, pet, apartment_number, floor, parking_space, family_name):
        self.building_id = building_id
        self.pet = pet
        self.apartment_number = apartment_number
        self.floor = floor
        self.parking_space = parking_space
        self.family_name = family_name