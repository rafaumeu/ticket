import { randomUUID } from "node:crypto";

const VALID_PRIORITIES = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

export function create({ req, res, database }) {
  const { equipment, description, user_name, priority } = req.body;

  const normalizedPriority = priority ? priority.toUpperCase() : "MEDIUM";

  if (!VALID_PRIORITIES.includes(normalizedPriority)) {
    return res.writeHead(400).end(
      JSON.stringify({
        error: `Invalid priority. Must be one of: ${VALID_PRIORITIES.join(", ")}`,
      }),
    );
  }

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    priority: normalizedPriority,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  database.insert("tickets", ticket);
  return res.writeHead(201).end(JSON.stringify(ticket));
}
