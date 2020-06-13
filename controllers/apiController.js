const models = require('../models/index');
const { uploadMultipleAPI, none } = require('../middlewares/multer');

const multerPostBank = uploadMultipleAPI.array('image', 2);
const bankPost = async (req, res) => {
	multerPostBank(req, res, async function (err) {
		let validationBody = ['nameBank', 'nomorRekening', 'name'];
		let validationImage = 'image';
		const checkErrors = await checkTersedia(req, validationBody);
    let errorMulter = {};
		if (err) {
			if (err.message === 'Unexpected field') {
				if (validationImage !== err.fieldname) {
					errorMulter.name = validationImage;
					errorMulter.message = validationImage + ' tidak ditemukan';
				}
			}
		}
    checkErrors.push(errorMulter);
		if (checkErrors.length > 0) {
			return {
				message: 'Unprocessable Entity',
				code: 422,
				errors: checkErrors,
			};
		}
		const { nameBank, nomorRekening, name } = req.body;
		await models.bank.create({
			nameBank,
			nomorRekening,
			name,
			imageUrl: `http://localhost:3131/images/${req.files[0].filename}`,
		});
		return {
			message: 'Created',
			success: 1,
			code: 201,
		};
  });
};

// helpers
async function checkTersedia(req, listArray) {
	let bodies = listArray;
	let errors = [];
	bodies.forEach((value) => {
		let error = {};
		if (!req.body[value]) {
			error.name = value;
			error.message = value + ' tidak ditemukan';
			errors.push(error);
		}
	});
	return errors;
}

module.exports = {
	bankPost,
};
