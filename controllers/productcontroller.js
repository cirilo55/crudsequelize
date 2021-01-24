const db = require('../models/index');


const getAll = async(req, res) =>{
    try{
        const products = await db.sequelize.models.Products.findAll({
            include: [{
                model: db.sequelize.models.Category,
                as: 'categories'
            }, 
            {
                model: db.sequelize.models.Ncm,
                as: 'ncms'
            },
            {
                model: db.sequelize.models.Aliquot,
                as: 'aliquots'
            }

        ]
        
        });
      
        return res.status(200).json({ products });
    }catch (error){
        return res.status(500).send({error: error.message})
    }
}

const create = async(req, res) => {
    try{
        const products = await db.sequelize.models.Products.create(req.body);
        return res.status(201).json({
            products,
        });
        }catch(error) {
            return res.status(500).send({error: error.message })
        }
    }

    const find = async(req, res)=>{
        try{
            const { Id } = req.params
            
            const product = await db.sequelize.models.Products.findOne({
                where: { id: Id },
                include: [{
                    model: db.sequelize.models.Category,
                    as: 'categories'
                }, 
                {
                    model: db.sequelize.models.Ncm,
                    as: 'ncms'
                },
                {
                    model: db.sequelize.models.Aliquot,
                    as: 'aliquots'
                }]
            });
            

            
            if(product){
                return res.status(200).json({ product })
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
            const [ updated ] = await db.sequelize.models.Products.update(req.body, {
                where: { id: Id }
            }) ;
            if(updated){
                const updatedProduct = await db.sequelize.models.Products.findOne({ where: {id: Id} });
                return res.status(200).json({ category: updatedProduct })
            }throw new Error('Registro não encontrado');
        }catch(error){
            return res.status(500).send(error.message);
        } 
    }

    const destroy = async(req, res) =>{
        try {
            const { Id } = req.params;
            const deleted = await db.sequelize.models.Products.destroy({
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
        find,
        create,
        update,
        destroy
       
}