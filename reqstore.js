var debug = require('debug')('reqstore');

exports = module.exports = function addStore(options) {
  options = options || {};

	return function addStore(req, res, next) {
		// Attach request storage
		req.store = req.store || {};
		debug("Attaching storage to request");
		next();
	};
};
