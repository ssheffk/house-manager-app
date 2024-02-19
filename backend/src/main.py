from fastapi import FastAPI, HTTPException
from service import create_building, create_user, get_building_by_id
from schemas import BuildingBase, BuildingResponse, UserBase, UserResponse

app = FastAPI()

@app.post("/users")
async def index(username: UserBase) -> UserResponse:

    return create_user(username)

@app.post("/buildings")
async def index(building: BuildingBase) -> BuildingResponse:

    return create_building(building)

@app.get("/buildings/{building_id}")
async def get_building(building_id: int) -> BuildingResponse:
    building_data = get_building_by_id(building_id)
    if building_data is None:
        raise HTTPException(status_code=404, detail="Building not found")

    return building_data