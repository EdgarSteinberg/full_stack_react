# 🧠 Proyecto Urban Store - Backend + Frontend

Aplicación fullstack desarrollada con **Node.js**, **Express**, **MongoDB**, y un frontend en **React** con **Bootstrap**. Este proyecto tiene como objetivo consolidar conocimientos clave en desarrollo backend y frontend, incluyendo autenticación, autorización, pruebas, carga de archivos, y más.

---
🌐 Demo del Proyecto
🔗 Frontend: https://mobilematrix.netlify.app/

🔗 API Backend: https://full-stack-smf0.onrender.com/api




## 🚀 Tecnologías principales

### Backend
- Node.js + Express
- MongoDB con Mongoose
- JWT para autenticación
- Passport (GitHub strategy)
- Multer (carga de archivos)
- Swagger para documentación
- Winston para logs
- Supertest y Jest para pruebas

### Frontend
- React
- React Router DOM
- Hooks (useState, useEffect, useContext)
- Bootstrap
- Fetch + async/await para consumo de APIs

---

## 🔐 Funcionalidades principales

### 🧾 Usuarios
- Registro, login y logout
- Autenticación con GitHub
- Roles: `user`, `premium`, `admin`
- Upload de documentos (DNI, comprobantes, etc.)
- Cambio de rol (`user` ↔ `premium`)

### 🛍️ Productos
- CRUD completo con control de permisos
- Filtrado por nombre, categoría y precio
- Ordenamiento ascendente/descendente
- Vista por categoría

### 🛒 Carrito
- Agregar productos al carrito
- Actualizar cantidad
- Eliminar productos del carrito
- Vaciar carrito

### 🎟️ Tickets
- Generación de ticket al finalizar compra
- Registro de productos comprados, cantidades, usuario y fecha

### 🧪 Testing
- Pruebas integrales con **Supertest** + **Jest**
- Prueba de registro, login, endpoints protegidos, permisos de rol, etc.

### 📦 Documentación
- Documentación de API en formato **YAML** (Swagger UI)
- Incluye métodos protegidos con JWT (POST/PUT/DELETE)

---

## 📁 Estructura de carpetas
```
📦 urban-store
├── 📁 backend
│   ├── 📁 src
│   ├── 📁 dao
│   ├── 📁 routes
│   ├── 📁 controllers
│   ├── 📁 middleware
│   ├── 📁 config
│   └── 📁 tests
├── 📁 frontend
│   ├── 📁 components
│   ├── 📁 pages
│   ├── 📁 context
│   ├── 📁 hooks
│   └── 📁 assets
└── README.md
```

---

## 📦 Instalación
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

---

## 🧾 Ejemplos de JSON (Producto, Usuario, Carrito y Ticket)

### 🛍️ Producto
```json
{
  "_id": "6612c6c9a6f8e2f3a8fdee4a",
  "title": "Zapatillas Urban Street",
  "description": "Zapatillas negras de diseño urbano",
  "price": 9500,
  "code": "ZAP-001",
  "stock": 12,
  "status": true,
  "category": "6612c6c9a6f8e2f3a8fdeaa1",
  "category_product": "calzado",
  "thumbnails": ["zapa1.jpg", "zapa2.jpg"],
  "owner": "admin",
  "purchases": 8
}
```

### 👤 Usuario
```json
{
  "_id": "6612c721a6f8e2f3a8fdee7b",
  "first_name": "Edgar",
  "last_name": "Steinberg",
  "age": 28,
  "email": "edgar@example.com",
  "password": "$2a$10$hashseguro",
  "cart": "6612c74da6f8e2f3a8fdee99",
  "role": "premium",
  "documents": [
    {
      "name": "Identificación",
      "reference": "uploads/documents/edgar_dni.pdf"
    }
  ],
  "last_connection": "2025-04-07T13:42:00.000Z"
}
```

### 🛒 Carrito
```json
{
  "_id": "6612c74da6f8e2f3a8fdee99",
  "products": [
    {
      "product": "6612c6c9a6f8e2f3a8fdee4a",
      "quantity": 2
    },
    {
      "product": "6612c7caa6f8e2f3a8fdef23",
      "quantity": 1
    }
  ]
}
```

### 🎟️ Ticket
```json
{
  "_id": "6612c8d2a6f8e2f3a8fdefb2",
  "code": "TICKET-123ABC",
  "amount": 28500,
  "purchaser": "6612c721a6f8e2f3a8fdee7b",
  "cart": [
    {
      "product": "6612c6c9a6f8e2f3a8fdee4a",
      "quantity": 2
    },
    {
      "product": "6612c7caa6f8e2f3a8fdef23",
      "quantity": 1
    }
  ],
  "purchaseDateTime": "2025-04-07T14:05:23.000Z"
}
```

---

## 💬 Notas finales

Este proyecto fue realizado con el objetivo de afianzar conocimientos adquiridos en desarrollo backend y frontend. El frontend no utiliza motores de plantillas como Handlebars, sino una arquitectura moderna basada en React y hooks.

✨ ¡Gracias por visitar el repo! Feedbacks, PRs y memes son bienvenidos.

