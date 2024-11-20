const jsonServer = require ("json-serve");
const serve = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(middlewares);
server.use(router);
 server.listen(port);