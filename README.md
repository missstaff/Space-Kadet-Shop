# Space-Kadet-Shop

Space Kadet Shop is an ecommerce site running on a full MERN stack; using a MongoDB cloud cluster for database/administrative needs.<br/>

To run this application you will need to install: <br/> 1. node.js if it is not already installed on your machine. <br/> 2. And either install MongoDB locally or create a MongoDB Cloud Cluster. <br/>

After installing items above: <br/> 1. Clone this repository <br/> 2. Setup MongoDB <br/>
a. Local MongoDB download from from https://www.mongodb.com/try/download/community <br/>
i. set MONGODB_URL=mongodb://localhost/SpaceKadet <br/>
b. Atlas MongoDB Cluster create database at https://cloud.mongodb.com <br/>
i. Set MONGODB_URL=mongodb+srv://your-db-connection <br/> 3. Rename the env-example file in the root folder to .env <br/>
a. add your MongoDB connection string, not already done <br/>
b. for the JWT_SECRET create a secure string <br/>
c. set port to 5000 <br/>
d. set SKIP_PREFLIGHT_CHECK to true <br/> 4. Open a terminal on the root folder <br/>
a. run the command npm install <br/>
b.run the command npm start to run the dev server <br/> 5. Open a new terminal <br/>
a. cd frontend <br/>
b. run the command npm install <br/>
c. use the command npm start the application. <br/>
