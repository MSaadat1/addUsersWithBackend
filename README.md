# Library App — Local Setup Guide

This project contains a **backend** (Node + TypeScript + Prisma + SQLite) and a **frontend** (Vite + React + TypeScript).  
Follow the steps below to run the project on your local machine.

---

## 📌 1. Clone the Repository

```bash
git clone <repository-url>
npm install
npx prisma generate
npx ts-node prismaServer.ts
cd user-frontend
npm run dev
