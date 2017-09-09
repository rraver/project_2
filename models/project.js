var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// Creates a project model that matches up with sqlDB
var project = sequelize.define("sidehustle_projects", {
  project_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  project_key: {
    type: Sequelize.STRING
  },
  self:
  {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
project.sync();


module.exports = project;