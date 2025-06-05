Express.js RESTful API project:

#Express.js RESTful API – Products CRUD Application

This is a RESTful API built with **Express.js** for managing a `products` resource. It implements standard CRUD operations, proper routing, middleware, and error handling. Additional features include filtering, pagination, and search.

---

## Features

- CRUD operations for `products`
- Middleware:
  - Logger
  - Authentication
  - JSON parsing
  - Validation
- Global error handling
- Query filtering by category
- Pagination
- Search by product name
- Product statistics (e.g., count by category)
- Swagger API documentation

---

## 📁 Project Structure

my-app1/
│
├── server.js
├── routes/
│ └── productRoutes.js
├── controllers/
│ └── productController.js
├── middleware/
│ ├── auth.js
│ ├── logger.js
│ ├── errorHandler.js
│ └── validateProduct.js
├── utils/
│ └── customErrors.js
├── docs/
│ └── swagger.js
├── .env
├── .env.example
├── package.json
└── README.md

---

##Installation

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

```bash
# Cloning the repo or navigating to the project folder
cd my-app1

# Installing dependencies
npm install

# Creating environment file
copy .env.example .env
Updating the .env with preferred values:

ini

API_KEY=your_api_key_here
PORT=3000

# Running the Server

node server.js
Server will start at:
http://localhost:3000

# API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a single product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
GET	/api/products/search?q=	Search products by name
GET	/api/products/stats	Get product statistics

All POST, PUT, DELETE endpoints require an API_KEY in the headers:

headers: { "x-api-key": "your_api_key_here" }

# Authentication
Include your API key in each secured request:

x-api-key: your_api_key_here

# Example Requests
# Create a Product

POST /api/products
Content-Type: application/json
x-api-key: your_api_key_here

{
  "name": "Smartphone",
  "description": "Latest 5G phone",
  "price": 999,
  "category": "Electronics",
  "inStock": true
}

# Search Products

GET /api/products/search?q=smart

# Swagger Documentation
Visit http://localhost:3000/api-docs to access the auto-generated Swagger UI.

# License
This project is for educational purposes only.

# Checklist for Submission

server.js created

 Proper folder structure (routes, controllers, middleware)

 .env and .env.example files included

 All required dependencies installed

 README with setup and usage instructions








