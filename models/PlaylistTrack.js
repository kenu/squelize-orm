const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlaylistTrack', {
    PlaylistId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Playlist',
        key: 'PlaylistId'
      },
      unique: true
    },
    TrackId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Track',
        key: 'TrackId'
      }
    }
  }, {
    sequelize,
    tableName: 'PlaylistTrack',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_PlaylistTrack_1",
        unique: true,
        fields: [
          { name: "PlaylistId" },
          { name: "TrackId" },
        ]
      },
      {
        name: "IPK_PlaylistTrack",
        unique: true,
        fields: [
          { name: "PlaylistId" },
          { name: "TrackId" },
        ]
      },
      {
        name: "IFK_PlaylistTrackTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};
