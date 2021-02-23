const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

var corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

// Routes
require('./app/routes/auth-routes')(app);
require('./app/routes/user-routes')(app);

app.listen(PORT, ()=> {
    console.log('Server is listening on port ' + PORT);
})
