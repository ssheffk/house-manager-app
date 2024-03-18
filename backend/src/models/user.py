from sqlalchemy.orm import  Mapped, mapped_column, relationship
from sqlalchemy import Column, ForeignKey, Integer
from schemas.user import UserBase
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
    def __init__(self, user_base: UserBase):
        # self.id = id
        self.username = user_base.username
        self.phone_number = user_base.phone_number
        self.email = user_base.email
        self.apartment_number = user_base.apartment_number
        self.building_id = user_base.building_id
        self.owner = user_base.owner
        self.renter = user_base.renter
        self.valid = user_base.valid
        
    def to_dict(self):
        """Convert User instance to a dictionary."""
        return {
            "id": self.id,
            "username": self.username,
            "phone_number": self.phone_number,
            "email": self.email,
            "apartment_number": self.apartment_number,
            "building_id": self.building_id,
            "owner": self.owner,
        }
  
Base.metadata.create_all(engine)
