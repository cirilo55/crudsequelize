const db = require('../models/index');

const getAllCategory = async(req, res) =>{
    try{
        const category = await db.sequelize.models.Category.findAll()
        return await res.status(200).json({ category });
    }catch (error){
        return res.staus(500).json({error: error.message})
    }
}

const createCategory = async(req, res) => {
    try{
        const cat = await db.sequelize.models.Category.create(req.body);
        return res.status(201).json({
            cat,
        });
        }catch(error) {
            return res.status(500).json({error: error.message })
        }
    }

    const findCategory = async(req, res)=>{
        try{
            const { catId } = req.params
            const category = await db.sequelize.models.Category.findOne({
                where: { id: catId }
            });
            if(category){
                return res.status(200).json({ category })
            }else{
                return res.status(404).send('Id especificado não existe');
            }
        }catch(error){
            return res.status(500).send('errour');
        }
    }
    const updateCategory = async(req, res) =>{
        try{
            const { catId } = req.params;
            const [ updated ] = await db.sequelize.models.Category.update(req.body, {
                where: { id: catId}
            }) ;
            if(updated){
                const updatedCategory = await db.sequelize.models.Category.findOne({ where: {id: catId} });
                return res.status(200).json({ category: updatedCategory })
            }throw new Error('Registro não encontrado');
        }catch(error){
            return res.status(500).send(error.message);
        } 
    }

    const deleteCategory = async(req, res) =>{
        try {
            const { catId } = req.params;
            const deleted = await db.sequelize.models.Category.destroy({
                where: { id: catId }
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
        getAllCategory,
        createCategory,
        findCategory,
        updateCategory,
        deleteCategory
}