'use strict';

const store = require('../store');
const events = require('./events');

const successIndex = (data) => {
  console.log(data);
};

const failureIndex = (error) => {
  console.error(error);
};

module.exports = {
  successIndex,
  failureIndex,
};
