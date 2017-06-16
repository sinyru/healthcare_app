'use strict';

const store = require('../store');
const events = require('./events');
const prescriptionIndexHandlebars = require('../templates/helpers/prescription-index.handlebars');
const prescriptionUpdateHandlebars = require('../templates/helpers/prescription-update.handlebars');


const successIndex = (data) => {
  console.log(data);
  let prescriptionHtml = prescriptionIndexHandlebars({
    prescriptions: data.prescriptions,
    drugs: store.drugs,
    patients: store.patients,
    doctors: store.doctors,
  });
  $('.prescription-display').html(prescriptionHtml);
  $('.prescription-show').hide();
  $('.prescription-display').show();
  $('.patient-display').hide();
  $('.patient-show').hide();
  $('.doctor-display').hide();
  $('.doctor-show').hide();
  $('.appointment-display').hide();
  $('.appointment-show').hide();
  $('.drug-display').hide();
  $('.drug-show').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  let prescriptionUpdateHtml = prescriptionUpdateHandlebars({
    prescription: data.prescription,
    drugs: store.drugs,
    patients: store.patients,
    doctors: store.doctors,
  });
  $('.prescription-update').html(prescriptionUpdateHtml);
  $('.prescriptions').hide();
  $('#prescription-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
