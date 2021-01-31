const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/sequelize');
const sequelize = db ;

class Client extends Model { }

Client.init(
    {
        'id': {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        'type_client':{
            type: DataTypes.STRING,
            allowNull: false
        },

        "cpf":{
            type: DataTypes.INTEGER,
        },
        "name":{
            type: DataTypes.STRING,
        },

        "addressId":{
            type: DataTypes.INTEGER,
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
            modelName: "Client", 
            tableName: "clients"
    }),

    Client.associate = function(models){[ 
        
        Client.belongsTo(db.models.Address, {
            foreignKey: 'addressId',
             as: "addresses" 
        }),
        
        Client.belongsToMany(db.models.Enterprise, {
            through: 'client_enterprise',
            as: 'enterprises',
            onDelete: 'cascade', 
            foreignKey: 'clientId',
            otherKey: 'enterpriseId',
            
        }

        )]
};
    
    module.exports =  Client