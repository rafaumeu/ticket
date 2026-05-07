export function index({ req, res, database }) {
  const { status, priority, search } = req.query;

  const filters = status ? { status } : undefined;
  let tickets = database.select("tickets", filters);

  if (priority) {
    tickets = tickets.filter(
      (ticket) =>
        ticket.priority &&
        ticket.priority.toUpperCase() === priority.toUpperCase(),
    );
  }

  if (search) {
    const keyword = search.toLowerCase();
    tickets = tickets.filter(
      (ticket) =>
        ticket.equipment?.toLowerCase().includes(keyword) ||
        ticket.description?.toLowerCase().includes(keyword),
    );
  }

  return res.writeHead(200).end(JSON.stringify(tickets));
}
