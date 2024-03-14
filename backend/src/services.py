from typing import Any
from sqlalchemy import and_, select
from sqlalchemy.orm import joinedload

from schemas.user import  UserBase, UserResponse
from schemas.building import BuildingBase, BuildingResponse
from schemas.apartment import ApartmentBase, ApartmentResponse

from models.apartment import Apartment
from models.building import Building
from models.user import User
from db_config import query_db, write_into_db
# ** unpacking
# SERVICES
def create_user(model: UserBase) -> UserResponse:    
    user = User(
        model.username,
        model.phone_number,
        model.email,
        model.apartment_number,
        model.building_id,
        model.owner,
        model.renter,
        model.valid
    )
    write_into_db(user)

    return UserResponse(
        id=user.id,
        username=user.username,
        phone_number=user.phone_number,
        email=user.email,
        apartment_number=user.apartment_number,
        building_id=user.building_id,
        owner=user.owner,
        renter=user.renter,
        valid=user.valid
        )

def register_building(model: BuildingBase) -> dict[str, Any] | None:
    building = Building(
        model.name,
        model.date_of_build,
        model.city,
        model.street,
        model.apartments,
        model.floors  
    )
    write_into_db(building)

    return BuildingResponse(
        id = building.id,
        name=building.name,
        date_of_build=building.date_of_build,
        city=building.city,
        street=building.street,
        apartments=building.apartments,
        floors=building.floors  
    )

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

    param = Apartment(
        apartment.building_id,
        apartment.pet,
        apartment.apartment_number,
        apartment.floor,
        apartment.parking_space,
        apartment.family_name
    )
    write_into_db(param)
    
    return ApartmentResponse(
        id=param.id,
        building_id=param.building_id,
        pet=param.pet,
        apartment_number=param.apartment_number,
        floor=param.floor,
        parking_space=param.parking_space,
        family_name=param.family_name
    )
    
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