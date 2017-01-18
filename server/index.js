'use strict';

require('dotenv').config()
const express = require('express');
const cors = require('cors');
const Geocoder = require('node-geocoder');
const path = require('path');
const R = require('ramda');

const app = express();

app.use(cors());

app.use(express.static(path.resolve(__dirname, '..', 'build')));

const PROVIDER_OPTIONS = {
  here: {
    appId: process.env.HERE_APP_ID,
    appCode: process.env.HERE_APP_CODE
  }
};

app.get('/api/geocode', (req, res, next) => {
  const provider = req.query.provider || 'google';
  const options = PROVIDER_OPTIONS[provider]

  const geocoder = Geocoder(R.merge({
    provider,
    httpAdapter: 'request'
  }, options));

  geocoder.geocode(req.query.address)
    .then(data => ({
      raw: data.raw,
      data
    }))
    .then(json => res.send(json))
    .catch(next);
});

app.listen(process.env.PORT || 4000);
