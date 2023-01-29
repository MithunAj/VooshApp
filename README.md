## Node API's for Voosh

Download the files and run the command "nodemon start" on your local machine


Here are the API's of this app;

### For new user: url/add-user (POST request)
We will store the name, phone number, and a new password (hased password)
send the "name", "phone" and "password" in the JSON format from body

### For Login user: url/login-user (POST request)
phone number, password
send the "phone" and "password" in the body, and after a successful authentication you will be getting a JWT token, make use if this token for other API calls

### For adding new order: url/add-order (POST request)
We will need "sub_total" which is an number in the body as JSON, and pass the JWT token from login-user in the header.

### Get order detail: url/get-order (GET request)
To get the order details, just pass the JWT token from login-user in the header, and you will be getting a list of orders placed


In case you use the react app from - https://github.com/MithunAj/VooshReact
Everything is done through UI.