'use strict';

// const store = require('../store');

const success = (data) => {
  // handles success
  if (data) {
    console.log(data);
  }
};

const failure = (error) => {
  // handles error
  console.error(error);
};

const showSuccess = (data) => {
  if (data) {
    console.log(data);
  }
};


module.exports = {
  success,
  failure,
  showSuccess,

};
