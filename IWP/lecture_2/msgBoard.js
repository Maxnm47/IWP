let msgBoard = {
    name : "IWP Chat",
    messages : [],
    callBacks : [],
    putMessage(str){
        this.messages.push(str + "\n");
    },
    printMessages(){
        console.log(this.messages.join(""));
    },
    register(f){
        this.callBacks.push(f);
    },
    sendAndNotify(str){
        this.putMessage(str);
        this.callBacks.forEach(cb => cb(this.name, str));
    }
}

var msg = Object.create(msgBoard);

msg.register(function(boardName, message){
    console.log(`New message received from ${boardName}: "${message}"`);
});

msg.sendAndNotify("balls");
msg.sendAndNotify("balls2");
msg.sendAndNotify("balls3");


