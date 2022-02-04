let greet = require("../greeting/index.js");
let msg = "Hello Rahul! ";

module.exports = `Hello Rahul! + ${greet}`;
console.log(msg + `${greet}`);
