const models = require('../models/index');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	// View Category
	viewPeleko: async function (req, res, next) {
		try {
			const getData = await models.Peleko.findAll({});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			return res.render('admin/peleko/view_peleko', {
				peleko: getData,
				alert,
				title: 'Peleko | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko');
		}
	},
	viewSinglePeleko: async function (req, res, next) {
		try {
			const { pelekoId } = req.params;
			const getData = await models.Peleko.find({
				id: pelekoId,
			});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/peleko/view_peleko', {
				peleko: getData,
				alert,
				title: 'Category | Wellrafi',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko');
		}
	},
	addPeleko: async function (req, res, next) {
		try {
			const { nama } = req.body;
			await models.Peleko.create({
				id: uuidv4(),
				nama: nama,
				hapus: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
			req.flash('allertMessage', 'Berhasil menambahkan peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko');
		}
	},
	viewAddPeleko: async function (req, res, next) {
		try {
			const getJenisPeleko = await models.JenisPeleko.findAll({
				orderBy: ['nama', 'ASC']
			});
			const getGudang = await models.Gudang.findAll({
				orderBy: ['nama', 'ASC']
			});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			return res.render('admin/peleko/add_peleko', {
				jenisPeleko: getJenisPeleko,
				gudang: getGudang,
				alert,
				title: 'Tambah Peleko | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko/tambah');
		}
	},
	updatePeleko: async function (req, res, next) {
		try {
			const { nama } = req.body;
			const { pelekoId } = req.params;
			await models.Peleko.update(
				{
					nama: nama,
					updatedAt: new Date().toISOString(),
				},
				{ where: { id: pelekoId } }
			);
			req.flash('allertMessage', 'Berhasil memperbarui peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko');
		}
	},
	viewUpdatePeleko: async function (req, res, next) {
		try {
			const getData = await models.Peleko.findAll();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/peleko/edit_peleko', {
				peleko: getData.reverse(),
				alert,
				title: 'Peleko | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko/tambah');
		}
	},
	deletePeleko: async function (req, res, next) {
		try {
			const { pelekoId } = req.params;
			await models.Peleko.destroy({ where: { id: pelekoId } });
			req.flash('allertMessage', 'Berhasil menghapus peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/peleko');
		}
	},
};
