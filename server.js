const http = require("http");

const server = http.createServer((request, response) => {
  response.end("Voilà la réponse du server !");
});

server.listen(process.env.PORT || 3000);
