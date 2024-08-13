# StudentApp - Student CRUD API with Vertical Slice Architecture

## Overview

This project is a Node.js application using a vertical slice architecture pattern. It provides a RESTful API for managing student data and includes JWT-based authentication. The application leverages Sequelize for ORM with SQLite and integrates Swagger for API documentation.

## Features

- **Vertical Slice Architecture**: Organizes code into vertical slices, each handling a specific feature or functionality.
- **Student Management**: CRUD operations for handling student data.
- **Authentication**: Secure user authentication using JWT.
- **Sequelize**: ORM for interacting with the SQLite database.
- **Swagger**: Integrated Swagger UI for API documentation.
- **Nodemon**: Automatically restarts the server when code changes are detected.

## Setup and Running

1. **Clone the repository**:
    ```bash
    git clone https://github.com/YourUsername/StudentApp.git
    cd StudentApp
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

4. **Explore the API**:
    The API can be tested using tools like Postman or through the built-in Swagger UI available at `http://localhost:3000/api-docs`.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
