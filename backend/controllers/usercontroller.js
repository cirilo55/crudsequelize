const db = require('../models/index');

const getAll = async(req, res) =>{
    try{
        const user = await db.sequelize.models.User.findAll()
        return await res.status(200).json({ user });
    }catch (error){
        return res.status(500).json({error: error.message})
    }
}

const create = async(req, res) => {
    try{
        const user = await db.sequelize.models.User.create(req.body);
        return res.status(201).json({
            user,
        });
    }catch(error) {
        return res.status(500).json({error: error.message })
    }
}

const find = async(req, res)=>{
    try{
        const { id } = req.params
        const user = await db.sequelize.models.User.findOne({
            where: { id: id }
        });
        if(user){
            return res.status(200).json({ user })
        }else{
            return res.status(404).send('Id especificado não existe');
        }
    }catch(error){
        return res.status(500).send('errour');
    }
}
const update = async(req, res) =>{
    try{
        const { id } = req.params;
        const [ updated ] = await db.sequelize.models.User.update(req.body, {
            where: { id: id }
        }) ;
        if(updated){
            const updatedUser = await db.sequelize.models.User.findOne({ where: {id: catId} });
            return res.status(200).json({ user: updatedUser })
        }throw new Error('Registro não encontrado');
    }catch(error){
        return res.status(500).send(error.message);
    }
}

const destroy = async(req, res) =>{
    try {
        const { id } = req.params;
        const deleted = await db.sequelize.models.User.destroy({
            where: { id: id }
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