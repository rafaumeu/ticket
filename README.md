     1|<div align="center">
     2|  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=FFCA28&height=180&section=header&text=Ticket%20Manager%20&fontSize=42&fontColor=fff&animation=fadeIn&fontAlignY=35&desc=Node.js%20Ticket%20System%20—%20No%20Frameworks&descSize=18&descAlignY=52"/>
     3|</div>
     4|  <a href="https://github.com/rafaumeu/ticket/generate"><img src="https://img.shields.io/badge/Use_This_Template-FFCA28?style=for-the-badge&logo=github&logoColor=white" alt="Use this template"/></a>
     5|
     6|<p align="center">
     7|  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodejs"/> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript"/> <img alt="No Framework" src="https://img.shields.io/badge/No_Framework-FFCA28?style=for-the-badge"/>
[<img alt="Vitest" src="https://img.shields.io/badge/Vitest-3-6E9F18.svg"/>](https://vitest.dev/)
[<img alt="Biome" src="https://img.shields.io/badge/Biome-2-60A5FA.svg"/>](https://biomejs.dev/)
[<img alt="Docker" src="https://img.shields.io/badge/Docker-ready-2496ED.svg"/>](https://docker.com/)
     8|</p>
     9|
    10|## Overview
    11|
    12|A ticket management system built with **pure Node.js** — no Express, no frameworks. Uses the native `http` module to demonstrate fundamental Node.js concepts and HTTP handling from scratch.
    13|
    14|## Features
    15|
    16|- Ticket creation and management
    17|- Pure Node.js HTTP server
    18|- File-based data persistence
    19|- RESTful endpoint design
    20|- No external dependencies for routing
    21|- Deployed on Vercel as serverless function
    22|
    23|## Tech Stack
    24|
    25|| Technology | Purpose |
    26||---|---|
    27|| **Node.js** | Runtime (native HTTP module) |
    28|| **JavaScript** | Core language |
    29|
    30|## Getting Started
    31|
    32|```bash
    33|git clone https://github.com/rafaumeu/ticket.git
    34|cd ticket
    35|npm install
    36|npm start
    37|```
    38|
    39|## Live Demo
    40|
    41|The API is deployed on Vercel as a serverless function:
    42|
    43|> **Base URL:** `https://ticket-<hash>.vercel.app/api`
    44|
    45|| Method  | Endpoint              | Description            |
    46||---------|-----------------------|------------------------|
    47|| `GET`   | `/api/tickets`        | List all tickets       |
    48|| `POST`  | `/api/tickets`        | Create a new ticket    |
    49|| `GET`   | `/api/tickets/stats`  | Ticket statistics      |
    50|| `PUT`   | `/api/tickets/:id`    | Update a ticket        |
    51|