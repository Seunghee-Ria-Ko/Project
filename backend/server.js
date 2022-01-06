const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const dbConn = require('./config/db_con');
const recipesRoute = require('./routes/recipesRoute');
const vegeRoute = require('./routes/vegeRoute');
const port = 5000;

const app = express();

dbConn();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/', recipesRoute);
app.use('/', vegeRoute);

app.listen(port, ()=>{
    console.log(`Welcome to Express Server. The server is running on port ${port}`);
});
