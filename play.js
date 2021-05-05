
const { connect } = require("./client");
const { setupInput } = require("./input");


console.log("Connecting ...");

const connetObj = connect();

setupInput(connetObj);