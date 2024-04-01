const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Album', {
    AlbumId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Title: {
      type: DataTypes.STRING(160),
      allowNull: false
    },
    ArtistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Artist',
        key: 'ArtistId'
      }
    },
    Column1: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Album',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Album",
        unique: true,
        fields: [
          { name: "AlbumId" },
        ]
      },
      {
        name: "IFK_AlbumArtistId",
        fields: [
          { name: "ArtistId" },
        ]
      },
    ]
  });
};
