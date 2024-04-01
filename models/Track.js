const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Track', {
    TrackId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    Name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    AlbumId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Album',
        key: 'AlbumId'
      }
    },
    MediaTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'MediaType',
        key: 'MediaTypeId'
      }
    },
    GenreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Genre',
        key: 'GenreId'
      }
    },
    Composer: {
      type: DataTypes.STRING(220),
      allowNull: true
    },
    Milliseconds: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Bytes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Track',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Track",
        unique: true,
        fields: [
          { name: "TrackId" },
        ]
      },
      {
        name: "IFK_TrackAlbumId",
        fields: [
          { name: "AlbumId" },
        ]
      },
      {
        name: "IFK_TrackGenreId",
        fields: [
          { name: "GenreId" },
        ]
      },
      {
        name: "IFK_TrackMediaTypeId",
        fields: [
          { name: "MediaTypeId" },
        ]
      },
    ]
  });
};
