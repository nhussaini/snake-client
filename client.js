const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131", // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //print the message recieved from server.
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write("Name: nhu");
  });
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // }); 
  return conn;
};

module.exports = {connect};