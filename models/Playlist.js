const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Playlist', {
    PlaylistId: {
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
    tableName: 'Playlist',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Playlist",
        unique: true,
        fields: [
          { name: "PlaylistId" },
        ]
      },
    ]
  });
};
