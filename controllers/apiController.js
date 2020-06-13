const bankPost = async (req, res) => {
  // try {
    const checkErros = await checkTersedia(req, ['nameBank', 'nomorRekening', 'name']);
    console.log(checkErrors)
    if (checkErros.length > 0) {
      return res.status(422).json({
        message: "",
        code: 422,
        errors
      })
    }
    const { nameBank, nomorRekening, name } = req.body;
    const saved = await models.bank.create({
      nameBank,
      nomorRekening,
      name,
      imageUrl: `http://localhost:3131/images/${req.file.filename}`,
    });
    if (!saved) return console.log('error');
    return errors
    // req.flash('allertMessage', 'Success add new bank');
    // req.flash('alertStatus', 'success');
    // res.redirect('/admin/bank');
  // } catch (error) {
    // req.flash('allertMessage', `${error.message}`);
    // req.flash('alertStatus', 'danger');
    // res.redirect('/admin/bank');
  // }
}



module.exports = {
  bankPost
};