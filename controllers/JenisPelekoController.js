const models = require('../models/index');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	// View Category
	viewJenisPeleko: async function (req, res, next) {
		try {
			const getData = await models.JenisPeleko.findAll();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/jenis_peleko/view_jenis_peleko', {
				jenisPeleko: getData.reverse(),
				alert,
				title: 'Peleko | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jenis-peleko');
		}
	},
	viewSingleJenisPeleko: async function (req, res, next) {
		try {
			const { pelekoId } = req.params;
			const getData = await models.JenisPeleko.find({
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
			res.redirect('/admin/jenis-peleko');
		}
	},
	addJenisPeleko: async function (req, res, next) {
		try {
			const { nama } = req.body;
			await models.JenisPeleko.create({
				id: uuidv4(),
				nama: nama,
				hapus: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
			req.flash('allertMessage', 'Berhasil menambahkan peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jenis-peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jenis-peleko');
		}
	},
	updateJenisPeleko: async function (req, res, next) {
		try {
			const { nama } = req.body;
			const { pelekoId } = req.params;
			await models.JenisPeleko.update(
				{
					nama: nama,
					updatedAt: new Date().toISOString(),
				},
				{ where: { id: pelekoId } }
			);
			req.flash('allertMessage', 'Berhasil memperbarui peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jenis-peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jenis-peleko');
		}
	},
	deleteJenisPeleko: async function (req, res, next) {
		try {
			const { pelekoId } = req.params;
			await models.JenisPeleko.destroy({ where: { id: pelekoId } });
			req.flash('allertMessage', 'Berhasil menghapus peleko');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jenis-peleko');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jenis-peleko');
		}
	},
};
