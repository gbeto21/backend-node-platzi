const store = require('../../../store/mysql')
const controler = require('./controller')

module.exports = controler(store)