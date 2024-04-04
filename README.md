# API de Sneakers Store

Esta es una API RESTful para una tienda de zapatillas, construida utilizando Node.js, Express y MongoDB. La API sigue el patrón de diseño Modelo-Controlador para mantener una estructura organizada y modular.

## Instalación

1. Clona este repositorio:

   ```
   git clone https://github.com/Andeveling/sneakers.git
   ```

2. Instala las dependencias:

   ```
   pnpm install
   ```

3. Configura las variables de entorno creando un archivo `.env` en la raíz del proyecto y estableciendo los valores necesarios (por ejemplo, la cadena de conexión a la base de datos MongoDB).

4. Inicia el servidor:

   ```
   pnpm run dev
   ```

## Estructura del Proyecto

- **`app.ts`**: Archivo principal que configura la aplicación Express.
- **`index.ts`**: Archivo que arranca el server y establece conexión con la base de datos.
- **`database/`**: Carpeta que contiene los ficheros de la conexión de la base de datos y un archivo seed.ts para ejecutar un seeding para hacer pruebas aplicación.
- **`controllers/`**: Carpeta que contiene los controladores de las diferentes entidades de la aplicación.
- **`models/`**: Carpeta que contiene los modelos de datos definidos utilizando Mongoose.
- **`routes/`**: Carpeta que contiene las definiciones de las rutas de la API.
- **`middlewares/`**: Carpeta que contiene los middlewares utilizados en la aplicación, como el manejador de errores.
- **`config.ts`**: Archivo que contiene la configuración de la aplicación, como las variables de entorno.

## Endpoints

### 1. GET /products

- **Descripción:** Esta ruta devuelve un array que contiene únicamente los productos que están actualmente en stock.

- **Respuesta exitosa (200 OK):**

  ```json
  [
    {
      "_id": "660ed86d473ec3162fe2463e",
      "name": "Shoes Nike",
      "brand": "660ed86d473ec3162fe2463b",
      "price": 140,
      "stock": 10,
      "__v": 0
    },
    {
      "_id": "660ed86d473ec3162fe2463f",
      "name": "Shoes Adidas",
      "brand": "660ed86d473ec3162fe2463c",
      "price": 120,
      "stock": 10,
      "__v": 0
    },
    {
      "_id": "660ed86d473ec3162fe24640",
      "name": "Shoes Puma",
      "brand": "660ed86d473ec3162fe2463d",
      "price": 100,
      "stock": 10,
      "__v": 0
    }
  ]
  ```

- **Respuesta de error** (500 Internal Server Error): En caso de producirse un error interno en el servidor.

### 2. GET /price/{user_id}/{nombre_producto}

- **Descripción:** Algunos clientes tienen precios especiales para ciertas marcas. Esta ruta devuelve el precio especial para el cliente y la marca especificados, si está disponible. Si el cliente no tiene un precio especial para la marca, la ruta devuelve el precio base.

- **Parámetros de la URL:**

  - {user_id}: El ID del cliente.
  - {nombre_producto}: El nombre del producto.
  - Ejemplo de solicitud: /price/1234/Zapatillas Nike Air Max

- **Respuesta exitosa (200 OK) con precio especial:**

```json
{
  "user": "Andres",
  "product": "Shoes Nike",
  "brand": "Nike",
  "price": 126
}
```

- **Respuesta exitosa (200 OK) sin precio especial:**

```json
{
  "user": "Jorge",
  "product": "Shoes Nike",
  "brand": "Nike",
  "price": 140
}
```

- **Respuesta de error (500 Internal Server Error):** En caso de producirse un error interno en el servidor.

## Patrón de Diseño Modelo-Controlador (MVC)

La aplicación sigue el patrón Modelo-Controlador (MVC) para separar las preocupaciones y mantener una estructura organizada:

- **Modelo**: Representa los datos y la lógica de negocio de la aplicación. Los modelos se definen utilizando Mongoose y representan las colecciones de la base de datos MongoDB.
- **Controlador**: Maneja las solicitudes HTTP, interactúa con los modelos y envía las respuestas adecuadas. Los controladores se encuentran en la carpeta `controllers`.
- **Rutas**: Definen las rutas de la API y mapean las solicitudes HTTP a los controladores correspondientes. Se encuentran en la carpeta `routes`.

## Manejo de Errores

La aplicación incluye un middleware de manejo de errores para gestionar cualquier error que ocurra durante el procesamiento de una solicitud. El middleware está diseñado para proporcionar mensajes de error claros en entornos de desarrollo y ocultar detalles sensibles en entornos de producción.
