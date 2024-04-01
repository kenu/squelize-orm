const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('InvoiceLine', {
    InvoiceLineId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    InvoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Invoice',
        key: 'InvoiceId'
      }
    },
    TrackId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Track',
        key: 'TrackId'
      }
    },
    UnitPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'InvoiceLine',
    timestamps: false,
    indexes: [
      {
        name: "IPK_InvoiceLine",
        unique: true,
        fields: [
          { name: "InvoiceLineId" },
        ]
      },
      {
        name: "IFK_InvoiceLineInvoiceId",
        fields: [
          { name: "InvoiceId" },
        ]
      },
      {
        name: "IFK_InvoiceLineTrackId",
        fields: [
          { name: "TrackId" },
        ]
      },
    ]
  });
};
