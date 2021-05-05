let connection;
const handleUserInput = function (key) {
  // your code here
  console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
    if(key === 'w'){
      //console.log('Move: up');
      connection.write("Move: up");     
    } 
    if(key === 'a') {
      connection.write("Move: left");
    } 
    if(key === 's') {
      connection.write("Move: down");
    } 
    if(key === 'd'){
      connection.write("Move: right");
    }
  
};
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //event listener
  stdin.on("data", (data) =>{
    handleUserInput(data);
  });
  return stdin;
};



module.exports = {setupInput};