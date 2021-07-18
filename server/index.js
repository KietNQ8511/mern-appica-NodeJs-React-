const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

const app = express();
dotenv.config();

const postRoutes = require('./routes/posts');

const connect = require('./connectMongoose');

connect();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/', (req, res) => { res.send("main page place in index.js file")})

PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`App listen  post ${PORT}` );})

