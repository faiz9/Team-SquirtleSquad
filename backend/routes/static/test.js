const express = require("express");
const router = express.Router();
const db = require("../../db/connection.js");

router.get("/", async (_request, response) => {
		const test_results = await db.any(`SELECT * FROM test_table`);
		const user_results = await db.any(`SELECT * FROM users`);
		const game_results = await db.any(`SELECT * FROM games WHERE id=42`);
	
  await db.any(`INSERT INTO test_table ("test_string") VALUES ($1)`, [
    `Hello on ${new Date().toLocaleDateString("en-us", {
      hour: "numeric",
      minute: "numeric",
      month: "short",
      day: "numeric",
      weekday: "long",
      year: "numeric",
    })}`,
  ]);

  result = await db.any(`SELECT * FROM test_table`);
  response.json(results);
});

module.exports = router;