function MessageBoard(name) {
  this.name = name;
  this.messages = [];
  this.callBacks = [];
}

MessageBoard.prototype.putMessage = function(str) {
  this.messages.push(str);
};

MessageBoard.prototype.printMessages = function() {
  console.log(this.messages.join("\n"));
};

MessageBoard.prototype.register = function(callback) {
  this.callBacks.push(callback);
};

MessageBoard.prototype.sendAndNotify = function(message) {
  this.putMessage(message);
  this.callBacks.forEach(function(callback) {
    callback(this.name, message);
  }, this);
};

var msgBoard = new MessageBoard("IWP Chat");
var msgboard2 = new MessageBoard("help");

