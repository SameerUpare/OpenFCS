from sqlalchemy import Column, String, DateTime
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime

from app.models.base import Base


class Customer(Base):
    __tablename__ = "customers"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String, nullable=False)
    segment = Column(String, nullable=False)
    risk_rating = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
