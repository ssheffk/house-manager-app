
from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import Column, DateTime, ForeignKey, Integer
from datetime import datetime
from db_config import engine, Base

class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(unique=False)
    
    # this should work as a constructor
    def __init__(self, username):
        # self.id = id
        self.username = username
        
          
# ** unpacking
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
    
    def __init__(self, name, date_of_build, city, street, apartments, floors):
        self.name = name
        self.date_of_build = date_of_build
        self.city = city
        self.street = street
        self.apartments = apartments
        self.floors = floors
class Apartment(Base):
    __tablename__ = "apartments"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    building_id: Mapped[int] = mapped_column(ForeignKey("buildings.id"), nullable=False)
    # pet: relation with another will stay as true/false for now
    #TODO:  pet field
    pet: Mapped[bool] = mapped_column(nullable=False)
    apartment_number: Mapped[int] = mapped_column(unique=True)
    floor: Mapped[int] = mapped_column(nullable=False)
    # parking_space: keep as a true/false to be change
    #TODO:  parking field
    parking_space: Mapped[bool] = mapped_column(nullable=False)
    #TODO:  renters field
    # renters
    family_name: Mapped[str] = mapped_column(nullable=False)
    
    building = relationship("Building", back_populates="apartments_data")
    # users = relationship("User", back_populates="apartment")
    
    def __init__(self, building_id, pet, apartment_number, floor, parking_space, family_name):
        self.building_id = building_id
        self.pet = pet
        self.apartment_number = apartment_number
        self.floor = floor
        self.parking_space = parking_space
        self.family_name = family_name
    
# the next step is to structure building page of the app 
Base.metadata.create_all(engine)