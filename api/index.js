import { jsonHandler } from '../src/middlewares/jsonHandler.js';
import { routeHandler } from '../src/middlewares/routeHandler.js';

// Build a Node-style req/res pair from Vercel's request object
function buildNodeReq(vercelReq, body) {
  const parsed = new URL(vercelReq.url, `https://${vercelReq.headers.host || 'localhost'}`);

  const req = {
    method: vercelReq.method,
    url: parsed.pathname + parsed.search,
    headers: vercelReq.headers,
    body: null,
    params: {},
    query: {},
  };

  return req;
}

export default async function handler(vercelReq, vercelRes) {
  const req = buildNodeReq(vercelReq);

  // Simulate Node.js ServerResponse
  let statusCode = 200;
  const headers = {};
  let responseBody = '';

  const res = {
    writeHead(code, extraHeaders) {
      statusCode = code;
      if (extraHeaders) {
        Object.assign(headers, extraHeaders);
      }
      return this;
    },
    setHeader(key, value) {
      headers[key] = value;
      return this;
    },
    end(data) {
      if (data !== undefined) responseBody = data;
      return this;
    },
  };

  // Read body from Vercel request
  const body = vercelReq.body !== undefined
    ? vercelReq.body
    : {};

  // Parse body into req.body (emulate jsonHandler)
  try {
    req.body = typeof body === 'string' ? JSON.parse(body) : (body || null);
  } catch {
    req.body = null;
  }
  res.setHeader('Content-Type', 'application/json');

  // Run the existing route handler
  routeHandler(req, res);

  // Send response back to Vercel
  vercelRes.status(statusCode);
  for (const [key, value] of Object.entries(headers)) {
    vercelRes.setHeader(key, value);
  }
  vercelRes.send(responseBody || '');
}
