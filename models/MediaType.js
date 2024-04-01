const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MediaType', {
    MediaTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Name: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MediaType',
    timestamps: false,
    indexes: [
      {
        name: "IPK_MediaType",
        unique: true,
        fields: [
          { name: "MediaTypeId" },
        ]
      },
    ]
  });
};
