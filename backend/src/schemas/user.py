from pydantic import BaseModel


class UserBase(BaseModel):
    username: str
    phone_number: int
    email: str
    apartment_number: int
    building_id: int
    owner: bool
    renter: bool
    valid: bool

# basemodel is from pydantic and should be used for validation 
# this is how we extend the class and add one more property

class UserResponse(UserBase):
    id: int