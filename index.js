const http = require("http");

const server = http.createServer((req, res) => {
  res.write("hello nodejs");
  res.end("response provided");
});

server.listen("3211","192.168.1.12" ,() => {
  console.log("server is running");
});