from fastapi import APIRouter

from schemas.user import UserBase, UserResponse
from services import create_user

router = APIRouter(tags=["users"])

@router.post("/users")
async def index(user: UserBase):

    return create_user(user)
