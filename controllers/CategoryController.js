const models = require('../models/index');
const fs = require('fs-extra');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

async function upsert(values, condition) {
	return models.KategoriBarang.findOne({ where: condition }).then(function (obj) {
		// update
		if (obj) return obj.update(values);
		// insert
		return models.KategoriBarang.create(values);
	});
}

module.exports = {
	// View Category
	viewCategory: async function (req, res, next) {
		try {
			const getData = await models.KategoriBarang.findAll();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/category/view_category', {
				category: getData.reverse(),
				alert,
				title: 'Kategori | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/kategori-barang');
		}
	},
	viewSingleCategory: async function (req, res, next) {
		try {
			const { idCategory } = req.params;
			const getData = await models.Kategori.find({
				id: idCategory,
			});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/category/view_category', {
				category: getData,
				alert,
				title: 'Category | Wellrafi',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/kategori-barang');
		}
	},
	addCategory: async function (req, res, next) {
		try {
			const { nama } = req.body;
			await models.KategoriBarang.create({
				id: uuidv4(),
				nama: nama,
				hapus: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
			req.flash('allertMessage', 'Berhasil menambahkan kategori');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/kategori-barang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/kategori-barang');
		}
	},
	updateCategory: async function (req, res, next) {
		try {
			const { nama } = req.body;
			const { kategoriId } = req.params;
			await models.KategoriBarang.update(
				{
					nama: nama,
					updatedAt: new Date().toISOString(),
				},
				{ where: { id: kategoriId } }
			);
			req.flash('allertMessage', 'Berhasil memperbarui kategori');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/kategori-barang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/kategori-barang');
		}
	},
	deleteCategory: async function (req, res, next) {
		try {
			const { kategoriId } = req.params;
			await models.KategoriBarang.destroy({ where: { id: kategoriId } });
			req.flash('allertMessage', 'Berhasil menghapus kategori');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/kategori-barang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/kategori-barang');
		}
	},
};
