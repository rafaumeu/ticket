import { parseRoutePath } from "../utils/parseRoutPath.js";
import { tickets } from "./tickets.js";

export const routes = [...tickets].map((route) => ({ 
  ...route,
  path: parseRoutePath(route.path)
  }))

