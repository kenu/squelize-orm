const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Artist', {
    ArtistId: {
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
    tableName: 'Artist',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Artist",
        unique: true,
        fields: [
          { name: "ArtistId" },
        ]
      },
    ]
  });
};
