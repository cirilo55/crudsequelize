const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./../config/sequelize');
const sequelize = db ;


class Address extends Model{ }

Address.init (
    {
        "id":{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        "address":{
            type: DataTypes.STRING,
            allowNull: false
        },
        "city":{
            type: DataTypes.STRING,
            allowNull: false
        },

        "state":{
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
            modelName: "Address", 
            tableName: "addresses"
       },
)

Address.associate = function(models){
        Address.hasOne(db.models.Client, {
            foreignKey: 'addressId',
             as: "clients"
        }),

        Address.hasOne(db.models.Enterprise, {
            foreignKey: 'addressId',
             as: "enteprises"
        })
   }

module.exports =  Address