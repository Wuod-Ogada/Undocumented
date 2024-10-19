const view = (req, res) => {
  res.render('writer', { layout: './layouts/dashboard'});
}

module.exports = { view }