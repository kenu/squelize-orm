const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foo', {
    bar: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    baz: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'foo',
    timestamps: false
  });
};
