const models = require('../models/index');
const { v4: uuidv4 } = require('uuid');

module.exports = {
	// View Category
	viewJabatan: async function (req, res, next) {
		try {
			const getData = await models.Jabatan.findAll();
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/jabatan/view_jabatan', {
				jabatan: getData.reverse(),
				alert,
				title: 'jabatan | Usahaku',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jabatan');
		}
	},
	viewSingleJabatan: async function (req, res, next) {
		try {
			const { jabatanId } = req.params;
			const getData = await models.Jabatan.find({
				id: jabatanId,
			});
			const alertMessage = req.flash('allertMessage');
			const alertStatus = req.flash('alertStatus');
			const alert = {
				message: alertMessage,
				status: alertStatus,
			};
			res.render('admin/jabatan/view_jabatan', {
				Jabatan: getData,
				alert,
				title: 'Category | Wellrafi',
			});
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jabatan');
		}
	},
	addJabatan: async function (req, res, next) {
		try {
			const { nama } = req.body;
			await models.Jabatan.create({
				id: uuidv4(),
				nama: nama,
				hapus: 0,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			});
			req.flash('allertMessage', 'Berhasil menambahkan jabatan');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jabatan');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jabatan');
		}
	},
	updateJabatan: async function (req, res, next) {
		try {
			const { nama } = req.body;
			const { jabatanId } = req.params;
			await models.Jabatan.update(
				{
					nama: nama,
					updatedAt: new Date().toISOString(),
				},
				{ where: { id: jabatanId } }
			);
			req.flash('allertMessage', 'Berhasil memperbarui jabatan');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jabatan');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jabatan');
		}
	},
	deleteJabatan: async function (req, res, next) {
		try {
			const { jabatanId } = req.params;
			await models.Jabatan.destroy({ where: { id: jabatanId } });
			req.flash('allertMessage', 'Berhasil menghapus jabatan');
			req.flash('alertStatus', 'success');
			res.redirect('/admin/jabatan');
		} catch (error) {
			req.flash('allertMessage', `${error.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/admin/jabatan');
		}
	},
};
