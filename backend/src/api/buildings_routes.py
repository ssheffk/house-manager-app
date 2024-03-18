from fastapi import APIRouter, HTTPException
from services import get_building_by_id, register_building

from schemas.building import BuildingBase, BuildingResponse


router = APIRouter(tags=["building"])

@router.get("/buildings/{building_id}")
async def get(building_id: int):
    building_data = get_building_by_id(building_id)
    if building_data is None:
        raise HTTPException(status_code=404, detail="Building not found")

    return building_data

@router.post("/buildings")
async def index(building: BuildingBase) -> BuildingResponse:

    return register_building(building)
