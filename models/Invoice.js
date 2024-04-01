const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice', {
    InvoiceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'CustomerId'
      }
    },
    InvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    BillingAddress: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    BillingCity: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingState: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingCountry: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    BillingPostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Invoice',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Invoice",
        unique: true,
        fields: [
          { name: "InvoiceId" },
        ]
      },
      {
        name: "IFK_InvoiceCustomerId",
        fields: [
          { name: "CustomerId" },
        ]
      },
    ]
  });
};
