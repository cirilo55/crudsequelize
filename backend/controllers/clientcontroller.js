const db = require('../models/index');

const getAll = async(req, res) =>{
    try{
        const client = await db.sequelize.models.Client.findAll({
            include: [{
                model: db.sequelize.models.Address,
                as: 'addresses'
            }, 
            // {
            //     model: db.sequelize.models.Enterprise,
            //     as: 'enterprises',
            //     required: false,
            //     attributes: ['id', 'name'],
            //     through:{
            //         model: 'client_enterprise',
            //         as: 'ClientEnterprise',
            //         attributes: ['id', 'entepriseId', 'clientId']
            //     }
            // }

        ]  
        });
      
        return res.status(200).json({ client });
    }catch (error){
        return res.status(500).send({error: error.message})
    }
}

const create = async(req, res) => {
    try{
        const client = await db.sequelize.models.Client.create(req.body);
        return res.status(201).json({
            client,
        });
        }catch(error) {
            return res.status(500).json({error: error.message })
        }
    }

    const find = async(req, res)=>{
        try{
            const { Id } = req.params
            const client = await db.sequelize.models.Client.findOne({
                where: { id: Id }
            });
            if(client){
                return res.status(200).json({ client })
            }else{
                return res.status(404).send('Id especificado não existe');
            }
        }catch(error){
            return res.status(500).send('errour');
        }
    }
    const update = async(req, res) =>{
        try{
            const { Id } = req.params;
            const [ updated ] = await db.sequelize.models.Client.update(req.body, {
                where: { id: Id}
            }) ;
            if(updated){
                const updatedClient = await db.sequelize.models.Client.findOne({ where: {id: Id} });
                return res.status(200).json({ category: updatedClient })
            }throw new Error('Registro não encontrado');
        }catch(error){
            return res.status(500).send(error.message);
        } 
    }

    const destroy = async(req, res) =>{
        try {
            const { Id } = req.params;
            const deleted = await db.sequelize.models.Client.destroy({
                where: { id: Id }
            }) ;
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
    create,
    find,
    update,
    destroy
}