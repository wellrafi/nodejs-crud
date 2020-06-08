const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple} = require('../middlewares/multer');

router.get('/dashboard', adminController.viewDashboard);

// CATEGORY routes
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category/:categoryId', adminController.updateCategory);
router.delete('/category/:categoryId', adminController.deleteCategory);

// BANK routes
router.get('/bank', adminController.viewBank);
router.post('/bank', upload, adminController.addBank);
router.put('/bank/:bankId', upload, adminController.editBank);
router.delete('/bank/:bankId', adminController.deleteBank);

// ITEM routes
router.get('/item', adminController.viewItem);
router.get('/item/add', adminController.viewAddItem);
router.get('/item/:idItem', adminController.showItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.put('/item/:idItem', uploadMultiple, adminController.updateItem);
router.delete('/item/:idItem', uploadMultiple, adminController.deleteItem);

// FEATURE routes
router.post('/feature', upload, adminController.addFeature);


// BOOKING routes
router.get('/booking', adminController.viewBooking);

module.exports = router;
