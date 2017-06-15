'use strict';

const config = require('../config');
const store = require('../store');


const patientIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/patients',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const patientCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/patients/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const patientDelete = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/patients/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};

module.exports = {
  patientIndex,
  patientCreate,
  patientDelete,
};
