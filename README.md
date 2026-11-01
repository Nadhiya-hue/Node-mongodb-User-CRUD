# Node-mongodb-User-CRUD
Simple User Creation and Editing system built with Node.js, Express, and MongoDB.

# Node.js & MongoDB User CRUD Application

A simple and lightweight backend application demonstrating basic **CRUD (Create, Read, Update, Delete)** operations. This project allows you to create new users and edit existing user information, saving all changes directly to a MongoDB database.

## 🚀 Features
* **Create User:** Add new user records to the database.
* **Read User:** Retrieve existing user data.
* **Update User:** Edit and update profile information.
* **MongoDB Integration:** Persistent data storage using Mongoose/MongoDB.

## 🛠️ Tech Stack
* **Runtime:** [Node.js](https://nodejs.org)
* **Framework:** [Express.js](https://expressjs.com)
* **Database:** [MongoDB](https://www.mongodb.com/)
* **ODM:** [Mongoose](https://mongoosejs.com)

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd YOUR_REPOSITORY_NAME
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory and add your MongoDB connection URI and server port:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/userCRUD
```

### 4. Database Setup (MongoDB Compass)
1. Open **MongoDB Compass** on your computer.
2. Click on **New Connection**.
3. Paste your local connection string: `mongodb://localhost:27017` and click **Connect**.
4. Once connected, the application will automatically create a database named `userCRUD` (or your configured database name) when you save your first user.
5. You can view, refresh, and manually edit your `users` collection directly inside the Compass interface.

### 5. Run the Application
```bash
# Start the server
npm start
```
