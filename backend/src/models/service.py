from db_config import Base, engine
from sqlalchemy.orm import  Mapped, mapped_column, relationship

 
class Service(Base):
    __tablename__ = "services"
   
    id: Mapped[int] = mapped_column(primary_key=True)
    building_id: Mapped[int] = mapped_column(nullable=False)
    company_name: Mapped[str] = mapped_column(nullable=False)
    service_type: Mapped[str] = mapped_column(nullable=False)
    contact_number: Mapped[int] = mapped_column(nullable=False)
    email: Mapped[str] = mapped_column(nullable=False)
    service_location: Mapped[str] = mapped_column(nullable=False)
    url_link: Mapped[str] = mapped_column(nullable=False)

    
    def __init__(self, building_id, company_name, service_type, contact_number, email, service_location, url_link):
      self.building_id = building_id
      self.company_name = company_name
      self.service_type = service_type
      self.contact_number = contact_number
      self.email = email
      self.service_location = service_location
      self.url_link = url_link

Base.metadata.create_all(engine)