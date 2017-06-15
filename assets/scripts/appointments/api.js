'use strict';

const config = require('../config');
const store = require('../store');


const appointmentIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/appointments',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const appointmentCreate = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const appointmentDelete = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};

const appointmentShow = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const appointmentUpdate = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/appointments/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  appointmentIndex,
  appointmentCreate,
  appointmentDelete,
  appointmentUpdate,
  appointmentShow,
};
