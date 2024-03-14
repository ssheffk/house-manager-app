import uvicorn
from fastapi import FastAPI

from api.routers import v1
app = FastAPI()


app.include_router(v1)

@app.on_event('shutdown')
def on_shutdown():
    print('Server shutting down...')
    