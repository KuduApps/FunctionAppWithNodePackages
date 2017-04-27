var validator = require("validator");

module.exports = function (context, req) {
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: "validator returns " + validator.isEmail('shucai@microsoft.com')
	};
    context.done();
};
