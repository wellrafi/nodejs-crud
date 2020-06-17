const {
	addCategory,
	updateCategory,
	deleteCategory,
	viewCategory,
	viewSingleCategory,
} = require('./CategoryController');

const {
	addJabatan,
	updateJabatan,
	deleteJabatan,
  viewJabatan,
  viewSingleJabatan,
} = require('./JabatanController');

const {
	addJenisPeleko,
	updateJenisPeleko,
	deleteJenisPeleko,
  viewJenisPeleko,
  viewSingleJenisPeleko,
} = require('./JenisPelekoController');

const {
	addPeleko,
	updatePeleko,
	deletePeleko,
  viewPeleko,
	viewSinglePeleko,
	viewAddPeleko,
	viewUpdatePeleko
} = require('./PelekoController');


module.exports = {
	addCategory,
	updateCategory,
	deleteCategory,
	viewCategory,
	viewSingleCategory,
	
  addJabatan,
	updateJabatan,
	deleteJabatan,
	viewJabatan,
	viewSingleJabatan,

	addJenisPeleko,
	updateJenisPeleko,
	deleteJenisPeleko,
  viewJenisPeleko,
	viewSingleJenisPeleko,
	
	addPeleko,
	updatePeleko,
	deletePeleko,
  viewPeleko,
	viewSinglePeleko,
	viewAddPeleko,
	viewUpdatePeleko

};
