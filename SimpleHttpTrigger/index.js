var minimatch = require("minimatch");

module.exports = function (context, req) {
	context.res = {
		// status: 200, /* Defaults to 200 */
		body: "minimatch returns " + minimatch("abc/def","def",{matchBase:true})
	};
    context.done();
};