function accountController() {
  var controller = this;

  controller.settings = {
    enableFriends: true
  };
}

angular
  .module('starter')
  .controller('AccountController',  accountController);
