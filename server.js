

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require('path');


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// =============================================================
require('./routes/htmlroutes.js')(app);
/* app.use(routes); */


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});