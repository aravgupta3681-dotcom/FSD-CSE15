// console.log("Hello World");
// console.log("I am Arav Gupta");
// console.log("3+6 = " + (3 + 6));
// console.log("This is a simple javascript program");
// console.error("This is an error message");
// console.warn("This is an warning message");
// console.info("This is an informational message");
// console.debug("This is a debug message");
// console.log(process.platform);
// console.log(global.Lnumber);
// global.Lnumber = "729";
// console.log(global.Lnumber);
// //KOI BHI LE SAKTE HAIN JAISE Lnumber/Anumber/arav......
// global.arav = "275";
// console.log(global.arav);
// process.on('exit',function(){});
// console.log('good');

const{EventEmitter} = require('events');//functiion
const eventEmitter = new EventEmitter();//function ki class
eventEmitter.on('lunch',() =>{
    console.log('Arav Gupta 1')
    //multiple bhi kar sakte hain
    console.log('Arav Gupta 2')
})
eventEmitter.emit('lunch');//to trigger the event
eventEmitter.emit('lunch');