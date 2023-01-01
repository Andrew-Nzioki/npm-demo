const EventEmitter=require('events');

var url='http://mylogger.io/log';

class Logger extends EventEmitter{

 log(message){
    //sends an HTTP request
    console.log(message)

this.emit('messageLogged',{id:1,url:'http://'})//making a noise or signaling something has happened.
}}

module.exports =Logger;



 