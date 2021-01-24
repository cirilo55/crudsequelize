const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./../config/sequelize');
const sequelize = db ;

class Ncm extends Model { }

Ncm.init(
    {
        'id': {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        'code': {
            type: DataTypes.STRING,
            allowNull: false
        },

        'description':{
            type: DataTypes.STRING,
            allowNull: false
        },

        "createdAt":{
            type: DataTypes.DATE
        },
        "updatedAt":{
            type: DataTypes.DATE
        }
    },
    {
    sequelize,
            modelName: "Ncm", 
            tableName: "ncms"
    })

    Ncm.associate = function(models){
        Ncm.hasOne(db.models.Products, {
            foreignKey: 'ncmId',
             as: 'product'
        })
    }

    module.exports = Ncm

