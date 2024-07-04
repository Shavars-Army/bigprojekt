

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'bigprojectdb.cbupira9p1gb.eu-central-1.rds.amazonaws.com',
    user: 'admin',
    password: 'PartyKeller23!?',
    database: 'databasesql'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as ID: ' + connection.threadId);
});

module.exports = connection;

