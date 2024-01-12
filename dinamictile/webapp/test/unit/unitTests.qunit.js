/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"html5/dinamictile/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
