from pydantic import BaseModel


class ServiceBase(BaseModel):
    building_id: int
    company_name: str
    service_type: str
    contact_number: int
    email: str
    service_location: str
    url_link: str
    
    
class ServiceResponse(ServiceBase):
  id: int