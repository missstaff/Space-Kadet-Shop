# Space-Kadet-Shop

Space Kadet Shop is an ecommerce site running on a full MERN stack; using a MongoDB cloud cluster for database/administrative needs.<br/>

## To run this application you will need to install: <br/> 1. node.js if it is not already installed on your machine. <br/> 2. And either install MongoDB locally or create a MongoDB Cloud Cluster. <br/>

## After installing items above: <br/>

### 1. Clone this repository <br/>

### 2. Setup MongoDB <br/>

-     a. Local MongoDB download from from https://www.mongodb.com/try/download/community
-       i. set MONGODB_URL=mongodb://localhost/SpaceKadet
-     b. Atlas MongoDB Cluster create database at https://cloud.mongodb.com
-        i. Set MONGODB_URL=mongodb+srv://your-db-connection

### 3. Rename the env-example file in the root folder to .env <br/>

-     a. add your MongoDB connection string, not already done
-     b. for the JWT_SECRET create a secure string
-     c. set port to 5000
-     d. set SKIP_PREFLIGHT_CHECK to true

### 4. Start backend <br/>

-     a. Open a terminal on the root folder
-     b. run the command npm install
-     c.run the command npm start to run the dev server

### 5. Start the Application <br/>

-     a. Open a new terminal
-     b. cd frontend
-     c. run the command npm install
-     d. use the command npm start the application.

### 6. Seed Data

- a. Run this on chrome: http://localhost:5000/api/users/seed
- b. Run this on chrome: http://localhost:5000/api/products/seed
