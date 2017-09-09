var Sequelize = require("sequelize");
var connection;

// if (process.env.JAWSDB_URL) {
// 	  connection = mysql.createConnection(process.env.JAWSDB_URL);
// 	}
// else {
	connection = new Sequelize('sidehustle_projects', 'root', 'claire2316', {
	  host: "localhost",
    port:3306,
	  dialect: 'mysql', //DIALECT!!!!
	  pool: {
      max: 5,
      min: 0,
      idle: 10000
      },
    
    });

module.exports = connection;