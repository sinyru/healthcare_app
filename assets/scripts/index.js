'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const auth = require('./auth/events.js');
const patients = require('./patients/events.js');


$(() => {
  setAPIOrigin(location, config);
  auth.addHandlers();
  patients.addHandlers();
});

$("#btn-change-password").on('click', ()=>{
  $(".change-password-div").show();
  $(".after-login").hide();
});

$("#cancel-change-password").on('click', ()=>{
  $(".change-password-div").hide();
  $(".after-login").show();
});


require('./example');
