from pydantic import BaseModel


class ApartmentBase(BaseModel):
    building_id: int
    pet: bool
    apartment_number: int
    floor: int
    parking_space: bool
    family_name: str
    
class ApartmentResponse(ApartmentBase):
    id: int