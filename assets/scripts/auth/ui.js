'use strict';

const failureSignUp = (error) => {
  console.error(error);
};

const successSignIn = () => {
  $(".before-login").hide();
  $(".after-login").show();
};

const failureSignIn = (data) => {
  if (data) {
    console.log(data);
  }
};

const successSignOut = (data) => {
  $(".before-login").show();
  $(".after-login").hide();
};

const failureSignOut = (data) => {
  if (data) {
    console.log(data);
  }
};

const successChangePassword = (data) => {
  $(".after-login").show();
  $(".change-password-div").hide();
};

const failureChangePassword = (data) => {
  if (data) {
    console.log(data);
  }
};

module.exports = {
  failureSignUp,
  successSignIn,
  failureSignIn,
  successSignOut,
  failureSignOut,
  successChangePassword,
  failureChangePassword,
};
