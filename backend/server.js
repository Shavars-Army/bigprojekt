const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysqlConnection = require('./db');

const app = express();
const port = 3001; // oder eine andere gewünschte Portnummer

app.use(cors());
app.use(bodyParser.json());

// Beispiel-Route, um Daten aus der Datenbank abzurufen
// app.get('/api/data', (req, res) => {
//     mysqlConnection.query('SELECT * FROM databasesql.test', (err, rows) => {
//         if (err) {
//             console.error('Error querying MySQL: ' + err.stack);
//             res.status(500).send('Database query error');
//             return;
//         }
//         console.log('Fetched rows:', rows);
//         res.json(rows);
//     });
// });

// app.post('/api/data1', (req, res) => {
//     mysqlConnection.query('INSERT INTO test (id, user) VALUES (3, "erik")', (err, result) => {
//         if (err) {
//             console.error('Error querying MySQL: ' + err.stack);
//             res.status(500).send('Database query error');
//             return;
//         }
//         res.json("erfolgreich");
//     });
// });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
