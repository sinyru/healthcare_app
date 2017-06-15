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
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  let patientUpdateHtml = patientUpdateHandlebars({ patient: data.patient });
  $('.patient-update').html(patientUpdateHtml);
  $('.patients').hide();
  $('#patient-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
