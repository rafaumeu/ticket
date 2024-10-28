import { Database } from "../database/database.js";
import { routes } from "../routes/index.js";

const database = new Database()
export function routeHandler(req, res) {
  const route = routes.find((route) => {
    return route.method === req.method && route.path === req.url
  })

  if(route) {
    return route.controller({req, res, database})
  }
  

  return response.writeHead(404).end()
}