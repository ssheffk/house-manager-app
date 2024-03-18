from fastapi import APIRouter
from services import register_service

from schemas.service import ServiceBase

router = APIRouter(tags=["building services"])

@router.post("/services")
async def create(service: ServiceBase):
    return register_service(service)