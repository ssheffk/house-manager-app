from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import Column, ForeignKey, Integer
from db_config import Base, engine

class User(Base):
    __tablename__ = "users"
    
    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(unique=False)
    phone_number: Mapped[int] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False)
    apartment_number = Column(ForeignKey("apartments.id"),nullable=False)
    building_id = Column(Integer, nullable=False)
    owner: Mapped[bool] = mapped_column(nullable=False)
    renter: Mapped[bool] = mapped_column(nullable=False)
    valid: Mapped[bool] = mapped_column(nullable=False)

    apartment = relationship("Apartment", back_populates="users")
    
    # constraint both have to be valid to create a user

    
    # this should work as a constructor
    # apartment number could be a string -> apartment 12A
    def __init__(self, username, phone_number, email, apartment_number, building_id , owner, renter, valid):
        # self.id = id
        self.username = username
        self.phone_number = phone_number
        self.email = email
        self.apartment_number = apartment_number
        self.building_id = building_id
        self.owner = owner
        self.renter = renter
        self.valid = valid
  
Base.metadata.create_all(engine)
