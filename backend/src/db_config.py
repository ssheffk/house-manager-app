from dotenv import dotenv_values
from pydantic import BaseModel
from sqlalchemy import  create_engine
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker, declarative_base
import os

config = dotenv_values('.env')

print(config)
# SQLALCHEMY  - db set up
DB_CONFIG = {
    'drivername': config["DRIVERNAME"],
    'username': config["USERNAME"],
    'password': config["PASSWORD"],
    'host': config["HOST"],
    'database': config["DATABASE"],
    'port': config["PORT"]
}

DB_URL = URL.create(**DB_CONFIG)

Base = declarative_base()


engine = create_engine(DB_URL, echo=True, future=True)
SessionLocal = sessionmaker(bind=engine)
session = SessionLocal()

def write_into_db(model: BaseModel):
    session.add(model)
    session.commit()

def query_db(query):
    return session.execute(query)
