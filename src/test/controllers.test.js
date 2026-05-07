import { describe, expect, it } from "vitest";
import { create } from "../controllers/tickets/create.js";
import { index } from "../controllers/tickets/index.js";
import { remove } from "../controllers/tickets/remove.js";
import { stats } from "../controllers/tickets/stats.js";
import { update } from "../controllers/tickets/update.js";
import { updateStatus } from "../controllers/tickets/updateStatus.js";

function mockRes() {
  const res = {
    statusCode: 200,
    body: null,
    writeHead(code) {
      res.statusCode = code;
      return res;
    },
    end(data) {
      res.body = data ? JSON.parse(data) : null;
      return res;
    },
  };
  return res;
}

function mockDb(data = {}) {
  return {
    data: { ...data },
    insert(table, row) {
      if (!this.data[table]) this.data[table] = [];
      this.data[table].push(row);
    },
    select(table) {
      return this.data[table] || [];
    },
    update(table, id, fields) {
      const arr = this.data[table] || [];
      const idx = arr.findIndex((r) => r.id === id);
      if (idx > -1) arr[idx] = { ...arr[idx], ...fields };
    },
    delete(table, id) {
      const arr = this.data[table] || [];
      const idx = arr.findIndex((r) => r.id === id);
      if (idx > -1) arr.splice(idx, 1);
    },
  };
}

describe("create controller", () => {
  it("should create a ticket with defaults", () => {
    const res = mockRes();
    const db = mockDb();
    create({
      req: {
        body: { equipment: "PC", description: "broken", user_name: "John" },
      },
      res,
      database: db,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.equipment).toBe("PC");
    expect(res.body.status).toBe("open");
    expect(res.body.priority).toBe("MEDIUM");
    expect(res.body.id).toBeDefined();
    expect(db.data.tickets.length).toBe(1);
  });

  it("should reject invalid priority", () => {
    const res = mockRes();
    create({
      req: {
        body: {
          equipment: "PC",
          description: "d",
          user_name: "J",
          priority: "INVALID",
        },
      },
      res,
      database: mockDb(),
    });
    expect(res.statusCode).toBe(400);
  });

  it("should accept all valid priorities", () => {
    for (const p of ["LOW", "MEDIUM", "HIGH", "CRITICAL"]) {
      const res = mockRes();
      create({
        req: {
          body: {
            equipment: "X",
            description: "d",
            user_name: "J",
            priority: p,
          },
        },
        res,
        database: mockDb(),
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.priority).toBe(p);
    }
  });

  it("should normalize lowercase priority", () => {
    const res = mockRes();
    create({
      req: {
        body: {
          equipment: "X",
          description: "d",
          user_name: "J",
          priority: "high",
        },
      },
      res,
      database: mockDb(),
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.priority).toBe("HIGH");
  });
});

describe("index controller", () => {
  it("should list all tickets", () => {
    const res = mockRes();
    const db = mockDb({
      tickets: [
        { id: "1", equipment: "A" },
        { id: "2", equipment: "B" },
      ],
    });
    index({ req: { query: {} }, res, database: db });
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
  });
});

describe("update controller", () => {
  it("should update a ticket", () => {
    const res = mockRes();
    const db = mockDb({
      tickets: [{ id: "1", equipment: "A", description: "d" }],
    });
    update({
      req: { params: { id: "1" }, body: { equipment: "B" } },
      res,
      database: db,
    });
    expect(db.data.tickets[0].equipment).toBe("B");
    expect(db.data.tickets[0].updated_at).toBeDefined();
  });
});

describe("updateStatus controller", () => {
  it("should close a ticket", () => {
    const res = mockRes();
    const db = mockDb({ tickets: [{ id: "1", status: "open" }] });
    updateStatus({
      req: { params: { id: "1" }, body: { solution: "fixed" } },
      res,
      database: db,
    });
    expect(db.data.tickets[0].status).toBe("closed");
    expect(db.data.tickets[0].solution).toBe("fixed");
  });
});

describe("remove controller", () => {
  it("should delete a ticket", () => {
    const res = mockRes();
    const db = mockDb({ tickets: [{ id: "1" }] });
    remove({ req: { params: { id: "1" } }, res, database: db });
    expect(db.data.tickets.length).toBe(0);
  });
});

describe("stats controller", () => {
  it("should return stats", () => {
    const res = mockRes();
    const db = mockDb({
      tickets: [
        { priority: "HIGH", status: "open" },
        { priority: "LOW", status: "closed" },
      ],
    });
    stats({ req: {}, res, database: db });
    expect(res.statusCode).toBe(200);
    expect(res.body.total).toBe(2);
  });
});
