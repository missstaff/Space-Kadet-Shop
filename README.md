# Space-Kadet-Shop

Space Kadet Shop is an ecommerce site running on a full MERN stack; using a MongoDB cloud cluster for database/administrative needs.<br/>
This was written following the Amazona tutorial by Basher on Udemy. I have a few changes I am implementing such as adding a tracking number to the clients order.
## To run this application you will need to install:

- node.js if it is not already installed on your machine.
- And either install MongoDB locally or create a MongoDB Cloud Cluster.

## After installing items above:

### 1. Clone this repository

### 2. Setup MongoDB

- Local MongoDB download from from https://www.mongodb.com/try/download/community
- set MONGODB_URL=mongodb://localhost/SpaceKadet

##### OR

- Atlas MongoDB Cluster create database at https://cloud.mongodb.com
- set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Rename the env-example file in the root folder to .env

- add your MongoDB connection string, not already done
- for the JWT_SECRET create a secure string
- set port to 5000
- set SKIP_PREFLIGHT_CHECK to true

### 4. Start backend

- open a terminal on the root folder
- run the command npm install
- run the command npm start to run the dev server

### 5. Start the Application

- open a new terminal
- cd frontend
- run the command npm install
- use the command npm start the application.

### 6. Seed Data

- Run this on chrome: http://localhost:5000/api/users/seed
- see data.js for Admin login information
- Run this on chrome: http://localhost:5000/api/products/seed
