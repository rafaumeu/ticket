export function index({req, res, database}) {
  const tickets = database.select("tickets");
  return res.writeHead(200).end(JSON.stringify(tickets));
}