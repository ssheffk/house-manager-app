from schemas.service import ServiceBase
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

    
    def __init__(self, service_base: ServiceBase):
        self.building_id = service_base.building_id
        self.company_name = service_base.company_name
        self.service_type = service_base.service_type
        self.contact_number = service_base.contact_number
        self.email = service_base.email
        self.service_location = service_base.service_location
        self.url_link = service_base.url_link
      
    def to_dict(self):
      """Convert Service instance to a dictionary."""
      return {
          "id": self.id,
          "building_id": self.building_id,
          "company_name": self.company_name,
          "service_type": self.service_type,
          "contact_number": self.contact_number,
          "email": self.email,
          "service_location": self.service_location,
          "url_link": self.url_link
      }

    # def __init__(self, **kwargs):
    #   super().__init__(**kwargs)
      
Base.metadata.create_all(engine)