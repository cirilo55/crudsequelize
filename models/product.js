const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/sequelize');
const sequelize = db ;

class Product extends Model { }

Product.init(
    {
        'id': {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        'description':{
            type: DataTypes.STRING,
            allowNull: false
        },

        "value_price":{
            type: DataTypes.INTEGER,
        },
        "reference":{
            type: DataTypes.STRING,
        },

        "ncmId":{
            type: DataTypes.INTEGER,
        },

        "categoryId":{
            type: DataTypes.INTEGER,
        },
        "aliquotId":{
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
            modelName: "Products", 
            tableName: "products"
    }),

    Product.associate = function(models){
        Product.belongsTo(db.models.Category, {
            foreignKey: 'categoryId',
             as: 'categories'
        }),
        
            Product.belongsTo(db.models.Ncm, {
                foreignKey: 'ncmId',
                as: 'ncms'
            })

            Product.belongsTo(db.models.Aliquot, {
                foreignKey: 'aliquotId',
                as: 'aliquots'
            })
        };
    
    
    

    module.exports =  Product
