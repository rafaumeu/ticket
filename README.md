<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=180&section=header&text=Ticket%20Manager&fontSize=42&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Node.js%20Ticket%20System%20—%20No%20Frameworks&descSize=18&descAlignY=52"/>
</div>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-22-339933?style=for-the-badge&logo=nodejs"/>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript"/>
  <img alt="No Framework" src="https://img.shields.io/badge/No_Framework-FFCA28?style=for-the-badge"/>
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-3-6E9F18?style=for-the-badge"/>
  <img alt="Biome" src="https://img.shields.io/badge/Biome-2-60A5FA?style=for-the-badge"/>
  <img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker"/>
</p>

---

## Overview

A ticket management system built with **pure Node.js** — no Express, no frameworks. Uses the native `http` module to demonstrate fundamental Node.js concepts and HTTP handling from scratch. Deployed as a Vercel serverless function.

## Features

- Ticket creation, update, and deletion
- Ticket statistics and filtering
- Pure Node.js HTTP server (no dependencies)
- File-based JSON persistence
- RESTful endpoint design
- Deployed on Vercel as serverless function

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/tickets` | List all tickets |
| `POST` | `/api/tickets` | Create a new ticket |
| `GET` | `/api/tickets/stats` | Ticket statistics |
| `PUT` | `/api/tickets/:id` | Update a ticket |
| `PATCH` | `/api/tickets/:id/close` | Close a ticket |
| `DELETE` | `/api/tickets/:id` | Delete a ticket |

> **Note:** File-based JSON storage — data resets on each cold start. For persistent data, swap in a real database.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js 22** | Runtime (native `http` module) |
| **JavaScript** | Core language |
| **Vitest** | Test framework |
| **Biome** | Linting + formatting |
| **Docker** | Containerization |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/rafaumeu/ticket.git
cd ticket
npm install
npm start
```

### Docker

```bash
docker compose up -d    # Start on port 3333
docker compose down     # Stop
```

## Testing

```bash
npm test                # Run all tests
npm run test:watch      # Watch mode
```

## What I Learned

- Node.js native `http` module internals
- Request/response handling without abstractions
- File system operations for data persistence
- Building routing logic from scratch

## License

MIT

<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=100&section=footer"/>
  <br/><sub>Built with ❤️ by <a href="https://github.com/rafaumeu">Rafael Zendron</a></sub>
</div>

<p align="center">
  <a href="https://github.com/rafaumeu/ticket/generate"><img src="https://img.shields.io/badge/Use_This_Template-FFCA28?style=for-the-badge&logo=github&logoColor=white" alt="Use this template"/></a>
</p>
