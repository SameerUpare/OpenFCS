import os

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://openfcs:openfcs@db:5432/openfcs_db"
)
