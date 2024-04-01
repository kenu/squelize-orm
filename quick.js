const { Sequelize, Model, DataTypes } = require("sequelize");
// const sequelize = new Sequelize({
//   storage:
//     "/Users/kenuheo/Library/DBeaverData/workspace6/.metadata/sample-database-sqlite-1/Chinook.db",
//   dialect: "sqlite",
// });

// Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("litedb", "devuser", "devpass", {
//   host: "localhost",
//   dialect: "mariadb",
// });

const sequelize = new Sequelize("litedb", "devuser", "devpass", {
  host: "localhost",
  dialect: "postgres",
});

const initModels = require("./models/init-models")
initModels(sequelize);

(async () => {
  await sequelize.sync();
})();
