const db = require('../models/index');

const getAllNcm = async(req, res) =>{
    try{
        const ncm = await db.sequelize.models.Ncm.findAll()
        return await res.status(200).json({ ncm });
    }catch (error){
        return res.staus(500).json({error: error.message})
    }
}

const createNcm = async(req, res) => {
    try{
        const ncm = await db.sequelize.models.Ncm.create(req.body);
        return res.status(201).json({
            ncm,
        });
        }catch(error) {
            return res.status(500).json({error: error.message })
        }
    }

    const findNcm = async(req, res)=>{
        try{
            const { ncmId } = req.params
            const ncm = await db.sequelize.models.Ncm.findOne({
                where: { id: ncmId }
            });
            if(ncm){
                return res.status(200).json({ ncm })
            }else{
                return res.status(404).send('Id especificado não existe');
            }
        }catch(error){
            return res.status(500).send('errour');
        }
    }

    const updateNcm = async(req, res) =>{
        try{
            const { ncmId } = req.params;
            const [ updated ] = await db.sequelize.models.Ncm.update(req.body, {
                where: { id: ncmId}
            }) ;
            if(updated){
                const updatedNcm = await db.sequelize.models.Ncm.findOne({ where: {id: ncmId} });
                return res.status(200).json({ Ncm: updatedNcm })
            }throw new Error('Registro não encontrado');
        }catch(error){
            return res.status(500).send(error.message);
        } 
    }

    const deleteNcm = async(req, res) =>{
        try {
            const { ncmId } = req.params;
            const deleted = await db.sequelize.models.Ncm.destroy({
                where: { id: ncmId }
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
        getAllNcm,
        createNcm,
        findNcm,
        updateNcm,
        deleteNcm
       
}
