'use strict';

const config = require('../config');
const store = require('../store');


const doctorIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/doctors',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const doctorCreate = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/doctors/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const doctorDelete = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/doctors/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};

const doctorShow = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/doctors/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const doctorUpdate = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/doctors/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  doctorIndex,
  doctorCreate,
  doctorDelete,
  doctorUpdate,
  doctorShow,
};
