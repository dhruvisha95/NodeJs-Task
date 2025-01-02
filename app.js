const express = require('express');
const app = express();
const pg = require('pg');
const conString = "postgresql://postgres:postgres@127.0.0.1:5432/mydb"
var client = new pg.Client(conString);
client.connect();
const port = 3000 ;

require('dotenv').config();

client.connect((err) => {
    if (err) {
      console.error('Failed to connect to the database:', err.message);
    } else {
      console.log('Connected to the PostgreSQL database successfully');
    }
  });




app.get('/', async (req, res) => {
    try {
      // Query the database to get the name of the student with id=1
      const result = await client.query('SELECT name FROM users WHERE id = $1;', [1]);
  
      if (result.rows.length > 0) {
        // If the student exists, send their name as a response
        res.send(`Student Name: ${result.rows[0].name}`);
      } else {
        // If no student is found with id=1
        res.status(404).send('Student with ID 1 not found');
      }
    } catch (error) {
      // Handle query errors
      console.error('Error executing query:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });
  

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})