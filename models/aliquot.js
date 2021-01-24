const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./../config/sequelize');
const product = require('./product');
const sequelize = db ;


class Aliquot extends Model{ }

Aliquot.init (
    {
        "id":{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        "state":{
            type: DataTypes.STRING,
            allowNull: false
        },
        "aliquot":{
            type: DataTypes.DOUBLE,
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
            modelName: "Aliquot", 
            tableName: "aliquots"
       },
)

Aliquot.associate = function(models){
        Aliquot.hasOne(db.models.Products, {
            foreignKey: 'aliquotId',
             as: 'products'
        })
    }

module.exports =  Aliquot