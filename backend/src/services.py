from typing import Any
from sqlalchemy import and_, select
from sqlalchemy.orm import joinedload

from schemas.user import  UserBase, UserResponse
from schemas.building import BuildingBase, BuildingResponse
from schemas.apartment import ApartmentBase, ApartmentResponse
from schemas.service import ServiceBase, ServiceResponse

from models.apartment import Apartment
from models.building import Building
from models.user import User
from models.service import Service
from db_config import query_db, write_into_db
# ** unpacking
# SERVICES
def create_user(user_base: UserBase) -> UserResponse:    
    new_user = User(user_base)
    write_into_db(new_user)

    return UserResponse(**new_user.to_dict())

def register_building(building_base: BuildingBase) -> dict[str, Any] | None:
    new_building = Building(building_base)
    write_into_db(new_building)

    return BuildingResponse(**new_building.to_dict())

def get_building_by_id(id: int) -> dict[str, Any] | None:
    query = select(Building).options(joinedload(Building.apartments_data)).filter(Building.id == id)
    building = query_db(query).first()

    return building._asdict() if building is not None else None

def register_apartment(apartment: ApartmentBase) -> dict[str, Any] | None:
    
    existing_apartment = query_db(
        select(Apartment)
        .filter(and_(
                Apartment.building_id == apartment.building_id,
                Apartment.apartment_number == apartment.apartment_number
                ))
        ).first()
    
    if existing_apartment:
        return None

    new_apartment = Apartment(apartment)
    write_into_db(new_apartment)
    
    return ApartmentResponse(**new_apartment.to_dict())
    
def get_apartment_by_id(id: int) -> dict[str, Any] | None:
    query = select(Apartment).options(joinedload(Apartment.users)).filter(Apartment.id == id)
    apartment = query_db(query).first()
    
    return apartment._asdict() if apartment is not None else None

def get_apartments(building_id: int) -> list[ApartmentResponse]:
    query = (
        select(Apartment)
        .filter(Apartment.building_id == building_id)
    )
    apartments = query_db(query).all()
    return [apartment._asdict() for apartment in apartments]
    
    #TODO get building should return complex data that building have apartments and apartments have users
    
def register_service(service: ServiceBase):
    new_service = Service(service)
   
    write_into_db(new_service)
    
    return ServiceResponse(**new_service.to_dict())
