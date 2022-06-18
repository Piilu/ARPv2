
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.objektids = require("./objektid.model")(sequelize,Sequelize);
db.paeviks = require("./paevik.module")(sequelize,Sequelize);
db.users = require("./user.module")(sequelize,Sequelize);
db.roles = require("./role.model")(sequelize, Sequelize);
db.roles.belongsToMany(db.users,{
  through:"user_roles",
  foreignKey:"roleID",
  otherKey:"userId"
});
db.users.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;