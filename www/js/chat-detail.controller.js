function chatDetailController($stateParams, Chats) {
  var controller = this;

  controller.chat = Chats.get($stateParams.chatId);
}

angular
  .module('starter')
  .controller('ChatDetailController', chatDetailController);
