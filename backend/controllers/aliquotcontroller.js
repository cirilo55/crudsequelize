const db = require('../models/index');

const getAll = async(req, res) =>{
    try{
        const aliquot = await db.sequelize.models.Aliquot.findAll()
        return await res.status(200).json({ aliquot });
    }catch (error){
        return res.status(500).json({error: error.message})
    }
}

const create = async(req, res) => {
    try{
        const aliquot = await db.sequelize.models.Aliquot.create(req.body);
        return res.status(201).json({
            aliquot,
        });
        }catch(error) {
            return res.status(500).json({error: error.message })
        }
    }

    const find = async(req, res)=>{
        try{
            const { Id } = req.params
            const aliquot = await db.sequelize.models.Aliquot.findOne({
                where: { id: Id }
            });
            if(aliquot){
                return res.status(200).json({ aliquot })
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
            const [ updated ] = await db.sequelize.models.Aliquot.update(req.body, {
                where: { id: Id}
            }) ;
            if(updated){
                const updatedAliquot = await db.sequelize.models.Aliquot.findOne({ where: {id: Id} });
                return res.status(200).json({ category: updatedAliquot })
            }throw new Error('Registro não encontrado');
        }catch(error){
            return res.status(500).send(error.message);
        } 
    }

    const destroy = async(req, res) =>{
        try {
            const { Id } = req.params;
            const deleted = await db.sequelize.models.Aliquot.destroy({
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