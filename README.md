# 🌐 Zen Classy | Multi-Tenant Academic SaaS

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Architecture](https://img.shields.io/badge/architecture-Serverless_Multi--Tenant-purple.svg)
![Security](https://img.shields.io/badge/security-Strict_Mode_Encryption-emerald.svg)
![License](https://img.shields.io/badge/license-MIT-darkgray.svg)

**Zen Classy** is a production-grade, multi-tenant academic portal designed for extreme scalability and zero-maintenance deployment. It transforms a standard Single Page Application (SPA) into a fully automated SaaS platform without requiring traditional, expensive backend infrastructure.

Instead of a centralized SQL database, Zen Classy utilizes a **Hub-and-Spoke Serverless Router** built on Google Apps Script, dynamically distributing encrypted data across isolated, tenant-specific Google Sheets.

## ✨ Core Architecture: The Dynamic Router
Traditional Google Sheets backends fail at scale because they hardcode a single Sheet ID. Zen Classy solves this by implementing a powerful Gateway API pattern:

1. **The Master Registry:** A central, highly-secured Hub that maps `Class Codes` to specific, isolated Google Sheet IDs.
2. **The Dynamic Router:** A single serverless endpoint that intercepts the frontend payload, queries the Master Registry, and dynamically routes the execution environment to the correct tenant's database on the fly.
3. **Self-Service Provisioning:** Teachers can generate their own database using a provided AI prompt, paste the resulting ID into the frontend UI, and the Router will automatically configure their master admin account and bring their ecosystem online.

## 🚀 Features

* **Multi-Tenant Isolation:** Complete data separation. Class A's data is physically isolated from Class B's data at the file level.
* **Strict-Mode Cryptographic Auth:** Plaintext fallback is permanently disabled. Passwords are XOR-encrypted into raw byte arrays and evaluated strictly in server memory, bypassing native Google `newBlob()` engine flaws.
* **Automated SaaS Onboarding:** Zero-touch deployment for new institutes directly via the UI.
* **Dynamic QR Attendance:** Auto-refreshing cryptographic QR codes projected by the admin, scanned natively by student mobile devices.
* **Granular Role-Based Access:** Native separation of privileges between `Admin` and `Student` roles.
* **System Killswitch:** Global "Offline Mode" toggle to lock all student traffic out of a specific tenant database during maintenance.

## 💻 Tech Stack
* **Frontend:** HTML5, Tailwind CSS (via CDN), Vanilla JavaScript (ES6+).
* **Architecture:** SPA (Single Page Application) with custom DOM injection and state management.
* **Gateway/Backend:** Google Apps Script (V8 Engine).
* **Database:** Distributed Google Sheets via dynamic `SpreadsheetApp.openById()` routing.

## 🛠️ Deployment Guide

### 1. Set up the Master Hub
1. Create a blank Google Sheet named `SaaS Master Registry`.
2. Rename the first tab to `Registry` and set row 1 headers: `Class Code` | `Sheet ID` | `Status`.
3. Save the specific Google Sheet ID from the URL.

### 2. Deploy the Router
1. Open the `code.gs` file in Google Apps Script.
2. Inject your Master Registry ID into the `MASTER_REGISTRY_ID` variable.
3. Set your cryptographic `DEVELOPER_KEY` and `ADMIN_SECRET`.
4. Deploy as a **Web App** (Execute as: *Me*, Access: *Anyone*).
5. Copy the generated Web App URL.

### 3. Initialize the Frontend
1. Open `js/api.js`.
2. Replace the `API_URL` variable with your newly deployed Web App URL.
3. Host the repository on GitHub Pages, Vercel, or Netlify.
4. Use the "Register New Institute" button on the live site to provision your first database!

## 🔒 Security Notice
This platform relies on Google's native OAuth and file-sharing permissions to secure the distributed databases. Ensure that tenant databases are shared **only** with the developer email that deployed the Master Router. The frontend never sees or transmits the raw database ID after the initial onboarding step.

---
*Architected and engineered by ashrion.*
