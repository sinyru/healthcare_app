'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');


const onPatientIndex = function(event) {
  event.preventDefault();
  api.patientIndex()
  .then(ui.successIndex)
  .catch(ui.failureIndex);
};

const onPatientCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.patientCreate(data)
  .then(ui.successIndex)
  .catch(ui.failureIndex);
};


const addHandlers = () => {
  $('.patient-index').on('click', onPatientIndex);
};


module.exports = {
  addHandlers,
};
