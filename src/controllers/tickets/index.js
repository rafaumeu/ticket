export function index({req, res, database}) {
  const { status } = req.query;
  console.log(status);
  const tickets = database.select("tickets");
  return res.writeHead(200).end(JSON.stringify(tickets));
}