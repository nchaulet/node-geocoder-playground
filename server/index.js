'use strict';

const express = require('express');
const cors = require('cors');
const Geocoder = require('node-geocoder');

const app = express();

app.use(cors());

app.get('/geocode', (req, res, next) => {
  const geocoder = Geocoder();
  geocoder.geocode(req.query.address)
    .then(data => ({
      raw: data.raw,
      data
    }))
    .then(json => res.send(json))
    .catch(next);
});

app.listen(4000);
