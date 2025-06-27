// Import Express
const express = require('express');

// Create app, configure to parse JSON requests
const app = express ();
app.use(express.json());

// Server code
const PORT = process.env.PORT || 3000;

// Listen to specified port
app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) =>{
    const status = {
        "Status": "Running"
    };
    response.send(status);
});
