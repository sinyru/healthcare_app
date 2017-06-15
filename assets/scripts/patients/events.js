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
  console.log(data);

  api.patientCreate(data)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
    ;
};

const onPatientDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  console.log(id);

  api.patientDelete(id)
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error))
    ;
};

const onPatientShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  console.log(id);

  api.patientShow(id)
    .then(ui.successShow)
    ;
};

const addHandlers = () => {
  $('.patient-index').on('click', onPatientIndex);
  $('.patient-display').on('submit', '#patient-create', onPatientCreate);
  $('.patient-display').on('click', '#patient-delete', onPatientDelete);
  $('.patient-display').on('click', '#patient-update', onPatientShow);

};


module.exports = {
  addHandlers,
};
