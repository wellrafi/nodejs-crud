const models = require('../models/index');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
	viewDashboard: function (req, res, next) {
		res.render('admin/dashboard/view_dashboard', { title: 'Dashboard | Wellrafi' });
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
				title: 'Category | Wellrafi',
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
			req.flash('allertMessage', 'Success add new category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	updateCategory: async function (req, res, next) {
		try {
			const { name } = req.body;
			const { categoryId } = req.params;
			const updated = await models.category.findByIdAndUpdate(categoryId, {
				name: name,
				updatedAt: Date.now(),
			});
			if (!updated) return console.log('error');
			req.flash('allertMessage', 'Success update category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},
	deleteCategory: async function (req, res, next) {
		try {
			const { categoryId } = req.params;
			const deleted = await models.category.findByIdAndRemove(categoryId);
			if (!deleted) return console.log('error');
			req.flash('allertMessage', 'Success delete category');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/category');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},

	// BANK CONTROLLER
	viewBank: async function (req, res, next) {
		try {
			const getData = await models.bank.find({});
			const banks = getData.reverse();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/bank/view_bank', {
				bank: banks,
				alert: alert,
				title: 'Bank | Wellrafi',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/category');
		}
	},

	addBank: async function (req, res, next) {
		try {
			const { nameBank, nomorRekening, name } = req.body;
			const saved = await models.bank.create({
				nameBank,
				nomorRekening,
				name,
				imageUrl: `http://localhost:3131/images/${req.file.filename}`,
			});
			if (!saved) return console.log('error');
			req.flash('allertMessage', 'Success add new bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},

	editBank: async function (req, res, next) {
		try {
			const { bankId } = req.params;
			const { nameBank, nomorRekening, name } = req.body;
			let bankData = await models.bank.findById(bankId);
			let fileName = bankData.imageUrl;
			console.log(req.file);
			if (req.file) {
				fs.unlink(path.join('public/' + del.imageUrl.replace('http://localhost:3131', '')));
				fileName = `http://localhost:3131/images/${req.file.filename}`;
				console.log(req.file);
			}
			bankData.nameBank = nameBank;
			bankData.nomorRekening = nomorRekening;
			bankData.name = name;
			bankData.imageUrl = fileName;
			await bankData.save();
			req.flash('allertMessage', 'Success updated bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},

	deleteBank: async function (req, res, next) {
		try {
			const { bankId } = req.params;
			const del = await models.bank.findById(bankId);
			await fs.unlink(path.join('public/' + del.imageUrl.replace('http://localhost:3131', '')));
			await del.remove();
			req.flash('allertMessage', 'Success delete bank');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/bank');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/bank');
		}
	},

	// ITEM CONTROLLER
	viewItem: async function (req, res, next) {
		try {
			let getItem = await models.item
				.find({})
				.populate({ path: 'imageId', select: 'id imageUrl' })
				.populate({ path: 'categoryId', select: 'id name' });
			let getCategory = await models.category.find();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_item', {
				title: 'Item | Wellrafi',
				item: getItem,
				alert: alert,
				category: getCategory,
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	viewAddItem: async function (req, res, next) {
		try {
			let getCategory = await models.category.find();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_add_item', {
				title: 'Item | Wellrafi',
				alert: alert,
				category: getCategory,
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	addItem: async function (req, res, next) {
		try {
			const { categoryId, title, price, city, country, description } = req.body;
			const category = await models.category.findById(categoryId);
			let imageId = [];
			if (req.files.length > 0) {
				let image = [];
				for (let i = 0; i < req.files.length; i++) {
					image.push({
						imageUrl: `http://localhost:3131/images/${req.files[i].filename}`,
						createdAt: Date.now(),
						updatedAt: Date.now(),
					});
				}
				const imageSave = await models.image.insertMany(image);
				imageId = imageSave.map((value) => {
					return { _id: value._id };
				});
			}
			const newItem = {
				categoryId: category._id,
				title,
				description,
				price,
				city,
				country,
				imageId,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			};
			const item = await models.item.create(newItem);
			category.itemId.push({ _id: item._id });
			await category.save();
			req.flash('allertMessage', 'Success add new item');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/item');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	showItem: async function (req, res, next) {
		try {
			const { idItem } = req.params;
			const getItem = await models.item.findById(idItem).populate({ path: 'imageId', select: 'id imageUrl' });
			const category = await models.category.find({});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/item/view_single_item', {
				title: getItem.title + ' | Wellrafi',
				category,
				alert,
				item: getItem,
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	updateItem: async function (req, res, next) {
		try {
			const { categoryId, title, price, city, description, country } = req.body;
			const { idItem } = req.params;
			const category = await models.category.findById(categoryId);
			const item = await models.item.findById(idItem);
			let imageId = item.imageId;
			if (req.files.length > 0) {
				let image = [];
				for (let i = 0; i < req.files.length; i++) {
					image.push({
						imageUrl: `http://localhost:3131/images/${req.files[i].filename}`,
						createdAt: Date.now(),
						updatedAt: Date.now(),
					});
				}
				const imageSave = await models.image.insertMany(image);
				imageId = imageSave.map((value) => {
					return { _id: value._id };
				});
			}

			const newItem = {
				categoryId: category._id,
				title,
				description,
				price,
				city,
				country,
				imageId,
				createdAt: Date.now(),
				updatedAt: Date.now(),
			};
			const itemUpdated = await models.item.findByIdAndUpdate(idItem, newItem);
			category.itemId.push({ _id: itemUpdated._id });
			await category.save();
			req.flash('allertMessage', 'Success update item');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/item');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	deleteItem: async function (req, res, next) {
		try {
			const { idItem } = req.params;
			const getItem = await models.item.findById(idItem).populate({ path: 'imageId', select: '_id' });
			if (getItem.imageId.length > 0) {
				getItem.imageId.forEach(async (image) => {
					await fs.unlink(path.join('public/' + image.imageUrl.replace('http://localhost:3131', '')));
				});
				await models.image.deleteMany({ _id: getItem.imageId });
			}
			await getItem.delete();
			req.flash('allertMessage', 'Success delete item');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/item');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item');
		}
	},

	addFeature: async function (req, res, next) {
		try {
			const { _itemId, name, qty } = req.body;
			const getItem = await models.item.findById(_itemId);
			let imageUrl = "";
			if (req.file) {
				imageUrl = req.file.filename;
				await models.image.create({ imageUrl: `/images/${imageUrl}` });
			}
			const saveFeature = await models.feature.create({
				name,
				qty,
				imageUrl,
			});
			getItem.featureId.push(saveFeature.id);
			await getItem.save();
			req.flash('allertMessage', 'Success delete item');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/item/' + _itemId + "#feature");
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/item/');
		}
	},

	viewBooking: function (req, res, next) {
		res.render('admin/booking/view_booking', { title: 'Booking | Wellrafi' });
	},
};