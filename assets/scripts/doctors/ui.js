'use strict';

const store = require('../store');
const events = require('./events');
const doctorIndexHandlebars = require('../templates/helpers/doctor-index.handlebars');
const doctorUpdateHandlebars = require('../templates/helpers/doctor-update.handlebars');


const successIndex = (data) => {
  console.log(data);
  let doctorHtml = doctorIndexHandlebars({ doctors: data.doctors });
  $('.doctor-display').html(doctorHtml);
  $('.doctor-show').hide();
  $('.doctor-display').show();
  $('.patient-display').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  let doctorUpdateHtml = doctorUpdateHandlebars({ doctor: data.doctor });
  $('.doctor-update').html(doctorUpdateHtml);
  $('.doctors').hide();
  $('#doctor-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
