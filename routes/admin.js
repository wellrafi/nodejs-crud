const router = require('express').Router();
const adminController = require('../controllers/adminController')

router.get('/dashboard', adminController.viewDashboard);

// Category Routing
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category/:categoryId', adminController.updateCategory);
router.delete('/category/:categoryId', adminController.deleteCategory);


router.get('/bank', adminController.viewBank);
router.get('/item', adminController.viewItem);
router.get('/booking', adminController.viewBooking);

module.exports = router;