"use strict";

/**
 * Sets up the /status endpoint for the LTH extension.
 * @param {Object} e - The Express app object.
 */
module.exports = (e) => {
  e.get("/status", (req, res) =>
    res.status(200).json({
      status: "up",
      message: "This is a endpoint for a LTH extension",
    })
  );
};
