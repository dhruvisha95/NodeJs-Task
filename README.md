# Node.js Authentication API

This project implements user authentication APIs using **Node.js**, **Express**, and **Prisma** with a PostgreSQL database. It provides functionality for user registration and login, with secure password encryption and token-based authentication using **JWT (JSON Web Tokens)**.

## Features

1. **User Registration**
2. **User Login**
3. **JWT Authentication**
4. **Database Integration**
5. **Input Validations**


## Technologies Used

- **Node.js**
- **Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **JWT (jsonwebtoken)**
- **bcrypt**
- **dotenv**

## Installation and Setup

### Prerequisites

```plaintext
- Node.js: Ensure you have Node.js (v14 or later) installed.
- PostgreSQL: A running PostgreSQL instance.
- Prisma CLI: Install via `npm install prisma --save-dev`.
```

### Steps to Run the Project

```bash
# 1. Clone the Repository
$ git clone https://github.com/your-repo-name/authentication-api.git
$ cd authentication-api

# 2. Install Dependencies
$ npm install

# 3. Create a .env File in the Root Directory
# Example .env content:
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
JWT_SECRET=your_super_secret_key

# 4. Setup the Database
$ npx prisma generate
$ npx prisma migrate dev --name init

# 5. Start the Server
$ npm start
```

The server will run at `http://localhost:3000`.

---

## API Endpoints

### **Authentication Routes**

#### **POST /register**

Registers a new user.

- **Request Body:**
  ```json
  {
    "name": "JohnDoe",
    "email": "johndoe@example.com",
    "password": "StrongPass123"
  }
  ```
- **Responses:**
  - 200: Registration successful.
  - 400: Invalid input or username/email already exists.

#### **POST /login**

Authenticates a user and returns a token.

- **Request Body:**
  ```json
  {
    "email": "johndoe@example.com",
    "password": "StrongPass123"
  }
  ```
- **Responses:**
  - 200: Login successful (JWT token set in cookies).
  - 401: Invalid credentials.

### **Protected Routes**

#### **GET /protected**

Accessible only with a valid JWT token.

- **Headers:**
  ```plaintext
  Authorization: Bearer <token>
  ```
- **Responses:**
  - 200: Access granted.
  - 401: Unauthorized.
