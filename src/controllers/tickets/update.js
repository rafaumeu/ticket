export function update({req, res, database}) {
  const { id } = req.params	
  const { equipment, description, user_name, status } = req.body
  
  return res.end()
}