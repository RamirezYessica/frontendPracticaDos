# Frontend - Carrito de Compras

Este proyecto corresponde al **frontend** de una aplicación de carrito de compras.
Está desarrollado con **React** y **TypeScript**, y consume una API REST para mostrar productos, agregar productos al carrito y gestionar cantidades.

La aplicación se enfoca en una experiencia simple y clara, simulando el flujo básico de un e-commerce.

---

## Tecnologías utilizadas

- React (última versión)
- TypeScript
- Vite
- HTML / JSX
- CSS
- Fetch API

---

## Estructura del proyecto

El frontend está organizado de la siguiente forma:

- **pages**: pantallas principales de la aplicación (`ProductList`, `CartPage`)
- **api**: funciones para comunicarse con el backend
- **types**: definiciones de tipos TypeScript
- **utils**: utilidades comunes (por ejemplo, manejo de `sessionId`)
- **styles**: estilos CSS

Esta separación permite un código más claro y fácil de mantener.

##  Funcionalidades

- Mostrar listado de productos
- Agregar productos al carrito
- Visualizar el carrito
- Incrementar y decrementar cantidades
- Eliminar productos del carrito
- Mostrar el total del carrito
- Manejo de estado con React Hooks

## Comunicación con el backend

El frontend se comunica con el backend mediante peticiones HTTP utilizando `fetch`.

La URL base del backend se configura mediante variables de entorno:

```env
VITE_API_URL=http://localhost:8080/api

## Commo ejecutar el proyecto
- Clonar el repositorio
- Instalar dependencias: npm install
- Ejecutar el proyecto 
    npm run dev
- la aplicación estara disponible en:
http://localhost:5173