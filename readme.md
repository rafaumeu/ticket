# 🎫 Ticket Management API

![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![License](https://img.shields.io/badge/License-ISC-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)

## 📝 Project Description

A simple support ticket management API developed with pure Node.js, without external frameworks.

## 🚀 Technical Learning Insights

### 🔧 Architecture and Structure

- Implementation of a REST API from scratch
- Modular architecture with separated responsibilities
- Usage of native Node.js modules (`http`, fs, crypto)

### 📂 Directory Structure

```
src/
├── controllers/
├── database/
├── middlewares/
├── routes/
├── utils/
└── server.js
```

### 💡 Key Techniques

#### 1. Custom Routing

- Route system creation without frameworks
- Use of regular expressions for dynamic route parsing
- Support for parameters and query strings

#### 2. Data Persistence

- Simple JSON database implementation
- Persistence methods:
  - insert()
  - select()
  - update()
  - delete()

#### 3. Custom Middlewares

- jsonHandler: JSON request body processing
- routeHandler: Dynamic request routing

### 🛠️ Features

- [x] Ticket creation
- [x] Ticket listing
- [x] Ticket update
- [x] Ticket closure
- [x] Ticket removal
- [x] Status filtering

## 🌟 Main Technologies

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Node.js](https://img.shields.io/badge/Node.js-Vanilla-green)
![JSON](https://img.shields.io/badge/Database-JSON-orange)

## 🚀 How to Run the Project

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

## 📋 Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | /tickets | Create new ticket |
| GET | /tickets | List tickets |
| PUT | /tickets/:id | Update ticket |
| PATCH | /tickets/:id/close | Close ticket |
| DELETE | /tickets/:id | Remove ticket |

## 🧠 Key Challenges Overcome

* Route handling without frameworks
- Data persistence in JSON file
- Request stream processing
- Dynamic routing with parameters

## 🤝 Contributing

Feel free to contribute!
- Fork the project
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)

## 📄 License

Distributed under the ISC License. See `LICENSE` for more information.

🚀 Developed by Rafael Dias Zendron
