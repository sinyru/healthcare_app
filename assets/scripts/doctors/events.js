'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const appointmentApi = require('../appointments/api');


const onDoctorIndex = function(event) {
  event.preventDefault();
  appointmentApi.appointmentIndex()
  .then((response)=>{
    store.appointments = response.appointments;
  })
  .then(()=>{
    api.doctorIndex()
    .then(ui.successIndex)
    .catch(ui.failureIndex);
  });
};

const onDoctorCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.doctorCreate(data)
    .then(()=>onDoctorIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onDoctorDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;

  api.doctorDelete(id)
    .then(()=>onDoctorIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onDoctorShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  store.doctorId=id;
  api.doctorShow(id)
    .then(ui.successShow)
    ;
};

const onDoctorUpdate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id=store.doctorId;
  api.doctorUpdate(data, id)
    .then(()=>onDoctorIndex(event))
    ;
};

const addHandlers = () => {
  $('.doctor-index').on('click', onDoctorIndex);
  $('.doctor-display').on('submit', '#doctor-create', onDoctorCreate);
  $('.doctor-display').on('click', '#doctor-delete', onDoctorDelete);
  $('.doctor-display').on('click', '#doctor-update', onDoctorShow);
  $('.doctor-update').on('submit', '#doctor-update-form', onDoctorUpdate);
};


module.exports = {
  addHandlers,
};
