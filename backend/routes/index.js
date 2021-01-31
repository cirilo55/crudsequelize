const { Router } = require('express');
const db = require('./../models/index');
const categorycontroller = require('../controllers/categorycontroller');
const ncmcontroller = require('../controllers/ncmController');
const productcontroller = require('../controllers/productcontroller');
const aliquotcontrolller = require('../controllers/aliquotcontroller');
const addresscontroller = require('../controllers/addresscontroller');
const clientcontroller = require('../controllers/clientcontroller')
const enterprisecontroller = require('../controllers/enterprisecontroller')
const usercontroller = require('../controllers/usercontroller')
const router = Router();

router.get('/', (req, res) => res.send('Welcome DUDE'))

router.get('/user', usercontroller.getAll);
router.post('/user', usercontroller.create);
router.get('/user/:id',usercontroller.find);
router.put('/user/:id', usercontroller.update);
router.delete('/user/:id', usercontroller.destroy);

router.get('/cat', categorycontroller.getAllCategory);
router.post('/cat', categorycontroller.createCategory);
router.get('/cat/:catId',categorycontroller.findCategory);
router.put('/cat/:catId', categorycontroller.updateCategory);
router.delete('/cat/:catId', categorycontroller.deleteCategory);

router.get('/ncm', ncmcontroller.getAllNcm);
router.post('/ncm', ncmcontroller.createNcm);
router.get('/ncm/:ncmId', ncmcontroller.findNcm);
router.put('/ncm/:ncmId', ncmcontroller.updateNcm);
router.delete('/ncm/:ncmId', ncmcontroller.deleteNcm);

router.get('/aliquot', aliquotcontrolller.getAll)
router.post('/aliquot', aliquotcontrolller.create)
router.get('/aliquot/:Id', aliquotcontrolller.find)
router.put('/aliquot/:Id', aliquotcontrolller.update)
router.delete('/aliquot/:Id', aliquotcontrolller.destroy)

router.get('/product', productcontroller.getAll);
router.post('/product/', productcontroller.create);
router.get('/product/:Id', productcontroller.find);
router.put('/product/:Id', productcontroller.update);
router.delete('/product/:Id', productcontroller.destroy)

router.get('/address', addresscontroller.getAll);
router.post('/address/', addresscontroller.create);
router.get('/address/:Id', addresscontroller.find);
router.put('/address/:Id', addresscontroller.update);
router.delete('/address/:Id', addresscontroller.destroy)

router.get('/client', clientcontroller.getAll);
router.post('/client/', clientcontroller.create);
router.get('/client/:Id', clientcontroller.find);
router.put('/client/:Id', clientcontroller.update);
router.delete('/client/:Id', clientcontroller.destroy)

router.get('/enterprise', enterprisecontroller.getAll);
router.post('/enterprise/', enterprisecontroller.create);
router.get('/enterprise/:Id', enterprisecontroller.find);
router.put('/enterprise/:Id', enterprisecontroller.update);
router.delete('/enterprise/:Id', enterprisecontroller.destroy)

// router.get('/prod', async(req, res) =>{
//     const products = await db.sequelize.models.Products.findAll()
//     return await res.status(200).json({ products })
// })

// router.get('/ncm', async(req, res) =>{
//     const ncm = await db.sequelize.models.Ncm.findAll()
//     return await res.status(200).json({ ncm });
// })


module.exports = router;