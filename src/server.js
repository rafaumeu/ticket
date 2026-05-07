import http from "node:http";
import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

async function listener(req, res) {
  await jsonHandler(req, res);
  routeHandler(req, res);
}

http.createServer(listener).listen(3333);
