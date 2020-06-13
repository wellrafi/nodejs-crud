const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { upload, uploadMultiple } = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/signin', adminController.signIn);
router.get('/signup', adminController.signUp);
router.post('/signup', adminController.signUpPost);
router.post('/signin', adminController.signInPost);

// router.use(auth);

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/admin/signin')
})
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
router.get('/item/:idItem/feature', adminController.getFeature);
router.post('/item/:idItem/feature', upload, adminController.addFeature);
router.put('/item/:idItem/feature/:idFeature', upload, adminController.editFeature);
router.delete('/item/:idItem/feature/:idFeature', adminController.deleteFeature);

// ACTIVITY routes
// router.get('/item/:idItem/feature', adminController.getActivity);
router.post('/item/:idItem/activity', upload, adminController.addActivity);
router.put('/item/:idItem/activity/:idActivity', upload, adminController.editActivity);
router.delete('/item/:idItem/activity/:idActivity', adminController.deleteActivity);

// BOOKING routes
router.get('/booking', adminController.viewBooking);

module.exports = router;
