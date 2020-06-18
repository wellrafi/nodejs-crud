const models = require('../models/index');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	// View Category
	viewGudang: async function (req, res, next) {
		try {
			const getData = await models.Gudang.findAll();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/gudang/view_gudang', {
				gudang: getData.reverse(),
				alert,
				title: 'gudang | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/gudang');
		}
	},
	viewSingleGudang: async function (req, res, next) {
		try {
			const { gudangId } = req.params;
			const getData = await models.Gudang.find({
				id: gudangId,
			});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/gudang/view_gudang', {
				gudang: getData,
				alert,
				title: 'Category | Wellrafi',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/gudang');
		}
	},
	addGudang: async function (req, res, next) {
		try {
			const { nama } = req.body;
			await models.Gudang.create({
				id: uuidv4(),
				nama: nama,
				hapus: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
			req.flash('allertMessage', 'Berhasil menambahkan gudang');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/gudang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/gudang');
		}
	},
	updateGudang: async function (req, res, next) {
		try {
			const { nama } = req.body;
			const { gudangId } = req.params;
			await models.Gudang.update(
				{
					nama: nama,
					updatedAt: new Date().toISOString(),
				},
				{ where: { id: gudangId } }
			);
			req.flash('allertMessage', 'Berhasil memperbarui gudang');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/gudang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/gudang');
		}
	},
	deleteGudang: async function (req, res, next) {
		try {
			const { gudangId } = req.params;
			await models.Gudang.destroy({ where: { id: gudangId } });
			req.flash('allertMessage', 'Berhasil menghapus gudang');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/gudang');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/gudang');
		}
	},
};
