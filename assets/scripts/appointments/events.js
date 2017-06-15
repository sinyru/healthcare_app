'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const patientApi = require('../patients/api');
const doctorApi = require('../doctors/api');


const onAppointmentIndex = function(event) {
  event.preventDefault();
  patientApi.patientIndex()
  .then((response)=>{
    store.patients = response.patients;
    console.log(store);
  })
  .then(()=>{
    doctorApi.doctorIndex()
    .then((response)=>{
      store.doctors = response.doctors;
      console.log(store);
    });
  })
  .then(()=>{
    api.appointmentIndex()
    .then(ui.successIndex)
    .catch(ui.failureIndex);
  });
};

const onAppointmentCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.appointmentCreate(data)
    .then(()=>onAppointmentIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onAppointmentDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;

  api.appointmentDelete(id)
    .then(()=>onAppointmentIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onAppointmentShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  store.appointmentId=id;
  api.appointmentShow(id)
    .then(ui.successShow)
    ;
};

const onAppointmentUpdate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id=store.appointmentId;
  api.appointmentUpdate(data, id)
    .then(()=>onAppointmentIndex(event))
    ;
};

const addHandlers = () => {
  $('.appointment-index').on('click', onAppointmentIndex);
  $('.appointment-display').on('submit', '#appointment-create', onAppointmentCreate);
  $('.appointment-display').on('click', '#appointment-delete', onAppointmentDelete);
  $('.appointment-display').on('click', '#appointment-update', onAppointmentShow);
  $('.appointment-update').on('submit', '#appointment-update-form', onAppointmentUpdate);
};


module.exports = {
  addHandlers,
};
