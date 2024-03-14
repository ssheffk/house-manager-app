from fastapi import APIRouter

from .apartments_routes import router as apartment_router
from .buildings_routes import router as building_router
from .services_routes import router as service_router
from .users_routes import router as user_router

v1 = APIRouter(prefix="/api/v1")


v1.include_router(apartment_router)
v1.include_router(building_router)
v1.include_router(service_router)
v1.include_router(user_router)
