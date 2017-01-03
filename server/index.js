'use strict';

const express = require('express');
const cors = require('cors');
const Geocoder = require('node-geocoder');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

// app.get('/', (req, res) => {
//    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// })

app.get('/api/geocode', (req, res, next) => {
  const geocoder = Geocoder({
    provider: req.query.provider || 'google'
  });

  geocoder.geocode(req.query.address)
    .then(data => ({
      raw: data.raw,
      data
    }))
    .then(json => res.send(json))
    .catch(next);
});

app.listen(process.env.PORT || 4000);
