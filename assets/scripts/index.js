'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const auth = require('./auth/events.js');
const patients = require('./patients/events.js');
const doctors = require('./doctors/events.js');
const appointments = require('./appointments/events.js');


$(() => {
  setAPIOrigin(location, config);
  auth.addHandlers();
  patients.addHandlers();
  doctors.addHandlers();
  appointments.addHandlers();

});

$("#btn-change-password").on('click', ()=>{
  $(".change-password-div").show();
  $(".after-login").hide();
});

$("#cancel-change-password").on('click', ()=>{
  $(".change-password-div").hide();
  $(".after-login").show();
});

$(".patient-display").on('click', "#patient-create-btn", ()=>{
  $('.patients').hide();
  $('#patient-create').show();
  $('.patient-show').hide();
  $('#patient-create-btn').hide();
});

$(".doctor-display").on('click', "#doctor-create-btn", ()=>{
  $('.doctors').hide();
  $('#doctor-create').show();
  $('.doctor-show').hide();
  $('#doctor-create-btn').hide();
});

$(".appointment-display").on('click', "#appointment-create-btn", ()=>{
  $('.appointments').hide();
  $('#appointment-create').show();
  $('.appointment-show').hide();
  $('#appointment-create-btn').hide();
});

require('./example');
