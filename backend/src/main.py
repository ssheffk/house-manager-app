import uvicorn
from fastapi import FastAPI, HTTPException
from service import create_user, get_apartment_by_id, get_apartments, get_building_by_id, register_apartment, register_building
from schemas import ApartmentBase, ApartmentResponse, BuildingBase, BuildingResponse, UserBase, UserResponse

app = FastAPI()

@app.post("/users")
async def index(user: UserBase) -> UserResponse:

    return create_user(user)

@app.post("/buildings")
async def index(building: BuildingBase) -> BuildingResponse:

    return register_building(building)

@app.get("/buildings/{building_id}")
async def get(building_id: int):
    building_data = get_building_by_id(building_id)
    if building_data is None:
        raise HTTPException(status_code=404, detail="Building not found")

    return building_data


@app.post("/apartments")
async def index(apartment: ApartmentBase) -> ApartmentResponse:
    return register_apartment(apartment)

@app.get("/apartments/{apartment_id}")
async def index(apartment_id: int):
    apartment_data = get_apartment_by_id(apartment_id)
    if apartment_data is None:
        raise HTTPException(status_code=404, detail="Apartment not found")
    
    return apartment_data


@app.on_event('shutdown')
def on_shutdown():
    print('Server shutting down...')
    
#redoc
