'use strict';

const store = require('../store');
const events = require('./events');
const drugIndexHandlebars = require('../templates/helpers/drug-index.handlebars');
const drugUpdateHandlebars = require('../templates/helpers/drug-update.handlebars');


const successIndex = (data) => {
  console.log(data);
  let drugHtml = drugIndexHandlebars({ drugs: data.drugs });
  $('.drug-display').html(drugHtml);
  $('.drug-show').hide();
  $('.drug-display').show();
  $('.patient-display').hide();
  $('.patient-show').hide();
  $('.doctor-display').hide();
  $('.doctor-show').hide();
  $('.appointment-display').hide();
  $('.appointment-show').hide();
  $('.prescription-display').hide();
  $('.prescription-show').hide();
};

const failureIndex = (error) => {
  console.error(error);
};

const successShow = (data) => {
  console.log(data.drug.id);
  console.log(store.appointments);
  let drugUpdateHtml = drugUpdateHandlebars({
    drug: data.drug,
  });
  $('.drug-update').html(drugUpdateHtml);
  $('.drugs').hide();
  $('#drug-create-btn').hide();
};



module.exports = {
  successIndex,
  failureIndex,
  successShow,
};
