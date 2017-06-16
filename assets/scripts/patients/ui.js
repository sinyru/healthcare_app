'use strict';

const store = require('../store');
const events = require('./events');
const patientIndexHandlebars = require('../templates/helpers/patient-index.handlebars');
const patientUpdateHandlebars = require('../templates/helpers/patient-update.handlebars');


const successIndex = (data) => {
  console.log(data);
  let patientHtml = patientIndexHandlebars({ patients: data.patients });
  $('.patient-display').html(patientHtml);
  $('.patient-show').hide();
  $('.patient-display').show();
  $('.doctor-display').hide();
  $('.appointment-display').hide();
  $('.doctor-show').hide();
  $('.appointment-show').hide();
  $('.drug-display').hide();
  $('.drug-show').hide();
  $('.prescription-display').hide();
  $('.prescription-show').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  console.log(data.patient.id);
  console.log(store.appointments);
  let patientAppointments = [];
  for(let i=0;i<store.appointments.length;i++){
    if (store.appointments[i].patient_id ===data.patient.id){
      patientAppointments.push(store.appointments[i]);
    }
  }
  let patientUpdateHtml = patientUpdateHandlebars({
    patient: data.patient,
    appointments: patientAppointments,
  });
  $('.patient-update').html(patientUpdateHtml);
  $('.patients').hide();
  $('#patient-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
