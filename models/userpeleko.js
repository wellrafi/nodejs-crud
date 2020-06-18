'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserPeleko = sequelize.define('UserPeleko', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.UUID
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "User",
        key: "id"
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    },
    pelekoId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Peleko",
        key: "id"
      },
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    },
  }, {});
  UserPeleko.associate = function(models) {
    // associations can be defined here
  };
  return UserPeleko;
};