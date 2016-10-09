function chatsController(Chats) {
  var controller = this;

  controller.chatList = Chats.all();
  controller.remove = function(chat) {
    Chats.remove(chat);
  };
}

angular
  .module('starter')
  .controller('ChatsController', chatsController);
