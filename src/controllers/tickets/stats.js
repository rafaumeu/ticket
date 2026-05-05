export function stats({req, res, database}) {
  const tickets = database.select("tickets");

  const byStatus = {};
  const byPriority = {};

  for (const ticket of tickets) {
    const status = ticket.status || "unknown";
    byStatus[status] = (byStatus[status] || 0) + 1;

    const priority = ticket.priority || "MEDIUM";
    byPriority[priority] = (byPriority[priority] || 0) + 1;
  }

  return res.writeHead(200).end(JSON.stringify({
    total: tickets.length,
    byStatus,
    byPriority,
  }));
}
