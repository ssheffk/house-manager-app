from typing import Any
from sqlalchemy import select

from schemas import BuildingBase, BuildingResponse, UserBase, UserResponse
from model import Building, User
from db_config import query_db, write_into_db

# SERVICES
def create_user(model: UserBase) -> UserResponse:    
    user = User(model.username)
    write_into_db(user)

    return UserResponse(id=user.id, username=user.username)

def create_building(model: BuildingBase) -> dict[str, Any] | None:
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
    query = select(Building).filter(Building.id == id)
    building = query_db(query).first()

    return building._asdict() if building is not None else None