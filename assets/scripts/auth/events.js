'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const store = require('../store');
// const gameData = require('../gameData');
// const game=require('../game');

const onSignUp = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const onSignIn = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
  .then((response) => {
    store.user = response.user;
    return store;
  })
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.success)
  .catch(ui.failure)
  ;
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
  .then(() => {
    delete store.user;
    return store;
  })
  .then(ui.success)
  .catch(ui.failure)
  ;
};




// const onUpdateGame = function (event) {
//   event.preventDefault();
//   api.updateGame(store.game.id, game.index)
//   .then(ui.success)
//   .catch(ui.failure);
//
// };

const onShowHistory = function (event) {
  event.preventDefault();
  api.showHistory()
  .then(ui.showSuccess)
  .catch(ui.failure)
  ;
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#game-history').on('click', onShowHistory);
  // $('#cbtn').on('click', onUpdateGame);
};

module.exports = {
  addHandlers,
};
