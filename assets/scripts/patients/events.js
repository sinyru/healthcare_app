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
    .then(()=>onPatientIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onPatientDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;

  api.patientDelete(id)
    .then(()=>onPatientIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onPatientShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  store.patientId=id;
  api.patientShow(id)
    .then(ui.successShow)
    ;
};

const onPatientUpdate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id=store.patientId;
  api.patientUpdate(data, id)
    .then(()=>onPatientIndex(event))
    ;
};

const addHandlers = () => {
  $('.patient-index').on('click', onPatientIndex);
  $('.patient-display').on('submit', '#patient-create', onPatientCreate);
  $('.patient-display').on('click', '#patient-delete', onPatientDelete);
  $('.patient-display').on('click', '#patient-update', onPatientShow);
  $('.patient-update').on('submit', '#patient-update-form', onPatientUpdate);
};


module.exports = {
  addHandlers,
};
