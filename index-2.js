const os = require('os');
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus());
console.log("Homedir:", os.homedir());
console.log("Hostname:", os.hostname());