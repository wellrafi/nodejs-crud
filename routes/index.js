var express = require('express');
var router = express.Router();
var { bankPost } = require('../controllers/apiController');
const { uploadMultipleAPI, none } = require('../middlewares/multer');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.redirect('/admin/signin');
});

router.post('/', async function (req, res, next) {
	const response = await bankPost(req, res)
	console.log(response);
});

module.exports = router;

