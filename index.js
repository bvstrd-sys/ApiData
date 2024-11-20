const jsonServer = require ("json-server");
const serve = jsonServer.create();
const router = jsonServer.router("almacen.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

serve.use(middlewares);
serve.use(router);
serve.listen(port);