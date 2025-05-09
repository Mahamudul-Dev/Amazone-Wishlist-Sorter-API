import db from "../db/db.js";

export const setCookie = (req, res) => {
  const { cookie } = req.body;

  db.serialize(() => {
    // Clear all previous cookies
    db.run("DELETE FROM cookie_meta", (deleteErr) => {
      if (deleteErr) {
        return res.status(500).json({ error: deleteErr.message });
      }

      // Insert new cookie
      db.run(
        "INSERT INTO cookie_meta (cookie, is_valid, refresh_time) VALUES (?, 1, ?)",
        [cookie, Date.now()],
        (insertErr) => {
          if (insertErr) {
            return res.status(500).json({ error: insertErr.message });
          }
          res.json({ success: true });
        }
      );
    });
  });
};
