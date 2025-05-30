# Proyecto CRUD

Este repositorio contiene el código fuente completo del **proyecto final** para la materia _Desarrollo Web del Lado del Servidor_ de la **Universidad Autónoma de Sinaloa**, que consiste en un sistema **CRUD (Crear, Leer, Actualizar y Eliminar)** de usuarios, desarrollado con **Node.js**, **Express**, **Sequelize** y **SQLite** en el backend, y **React** en el frontend.

---

## 📁 Estructura del proyecto

- `frontend/`: Código del cliente hecho en React.
- `backend/`: API creada con Express y Sequelize.
- `Codigo_Imagenes_CRUD_Proyectofinal.pdf`: Documento con toda la información técnica y funcional, asi como Imagenes.

---

## 🧰 Tecnologías utilizadas

### Backend:
- Node.js  
- Express  
- Sequelize ORM  
- SQLite (DB Browser for SQLite)  
- CORS

### Frontend:
- React  
- Axios  
- CSS modular (por componente)

---

## 📌 Funcionalidades

- Registrar usuarios con nombre, apellido, correo, etc.  
- Listar todos los usuarios registrados.  
- Buscar usuarios por nombre, apellido, correo o ID.  
- Editar los datos de un usuario.  
- Eliminar usuarios.  
- Sincronización en tiempo real entre frontend y backend mediante API REST.

---

## 🧱 Componentes Destacados (Frontend)

- `Agregar.jsx`: Muestra un formulario emergente para registrar nuevos usuarios.  
- `Busqueda.jsx`: Permite buscar usuarios en tiempo real por distintos campos.  
- `Editar.jsx`: Muestra un formulario editable para actualizar los datos de un usuario.  
- `Usuarios.jsx`: Componente principal que gestiona estados, interacciones y renderizado de la tabla.  
- `Header.jsx`: Elemento visual decorativo.  
- `App.js`: Controla la navegación de rutas, siempre mostrando `Usuarios.jsx`.  
- `Main.jsx`: Punto de entrada del DOM y aplicación.  

---

## 📚 Documentación

Puedes ver o descargar la documentación completa desde el siguiente enlace:

👉 [Ver Documentación del Proyecto](./Codigo_Imagenes_CRUD_Proyectofinal.pdf)

---

## 🚀 Cómo iniciar el proyecto

```bash
# Inicia el Backend
cd backend
npm i express
node app.js

# Inicia el Frontend
cd frontend
npm i
npm run dev
