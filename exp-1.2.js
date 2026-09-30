const EventEmitter = require('events'); 
const button = new EventEmitter();
 button.on('click', () => { console.log('Button clicked!'); }); 
 button.on('mouseover', () => { console.log('Mouse is over the button.'); });
  button.on('submit', () => { console.log('Form submitted!'); });
  // Simulating DOM events 
   button.emit('click');
    button.emit('mouseover'); 
    button.emit('submit');
