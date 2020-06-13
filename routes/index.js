var express = require('express');
var router = express.Router();
var { bankPost } = require('../controllers/apiController')

/* GET home page. */
router.get('/', function (req, res, next) {
	res.redirect('/admin/signin');
});

router.post('/', function (req, res, next) {
	bankPost(req, res)
})

module.exports = router;
