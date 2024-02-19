
from sqlalchemy.orm import  Mapped, mapped_column
from sqlalchemy import DateTime
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
    
    def __init__(self, name, date_of_build, city, street, apartments, floors):
        self.name = name
        self.date_of_build = date_of_build
        self.city = city
        self.street = street
        self.apartments = apartments
        self.floors = floors

Base.metadata.create_all(engine)