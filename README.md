# SuperSimpleBlog API

Express.js server for Super Simple Blog. Saves data to a MongoDB Atlas instance. You can create a MongoDB Atlas instance using [this guide](https://www.mongodb.com/docs/atlas/getting-started/).

## Using this project

1. Make sure you have Node.js installed. You can find it [here](https://nodejs.org/en/)

2. Clone the project, change into the directory and install the dependencies
 
```Shell
git clone https://github.com/esteban-maciel/SuperSimpleBlog-API.git
cd SuperSimpleBlog-API
npm install
```

3. Create a .env file for environment variables in the application.

```Shell
touch .env
```

4. This server generates JWT tokens for authentication. You can generate a string for your 'secret' like [this](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs).

5. Add the following lines to your .env file

```
PORT=8080
ATLAS_URI=<your mongodb atlass uri>
JWT_SECRET=<your JWT secret>
```

6. Start the server in a dev environment using nodemon to automatically restart the server after changes.

```Shell
npm start dev
```

Your server is now active and ready to handle requests! Use this in conjuction with the [Super Simple Blog React.js Application](https://github.com/esteban-maciel/comp584-finalproject) or with Postman to see how it works!
