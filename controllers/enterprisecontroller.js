const db = require('../models/index');
const bodyParser = require('body-parser');
const { Enterprise, Client } = require('./../models')

const getAll = async(req, res) =>{
    try{
        const enterprise = await db.sequelize.models.Enterprise.findAll({
            include: [{
                model: db.sequelize.models.Address,
                as: 'addresses'
            },
             
                {
                    model: db.sequelize.models.Client,
                    as: 'clients',
                    through: { attributes: []}
                }
            ]  
        });
      
        return res.status(200).json({ enterprise });
    }catch (error){
        return res.status(500).send({error: error.message})
    }
}

const create = async(req, res) => {
    try{
        const { clients, ...data } = req.body;
        const enterprise = await db.sequelize.models.Enterprise.create(data);
        //PASSAR ARRAY PARA ANEXAR EM "clients"
        
        if(clients && clients.length > 0){
            enterprise.setClients(clients)
        }

        return res.status(200).json(enterprise);
    }catch(err) {
        return res.status(500).json({ err });
    }
    }

    const find = async(req, res)=>{
        try{
            const { Id } = req.params
            
            const enterprise = await db.sequelize.models.Enterprise.findOne({
                where: { id: Id },
                include: [
                    {
                        model: db.sequelize.models.Address,
                        as: 'addresses'
                    },
                    {
                        model: db.sequelize.models.Client,
                        as: 'clients',
                        through: { attributes: []}
                        
                    }
                ]
            });

            if(enterprise){
                return res.status(200).json({ enterprise })
            }else{
                return res.status(404).send('Id especificado não existe');
            }
        }catch(error){
            return res.status(500).send('errour');
        }
    }

    const update = async(req, res) =>{
        try{
            const { Id } = req.params
            const { clients, ...data} = req.body;
            const enterprise = await db.sequelize.models.Enterprise.findOne({
                where: {id: Id}
            });
                        
            if(enterprise){
                enterprise.update(data)
                
                if(clients && clients.length > 0){
                    enterprise.setClients(clients)
                }

                return res.status(200).json(enterprise)
            }else{
                return res.status(404).send('Id não encontrado.')
            }
    }catch(error){
        return res.status(500).send(error.message);
    }
}

    const destroy = async(req, res) =>{
        try {
            const { Id } = req.params;
            const deleted = await db.sequelize.models.Enterprise.destroy({
                where: { id: Id },   

            }) .then(() => {
                return db.sequelize.models.client_enterprise.destroy({
                    where: {enterpriseId: Id}
                })
            })

            if(deleted){
                return res.status(204).send("Registro Deletado com Sucesso");
            }
            throw new Error('Registro não encontrado.')
        } catch (error){
            return res.status(500).send(error.message);
        }
    };

module.exports = {
        getAll,
        find,
        create,
        update,
        destroy
       
}