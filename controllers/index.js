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
};
