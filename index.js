var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("New connection ");
});
