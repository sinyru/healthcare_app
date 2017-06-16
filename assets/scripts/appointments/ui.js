'use strict';

const store = require('../store');
const events = require('./events');
const appointmentIndexHandlebars = require('../templates/helpers/appointment-index.handlebars');
const appointmentUpdateHandlebars = require('../templates/helpers/appointment-update.handlebars');

const successIndex = (data) => {
  console.log(data);
  let appointmentHtml = appointmentIndexHandlebars({
    appointments: data.appointments,
    patients: store.patients,
    doctors: store.doctors,
  });
  $('.appointment-display').html(appointmentHtml);
  $('.appointment-show').hide();
  $('.appointment-display').show();
  $('.patient-display').hide();
  $('.patient-show').hide();
  $('.doctor-display').hide();
  $('.doctor-show').hide();
  $('.drug-display').hide();
  $('.drug-show').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  let appointmentUpdateHtml = appointmentUpdateHandlebars({
    appointment: data.appointment,
    patients: store.patients,
    doctors: store.doctors,
  });
  $('.appointment-update').html(appointmentUpdateHtml);
  $('.appointments').hide();
  $('#appointment-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,

};
