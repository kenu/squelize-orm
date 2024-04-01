const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Customer', {
    CustomerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    FirstName: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Company: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    Fax: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    SupportRepId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Employee',
        key: 'EmployeeId'
      }
    }
  }, {
    sequelize,
    tableName: 'Customer',
    timestamps: false,
    indexes: [
      {
        name: "IPK_Customer",
        unique: true,
        fields: [
          { name: "CustomerId" },
        ]
      },
      {
        name: "IFK_CustomerSupportRepId",
        fields: [
          { name: "SupportRepId" },
        ]
      },
    ]
  });
};
