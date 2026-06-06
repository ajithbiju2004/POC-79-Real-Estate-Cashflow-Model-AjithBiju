from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {
        "project": "Real Estate Cashflow Model",
        "status": "running"
    }
