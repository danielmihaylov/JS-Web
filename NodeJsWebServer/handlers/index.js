const homeHandler = require('./homeHandler');
const staticHandlers = require('./staticHandler');
const movieHandler = require('./movieHandler');
const detailsHandler = require('./detailsHandler');
const displayHandler = require('./displayHandler');

//hanlera kojto otgovarq za greshkite da e posleden(staticHanler-a)
module.exports = [homeHandler,detailsHandler,displayHandler,movieHandler,staticHandlers];