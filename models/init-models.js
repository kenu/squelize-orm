var DataTypes = require("sequelize").DataTypes;
var _Album = require("./Album");
var _Artist = require("./Artist");
var _Customer = require("./Customer");
var _Employee = require("./Employee");
var _Genre = require("./Genre");
var _Invoice = require("./Invoice");
var _InvoiceLine = require("./InvoiceLine");
var _MediaType = require("./MediaType");
var _Playlist = require("./Playlist");
var _PlaylistTrack = require("./PlaylistTrack");
var _Track = require("./Track");
var _foo = require("./foo");

function initModels(sequelize) {
  var Album = _Album(sequelize, DataTypes);
  var Artist = _Artist(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var Genre = _Genre(sequelize, DataTypes);
  var Invoice = _Invoice(sequelize, DataTypes);
  var InvoiceLine = _InvoiceLine(sequelize, DataTypes);
  var MediaType = _MediaType(sequelize, DataTypes);
  var Playlist = _Playlist(sequelize, DataTypes);
  var PlaylistTrack = _PlaylistTrack(sequelize, DataTypes);
  var Track = _Track(sequelize, DataTypes);
  var foo = _foo(sequelize, DataTypes);

  Track.belongsTo(Album, { as: "Album", foreignKey: "AlbumId"});
  Album.hasMany(Track, { as: "Tracks", foreignKey: "AlbumId"});
  Album.belongsTo(Artist, { as: "Artist", foreignKey: "ArtistId"});
  Artist.hasMany(Album, { as: "Albums", foreignKey: "ArtistId"});
  Invoice.belongsTo(Customer, { as: "Customer", foreignKey: "CustomerId"});
  Customer.hasMany(Invoice, { as: "Invoices", foreignKey: "CustomerId"});
  Customer.belongsTo(Employee, { as: "SupportRep", foreignKey: "SupportRepId"});
  Employee.hasMany(Customer, { as: "Customers", foreignKey: "SupportRepId"});
  Employee.belongsTo(Employee, { as: "ReportsTo_Employee", foreignKey: "ReportsTo"});
  Employee.hasMany(Employee, { as: "Employees", foreignKey: "ReportsTo"});
  Track.belongsTo(Genre, { as: "Genre", foreignKey: "GenreId"});
  Genre.hasMany(Track, { as: "Tracks", foreignKey: "GenreId"});
  InvoiceLine.belongsTo(Invoice, { as: "Invoice", foreignKey: "InvoiceId"});
  Invoice.hasMany(InvoiceLine, { as: "InvoiceLines", foreignKey: "InvoiceId"});
  Track.belongsTo(MediaType, { as: "MediaType", foreignKey: "MediaTypeId"});
  MediaType.hasMany(Track, { as: "Tracks", foreignKey: "MediaTypeId"});
  PlaylistTrack.belongsTo(Playlist, { as: "Playlist", foreignKey: "PlaylistId"});
  Playlist.hasMany(PlaylistTrack, { as: "PlaylistTracks", foreignKey: "PlaylistId"});
  InvoiceLine.belongsTo(Track, { as: "Track", foreignKey: "TrackId"});
  Track.hasMany(InvoiceLine, { as: "InvoiceLines", foreignKey: "TrackId"});
  PlaylistTrack.belongsTo(Track, { as: "Track", foreignKey: "TrackId"});
  Track.hasMany(PlaylistTrack, { as: "PlaylistTracks", foreignKey: "TrackId"});

  return {
    Album,
    Artist,
    Customer,
    Employee,
    Genre,
    Invoice,
    InvoiceLine,
    MediaType,
    Playlist,
    PlaylistTrack,
    Track,
    foo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
