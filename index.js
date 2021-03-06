const express = require('express');
const res = require('express/lib/response');
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/name', (req, res) => res.send('Suzanne Zomer'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))
