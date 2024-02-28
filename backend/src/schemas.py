from datetime import datetime
from pydantic import BaseModel


class UserBase(BaseModel):
    username: str

# basemodel is from pydantic and should be used for validation 
# this is how we extend the class and add one more property

class UserResponse(UserBase):
    id: int
    
class BuildingBase(BaseModel):
    name: str
    date_of_build: datetime
    city: str
    street: str
    apartments: int
    floors: int
    
class BuildingResponse(BuildingBase):
    id: int
    

class ApartmentBase(BaseModel):
    building_id: int
    pet: bool
    apartment_number: int
    floor: int
    parking_space: bool
    family_name: str
    
class ApartmentResponse(ApartmentBase):
    id: int