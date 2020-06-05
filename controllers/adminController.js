const models = require('../models/index');

module.exports = {
	viewDashboard: function (req, res, next) {
		res.render('admin/dashboard/view_dashboard');
	},

	// View Category
	viewCategory: async function (req, res, next) {
		try {
			const getData = await models.category.find({});
			const category = getData.reverse();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/category/view_category', {
				category,
				alert,
			});
		} catch (error) {
			console.log(error);
			res.redirect('/admin/category');
		}
	},
	addCategory: async function (req, res, next) {
		try {
			const { name } = req.body;
			const save = await models.category.create({
				name: name,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			});
			if (!save) {
				res.send('error 500');
			}
			res.redirect('/admin/category');
		} catch (error) {
			console.log(error);
			res.redirect('/admin/category')
		}
	},
	updateCategory: async function (req, res, next) {
		const { name } = req.body;
		const { categoryId } = req.params;
		const updated = await models.category.findByIdAndUpdate(categoryId, {
			name: name,
			updatedAt: Date.now(),
		});
		if (!updated) {
			console.log('error');
		}
		res.redirect('/admin/category');
	},
	deleteCategory: async function (req, res, next) {
		const { categoryId } = req.params;
		const deleted = await models.category.findByIdAndRemove(categoryId);
		if (!deleted) {
			console.log('error');
		}
		res.redirect('/admin/category');
	},

	// View Bank
	viewBank: function (req, res, next) {
		res.render('admin/bank/view_bank');
	},
	viewItem: function (req, res, next) {
		res.render('admin/item/view_item');
	},
	viewBooking: function (req, res, next) {
		res.render('admin/booking/view_booking');
	},
};
