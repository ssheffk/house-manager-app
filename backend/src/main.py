import uvicorn
from fastapi import FastAPI, HTTPException
from service import create_user, get_apartments, get_building_by_id, register_apartment, register_building
from schemas import ApartmentBase, ApartmentResponse, BuildingBase, BuildingResponse, UserBase, UserResponse

app = FastAPI()

@app.post("/users")
async def index(username: UserBase) -> UserResponse:

    return create_user(username)

@app.post("/buildings")
async def index(building: BuildingBase) -> BuildingResponse:

    return register_building(building)

@app.get("/buildings/{building_id}")
async def get(building_id: int):
    building_data = get_building_by_id(building_id)
    # if building_data:
    #     building_with_apartments = {
    #         **building_data,
    #         "apartments_data": get_apartments(building_id)
    #     }
    #     return building_with_apartments
    
    # raise HTTPException(status_code=404, detail="Building not found")
    if building_data is None:
        raise HTTPException(status_code=404, detail="Building not found")

    return building_data

# @app.get("/buildings/{building_id}", response_model=BuildingResponse)
# async def get_building(building_id: int, db: Session = Depends(get_db)):
#     building = get_building_by_id(building_id, db)
#     if building:
#         building_with_apartments = {
#             **building,
#             "apartments": get_apartments(building_id, db)
#         }
#         return building_with_apartments
#     return None

@app.post("/apartments")
async def index(apartment: ApartmentBase) -> ApartmentResponse:
    return register_apartment(apartment)

# @app.get("/buildings/{building_id}/apartments")
# async def get(building_id: int):
#     return {'get apartments of the building'}



@app.on_event('shutdown')
def on_shutdown():
    print('Server shutting down...')
    
#redoc
