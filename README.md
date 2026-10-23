# NEXUS 0 — AICTE OneView Institution Coordination & Monitoring

> **Smart India Hackathon 2026 — Problem Statement 26264**  
> Integrated Dashboard for Monitoring and Tracking Institution-Related Complaint Cases Across AICTE Bureaus and Cells.

---

## 🏛️ Project Overview

**NEXUS** is an institutional grievance oversight and coordination platform built for the **All India Council for Technical Education (AICTE)**. It eliminates inter-departmental silos across AICTE Bureaus (Approval, Policy, Regulation, PGRC, FDC) by establishing a single-window monitoring console, real-time case tracking, and automated SLA enforcement.

---

## 🚀 Key Features

### 1. Pinterest-Inspired Modern Landing Page (`/`)
- **Hero Section**: High-contrast, dark-mode design with glowing glassmorphism accents and headline: *"One Platform. Complete Complaint Visibility."*
- **Live Preview Mockup**: Interactive dashboard graphic with active SLA tags and multi-bureau metrics.
- **6 Core Capabilities**:
  1. Centralized Complaint Monitoring
  2. Real-Time Case Tracking
  3. Bureau & Cell Coordination
  4. Analytics & Reports
  5. Complaint Status Monitoring
  6. Faster Resolution
- **Interactive 6-Stage Workflow Flow**:
  - `Complaint Received` → `Classification` → `Bureau/Cell Assignment` → `Case Monitoring` → `Resolution` → `Closure`
- **Impact Stats & National Directory Metrics**: Over 10,000+ technical institutions covered.

### 2. Central Coordination Console (`/dashboard`)
- **Executive Operations Rail**: Navigation across Dashboard, Institutions OneView, Cases & Grievances, Reports & Analytics, and Audit Trail.
- **KPI Metrics Strip**: Total Intake (21), Active/In Review (17), SLA Overdue (6), Due Next 48h (2), Unassigned (4), Resolved (4).
- **Monthly Intake vs Resolution Trends**: Real-time comparative SVG analytics curves.
- **Workload by Bureau**: Progress meters across Approval & Affiliation, Policy, Regulation, Faculty Development, and Student Grievances.
- **Multi-Bureau Activity Stream**: Real-time event feed with case tags, officer handoffs, and audit timestamps.
- **Interactive Modals**:
  - `+ Log Case`: Register new institutional complaints with automated category and bureau assignment.
  - `Demo Controls`: Switch between Leadership, Bureau Official, and Case Handler roles on the fly.

---

## 🧭 Routing Architecture

| Route | View | Description |
|---|---|---|
| `/` | `LandingPage.jsx` | Dark Pinterest-inspired showcase landing page with CTAs |
| `/dashboard` | `Dashboard.jsx` | Full AICTE OneView Coordination Console & Case Management |

---

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router v6
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React
- **Build Tool**: Vite 5

---

## 💻 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

Open [http://localhost:5173/](http://localhost:5173/) to view the landing page and [http://localhost:5173/dashboard](http://localhost:5173/dashboard) to explore the executive dashboard.
