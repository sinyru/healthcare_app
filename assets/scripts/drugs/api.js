'use strict';

const config = require('../config');
const store = require('../store');


const drugIndex = function() {
  return $.ajax({
    url: config.apiOrigin + '/drugs',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
  });
};

const drugCreate = function(data) {
  return $.ajax({
    url: config.apiOrigin + '/drugs/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

const drugDelete = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/drugs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    }
  });
};

const drugShow = function(id) {
  return $.ajax({
    url: config.apiOrigin + '/drugs/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
  });
};

const drugUpdate = function(data, id) {
  return $.ajax({
    url: config.apiOrigin + '/drugs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data
  });
};

module.exports = {
  drugIndex,
  drugCreate,
  drugDelete,
  drugUpdate,
  drugShow,
};
