'use strict';

const config = require('../config');
const store = require('../store');


const prescriptionIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/prescriptions',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const prescriptionCreate = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/prescriptions/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const prescriptionDelete = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/prescriptions/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};

const prescriptionShow = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/prescriptions/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const prescriptionUpdate = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/prescriptions/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  prescriptionIndex,
  prescriptionCreate,
  prescriptionDelete,
  prescriptionUpdate,
  prescriptionShow,
};
