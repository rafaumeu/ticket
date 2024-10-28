export function index({req, res, database}) {
  const { status } = req.query;
  
  const filters = status ? { status } : undefined;
  const tickets = database.select("tickets", filters);
  return res.writeHead(200).end(JSON.stringify(tickets));
}