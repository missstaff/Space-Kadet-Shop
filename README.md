# Space-Kadet-Shop

Space Kadet Shop is an ecommerce site running on a full MERN stack; using a MongoDB cloud cluster for database/administrative needs.<br/>

To run this application you will need to install: <br/> 1. node.js if it is not already installed on your machine. <br/> 2. And either install MongoDB locally or create a MongoDB Cloud Cluster. <br/>

After installing items above: <br/> 1. Clone this repository <br/> 2. Rename the env-example file in the root folder to .env <br/>
a. add your MongoDB connection string ~ if it is not to cloud use mongodb://localhost/SpaceKadet <br/>
b. for the JWT_SECRET create a secure string <br/>
c. set port to 5000 <br/>
d. set SKIP_PREFLIGHT_CHECK to true <br/> 3. Open a terminal on the root folder <br/>
a. run the command npm install <br/>
b.run the command npm start to run the dev server <br/> 4. Open a new terminal <br/>
a. cd frontend <br/>
b. run the command npm install <br/>
c. use the command npm start the application. <br/>
