from fastapi import FastAPI
from fastapi.routing import APIRouter

from app.core.database import init_db
from app.api import db_health

app = FastAPI()

api_router = APIRouter(prefix="/api/v1")

@api_router.get("/health")
async def health_check():
    return {"status": "ok"}

app.include_router(api_router)
app.include_router(db_health.router, prefix="/api/v1")


@app.on_event("startup")
async def startup_event():
    init_db()