export function updateStatus({ req, res, database }) {
  const { id } = req.params;
  const { solution } = req.body;

  database.update("tickets", id, {
    status: "closed",
    solution,
    updated_at: new Date().toISOString(),
  });
  return res.end();
}
