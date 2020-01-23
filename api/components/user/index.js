// const store = require('../../../store/mysql')
const store = require('../../../store/remote-mysql')
const controler = require('./controller')

module.exports = controler(store)


