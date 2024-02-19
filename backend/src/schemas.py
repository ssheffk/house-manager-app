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
    