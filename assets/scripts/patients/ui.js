'use strict';

const store = require('../store');
const events = require('./events');
const patientIndexHandlebars = require('../templates/helpers/patient-index.handlebars');


const successIndex = (data) => {
  console.log(data);
  let patientHtml = patientIndexHandlebars({ patients: data.patients });
  $('.patient-display').html(patientHtml);
};

const failureIndex = (error) => {
  console.error(error);
};

module.exports = {
  successIndex,
  failureIndex,
};
