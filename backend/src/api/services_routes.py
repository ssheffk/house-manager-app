from fastapi import APIRouter

from schemas.service import ServiceBase

router = APIRouter(tags=["building services"])

@router.post("/services")
async def create(service: ServiceBase):
    return {"service": "creation"}