from datetime import datetime
from pydantic import BaseModel


class BuildingBase(BaseModel):
    name: str
    date_of_build: datetime
    city: str
    street: str
    apartments: int
    floors: int
    
#COMMENT: fix return model apartments to be included also, and check what will return if no apartments there
class BuildingResponse(BuildingBase):
    id: int
    