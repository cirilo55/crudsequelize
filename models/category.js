const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./../config/sequelize');
const product = require('./product');
const sequelize = db ;


class Category extends Model{ }

Category.init (
    {
        "id":{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        "description":{
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
            modelName: "Category", 
            tableName: "categories"
       },

       Category.associate = function(models){
        Category.hasOne(db.models.Products, {
            foreignKey: 'categoryId',
             as: 'product'
        })
    }
);
module.exports =  Category


