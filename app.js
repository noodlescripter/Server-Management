const express = require('express');
const app = express();
const { info, log, error } = require('console')
const path = require('path')
const mate = require('ejs-mate');
const servers = require('./SERVER/LSServer')
const serverStatus = require('./SERVER/serverStatus');
app.set(
    'views',
    path.join(__dirname, 'views')
)
app.set(
    'view engine',
    'ejs'
)
app.engine('ejs', mate);
app.use(express.static('views'));

app.get('/home', (req, res) => {
    res.render('pages/home', {servers});
});

//ls of server


//
app.listen(9991, () => {info("Server is listeing on http://localhost:9991")})