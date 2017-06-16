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
  $('.appointment-display').hide();
  $('.patient-show').hide();
  $('.appointment-show').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  console.log(data.doctor.id);
  console.log(store.appointments);
  let doctorAppointments = [];
  for(let i=0;i<store.appointments.length;i++){
    if (store.appointments[i].doctor_id ===data.doctor.id){
      doctorAppointments.push(store.appointments[i]);
    }
  }
  let doctorUpdateHtml = doctorUpdateHandlebars({
    doctor: data.doctor,
    appointments: doctorAppointments,
  });
  $('.doctor-update').html(doctorUpdateHtml);
  $('.doctors').hide();
  $('#doctor-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
