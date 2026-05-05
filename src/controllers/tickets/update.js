export function update({req, res, database}) {
  const { id } = req.params	
  const { equipment, description, priority } = req.body
  database.update("tickets", id, { equipment, description, priority, updated_at: new Date().toISOString() })
  return res.end()
}
