require('dotenv').config();

// Express App Setup
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const uuid = require('uuid').v4;

// Config
const config = require('./config');

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client
const { Pool } = require('pg');
const pgClient = new Pool({
  user: config.pgUser,
  host: config.pgHost,
  database: config.pgDatabase,
  password: config.pgPassword,
  port: config.pgPort
});
pgClient.on('error', () => console.log('Lost Postgres connection'));

// Get all movies
app.get('/movies/', async (req, res) => {
  const movies = await pgClient
    .query('SELECT * FROM movies')
    .catch(e => {
      res
        .status(500)
        .send(`Encountered an internal error when fetching movies`);
    });
    res.status(200).send(movies.rows);
});

// Get a single movie
app.get('/movies/:id', async (req, res) => {
  const id = req.params.id;
  const movie = await pgClient
    .query('SELECT * FROM movies WHERE id = $1 LIMIT 1', [id])
    .catch(e => {
      res
        .status(500)
        .send(`Encountered an internal error when fetching item with ID ${id}`);
    });
    res.status(200).send(movie.rows);
});

// Server
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));