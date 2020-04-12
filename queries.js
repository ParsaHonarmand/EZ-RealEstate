const Pool = require("pg").Pool;

// make this unique to your own versin of the DB
const pool = new Pool({
  user: "parsa",
  host: "localhost",
  database: "ezrealestate",
  password: "",
  port: 5432
});

const getVendors = (request, response) => {
  pool.query("SELECT * FROM vendor", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// export this function
module.exports = {
  getVendors
};
