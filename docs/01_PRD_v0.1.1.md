# OpenFCS — Product Requirements Document
Version: v0.1.1

## Product
OpenFCS — Financial Crime Systems Lab

## Scenario
Midland Regional Bank (MRB)

---

## 1. Product Vision
OpenFCS is a product-grade, transparent financial crime monitoring simulation platform demonstrating:
- Deterministic rule-based enforcement
- Probabilistic ML prioritization
- Operational AML tradeoffs
- Enterprise-grade architecture separation

---

## 2. Problem Statement
There is no open, transparent, product-grade AML monitoring simulation system that allows users to understand rule engines, ML prioritization, and operational consequences in a realistic environment.

---

## 3. Product Objectives

### Primary Objectives
- Build mid-size bank AML monitoring simulation
- Enforce strict separation between deterministic and ML layers
- Enable rule tuning experimentation
- Demonstrate operational impact of configuration changes
- Host as a public demo system

### Secondary Objectives
- Foundation for TBML module
- Foundation for sanctions module
- Serve as architectural reference model

---

## 4. Bank Simulation Context

Midland Regional Bank (MRB):
- 50,000 customers
- 65,000 accounts
- 1.2M annual transactions
- Retail + SME focus
- 20 AML investigators
- 8-hour SLA for high-priority alerts
- 1% synthetic suspicious behavior embedded

---

## 5. Scope

### In Scope
- 1-year synthetic dataset
- Deterministic monitoring engine (6 rules)
- Risk aggregation
- ML prioritization (logistic regression)
- Alert queue
- Case lifecycle management
- Operational dashboard
- Rule configuration UI
- Admin reset functionality

### Out of Scope
- TBML module
- Sanctions screening
- Real-time streaming
- Multi-bank simulation
- Multi-tenant deployment
- Production banking integrations

---

## 6. Success Criteria
- Dockerized deployment
- Realistic AML UI experience
- Rule changes impact alert volume
- ML ranking impacts prioritization
- Operational metrics dynamically respond
- Clean architectural separation maintained

---

## 7. Versioning Strategy
OpenFCS follows Semantic Versioning:
MAJOR.MINOR.PATCH

0.x versions represent controlled evolution toward stable v1.0.0.
