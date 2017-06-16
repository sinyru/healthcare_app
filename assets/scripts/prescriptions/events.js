'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const patientApi = require('../patients/api');
const doctorApi = require('../doctors/api');
const drugApi = require('../drugs/api');


const onPrescriptionIndex = function(event) {
  event.preventDefault();
  patientApi.patientIndex()
  .then((response)=>{
    store.patients = response.patients;
  })
  .then(()=>{
    doctorApi.doctorIndex()
    .then((response)=> store.doctors = response.doctors);
  })
  .then(()=>{
    drugApi.drugIndex()
    .then((response)=> {
      store.drugs = response.drugs;
    });
  })
  .then(()=>{
    api.prescriptionIndex()
    .then(ui.successIndex)
    .catch(ui.failureIndex);
  });
};

const onPrescriptionCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.prescriptionCreate(data)
    .then(()=>onPrescriptionIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onPrescriptionDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;

  api.prescriptionDelete(id)
    .then(()=>onPrescriptionIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onPrescriptionShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  store.prescriptionId=id;
  api.prescriptionShow(id)
    .then(ui.successShow)
    ;
};

const onPrescriptionUpdate = function(event) {
  event.preventDefault();

  let data = getFormFields(event.target);
  let id=store.prescriptionId;
  api.prescriptionUpdate(data, id)
    .then(()=>onPrescriptionIndex(event))
    ;
};

const addHandlers = () => {
  $('.prescription-index').on('click', onPrescriptionIndex);
  $('.prescription-display').on('submit', '#prescription-create', onPrescriptionCreate);
  $('.prescription-display').on('click', '#prescription-delete', onPrescriptionDelete);
  $('.prescription-display').on('click', '#prescription-update', onPrescriptionShow);
  $('.prescription-update').on('submit', '#prescription-update-form', onPrescriptionUpdate);
};


module.exports = {
  addHandlers,
};
