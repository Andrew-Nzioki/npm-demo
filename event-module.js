//An event is a signal that something that has happened in our application
const EventEmitter=require('events');
const emitter =new EventEmitter();
//Register a listener
emitter.on('messageLogged',(arg)=>{console.log('Listener called',arg)})


emitter.emit('messageLogged',{id:1,url:'http://'})//making a noise or signaling something has happened.
 emitter.on('logging',(arg)=>{console.log('logging',arg)})
 emitter.emit('logging',{data:message})
