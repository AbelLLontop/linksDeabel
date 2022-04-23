const express = require('express');
const cors = require('cors');
const app = express();
const middlewareDB = require('./db/middlewareBD');

app.set('port',(process.env.PORT || 4000));
/*
const urlOrigin = process.env.ORIGIN_URL || 'http://localhost:4000';
app.use(cors({
    origin: urlOrigin
}));
*/
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api',middlewareDB);
app.use('/api/links',require('./routes/links'));
app.use('/api/categories',require('./routes/categories'));


module.exports = app;