const router = require('express').Router();
const cont = require('../controllers/index');
const { upload, uploadMultiple } = require('../middlewares/multer');

// PELEKO routes
router.get('/peleko', cont.viewPeleko);
router.post('/peleko', cont.addPeleko);
router.get('/peleko/tambah', cont.viewAddPeleko);
router.get('/peleko/:pelekoId/edit', cont.viewUpdatePeleko);
router.put('/peleko/:pelekoId', cont.updatePeleko);
router.delete('/peleko/:pelekoId', cont.deletePeleko);

// GUDANG routes
router.get('/gudang', cont.viewGudang);
router.post('/gudang', cont.addGudang);
router.put('/gudang/:gudangId', cont.updateGudang);
router.delete('/gudang/:gudangId', cont.deleteGudang);

// CATEGORY routes
router.get('/kategori-barang', cont.viewCategory);
router.post('/kategori-barang', cont.addCategory);
router.put('/kategori-barang/:kategoriBarangId', cont.updateCategory);
router.delete('/kategori-barang/:kategoriBarangId', cont.deleteCategory);

// JABATAN routes
router.get('/jabatan', cont.viewJabatan);
router.post('/jabatan', cont.addJabatan);
router.put('/jabatan/:jabatanId', cont.updateJabatan);
router.delete('/jabatan/:jabatanId', cont.deleteJabatan);

// JENISPELEKO routes
router.get('/jenis-peleko', cont.viewJenisPeleko);
router.post('/jenis-peleko', cont.addJenisPeleko);
router.put('/jenis-peleko/:pelekoId', cont.updateJenisPeleko);
router.delete('/jenis-peleko/:pelekoId', cont.deleteJenisPeleko);



// // BANK routes
// router.get('/bank', adminController.viewBank);
// router.post('/bank', upload, adminController.addBank);
// router.put('/bank/:bankId', upload, adminController.editBank);
// router.delete('/bank/:bankId', adminController.deleteBank);

// // ITEM routes
// router.get('/barang', adminController.viewItem);
// router.get('/barang/add', adminController.viewAddItem);
// router.get('/barang/:idItem', adminController.showItem);
// router.post('/barang', uploadMultiple, adminController.addItem);
// router.put('/barang/:idItem', uploadMultiple, adminController.updateItem);
// router.delete('/barang/:idItem', uploadMultiple, adminController.deleteItem);

// // FEATURE routes
// router.get('/item/:idItem/feature', adminController.getFeature);
// router.post('/item/:idItem/feature', upload, adminController.addFeature);
// router.put('/item/:idItem/feature/:idFeature', upload, adminController.editFeature);
// router.delete('/item/:idItem/feature/:idFeature', adminController.deleteFeature);

// // ACTIVITY routes
// // router.get('/item/:idItem/feature', adminController.getActivity);
// router.post('/item/:idItem/activity', upload, adminController.addActivity);
// router.put('/item/:idItem/activity/:idActivity', upload, adminController.editActivity);
// router.delete('/item/:idItem/activity/:idActivity', adminController.deleteActivity);

// // BOOKING routes
// router.get('/booking', adminController.viewBooking);

module.exports = router;
