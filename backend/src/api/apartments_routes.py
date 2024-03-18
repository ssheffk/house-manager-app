from fastapi import APIRouter, HTTPException
from services import get_apartment_by_id, register_apartment

from schemas.apartment import ApartmentBase, ApartmentResponse


router = APIRouter(tags=["apartment"])

@router.get("/apartments/{apartment_id}")
async def index(apartment_id: int):
    apartment_data = get_apartment_by_id(apartment_id)
    if apartment_data is None:
        raise HTTPException(status_code=404, detail="Apartment not found")
    
    return apartment_data

@router.post("/apartments")
async def index(apartment: ApartmentBase) -> ApartmentResponse:
    result = register_apartment(apartment)
    
    if result is None:
        raise HTTPException(status_code=409, detail="Already exist")
    
    return result
