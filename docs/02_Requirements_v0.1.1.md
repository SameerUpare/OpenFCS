# OpenFCS — Requirements
Version: v0.1.1

---

## 1. Functional Requirements

### 1.1 Data Simulation
- Generate 50,000 customers
- Generate 1-year transaction history
- Embed 1% suspicious patterns
- Deterministic seed reproducibility
- Configurable suspicious ratio

---

### 1.2 Deterministic Monitoring Engine
Implement 6 rules:
- Structuring
- Rapid Movement
- High-Risk Country Exposure
- Dormant Account Reactivation
- Funnel Account Behavior
- Round Amount Pattern

Each rule must:
- Be toggleable
- Have configurable thresholds
- Have configurable time window
- Produce risk contribution score
- Log trigger event

Engine must:
- Aggregate rule risk scores
- Create alert object when threshold exceeded
- Store rule contribution breakdown

---

### 1.3 ML Prioritization Layer
- Train logistic regression model on synthetic labels
- Produce probability score per alert
- Store ML score separately from deterministic score
- Provide feature importance
- Provide ROC and Precision-Recall metrics
- Must not create alerts directly

---

### 1.4 Case Management
Alert lifecycle states:
- Open
- Under Review
- Escalated
- SAR Filed
- Closed Clean

Track:
- Case duration
- SLA breach
- Investigator assignment

---

### 1.5 Dashboard & Analytics
Display:
- Total alerts
- Alerts per rule
- False positive rate
- Investigator backlog
- SLA breaches
- Risk score distribution
- ML performance metrics

---

### 1.6 Admin
- Reset simulation
- Regenerate dataset
- Configure investigator capacity

---

## 2. Non-Functional Requirements

### 2.1 Performance
- Dashboard load < 2 seconds
- Alert queries < 500ms
- Rule re-run < 30 seconds

### 2.2 Scalability
- Modular backend
- Dockerized
- Cloud deployable

### 2.3 Security
- Synthetic data only
- No file uploads
- API rate limiting
- Input validation

### 2.4 Maintainability
- Strict layer separation
- No ML logic inside rule engine
- API versioning support
- Structured logging

### 2.5 Observability
- Rule execution logs
- ML evaluation logs
- System activity logs
