const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/sequelize');
const sequelize = db ;

class Enterprise extends Model { }

Enterprise.init(
    {
        'id': {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        'cnpj':{
            type: DataTypes.STRING,
            allowNull: false
        },

        "name":{
            type: DataTypes.INTEGER,
        },
        "fantasy_name":{
            type: DataTypes.STRING,
        },

        "addressId":{
            type: DataTypes.INTEGER
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
            modelName: "Enterprise", 
            tableName: "enterprises"
    }),

    Enterprise.associate = (models) => {[
        Enterprise.belongsTo(db.models.Address, {
            foreignKey: 'addressId',
             as: 'addresses'
        }),
        Enterprise.belongsToMany(db.models.Client, {
            through: 'client_enterprise',
            as: 'clients', 
            onDelete: 'cascade',
            foreignKey: 'enterpriseId',
            otherKey: 'clientId'
            
        })
    ]};
    
    
    

    module.exports =  Enterprise
