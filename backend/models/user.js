const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./../config/sequelize');
const sequelize = db ;


class User extends Model { }

User.init (
    {
      "id":{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      "username":{
        type: DataTypes.STRING,
        allowNull: false
      },
      "password":{
        type: DataTypes.STRING,
        allowNull: false
      },

      "createdAt":{
        type: DataTypes.DATE
      },
      "updatedAt":{
        type: DataTypes.DATE
      }

    }, {
      sequelize,
      modelName: "User",
      tableName: "Users"
    },
)



module.exports =  User