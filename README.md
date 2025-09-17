# 📚 Notes Manager App (MERN Stack)

A full-stack web application built with MongoDB, Express.js, React, and Node.js that allows users to create, manage, and delete their personal notes. The application features user authentication and a separate admin panel for moderation.

---

## ✨ Features

### User Features
-   **Authentication**: Secure user registration and login with JWT.
-   **Create Notes**: Users can add new notes with a title and description.
-   **View Notes**: Logged-in users can view all their personal notes on a dashboard.
-   **Edit & Delete Notes**: Users have full control to update or remove their own notes.
-   **Protected Routes**: User dashboard and note operations are protected and accessible only after logging in.

### Admin Features (Bonus)
-   **View All Users**: Admins can see a list of all registered users.
-   **View All Notes**: Admins can view a list of all notes created by every user.
-   **Delete Notes**: Admins have the authority to delete any inappropriate note from the platform.
-   **Role-Based Access**: The admin panel is a protected route accessible only to users with an 'admin' role.

---

## ⚙️ Tech Stack

-   **Frontend**: React.js, React Router, Axios
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (with Mongoose)
-   **Authentication**: JSON Web Tokens (JWT), bcryptjs

---

## 🛠️ Setup and Installation

Follow these instructions to get the project running on your local machine.

### Prerequisites
-   Node.js (v14 or later)
-   npm
-   MongoDB (either locally or a free MongoDB Atlas cluster)

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/notes-manager-app.git](https://github.com/your-username/notes-manager-app.git)
    cd notes-manager-app
    ```

2.  **Backend Setup:**
    ```bash
    # Navigate to the backend folder
    cd backend

    # Install dependencies
    npm install

    # Create a .env file in the /backend folder and add your variables
    # (see the Environment Variables section below)
    ```

3.  **Frontend Setup:**
    ```bash
    # Navigate to the frontend folder from the root directory
    cd frontend

    # Install dependencies
    npm install
    ```

### Running the Application

You'll need to run the backend and frontend servers in two separate terminals.

1.  **Run the Backend Server:**
    ```bash
    # In the /backend directory
    npm run dev
    ```
    The server should start on `http://localhost:5001`.

2.  **Run the Frontend Server:**
    ```bash
    # In the /frontend directory
    npm start
    ```
    The React app will open in your browser at `http://localhost:3000`.

---

## 🔑 Environment Variables

To run the backend, you need to create a `.env` file in the `/backend` directory with the following variables:

```ini
# Port for the server to run on
PORT=5001

# Your MongoDB connection string
MONGO_URI=your_mongodb_connection_string_here

# A secret key for signing JWT tokens
JWT_SECRET=your_jwt_secret_key
