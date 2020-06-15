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
router.get('/kategori', adminController.viewCategory);
router.post('/kategori', adminController.addCategory);
router.put('/kategori/:kategoriId', adminController.updateCategory);
router.delete('/kategori/:kategoriId', adminController.deleteCategory);

// BANK routes
router.get('/bank', adminController.viewBank);
router.post('/bank', upload, adminController.addBank);
router.put('/bank/:bankId', upload, adminController.editBank);
router.delete('/bank/:bankId', adminController.deleteBank);

// ITEM routes
router.get('/barang', adminController.viewItem);
router.get('/barang/add', adminController.viewAddItem);
router.get('/barang/:idItem', adminController.showItem);
router.post('/barang', uploadMultiple, adminController.addItem);
router.put('/barang/:idItem', uploadMultiple, adminController.updateItem);
router.delete('/barang/:idItem', uploadMultiple, adminController.deleteItem);

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
