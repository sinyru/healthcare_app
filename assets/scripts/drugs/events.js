'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const store = require('../store');


const onDrugIndex = function(event) {
  event.preventDefault();
  api.drugIndex()
    .then(ui.successIndex)
    .catch(ui.failureIndex)
    ;
};

const onDrugCreate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.drugCreate(data)
    .then(()=>onDrugIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onDrugDelete = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;

  api.drugDelete(id)
    .then(()=>onDrugIndex(event))
    .catch((error)=>console.log(error))
    ;
};

const onDrugShow = function(event) {
  event.preventDefault();
  let id = event.target.dataset.id;
  store.drugId=id;
  api.drugShow(id)
    .then(ui.successShow)
    ;
};

const onDrugUpdate = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  let id=store.drugId;
  api.drugUpdate(data, id)
    .then(()=>onDrugIndex(event))
    ;
};

const addHandlers = () => {
  $('.drug-index').on('click', onDrugIndex);
  $('.drug-display').on('submit', '#drug-create', onDrugCreate);
  $('.drug-display').on('click', '#drug-delete', onDrugDelete);
  $('.drug-display').on('click', '#drug-update', onDrugShow);
  $('.drug-update').on('submit', '#drug-update-form', onDrugUpdate);
};


module.exports = {
  addHandlers,
};
