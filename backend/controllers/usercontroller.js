const indexpage = (req, res) => {
  res.render('index', { layout: './layouts/home'})
}

const signin = (req, res) => {

  res.render('signin', { layout: './layouts/home'})
}

const homepage = (req, res) => {
  res.render('homeSubscriber', { layout: './layouts/dashboard'})
}


module.exports = { indexpage, homepage, signin }