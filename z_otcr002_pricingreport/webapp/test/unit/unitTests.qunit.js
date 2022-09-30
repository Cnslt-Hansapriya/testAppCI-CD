/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comfioriotcr002zotcr002pricingreport/z_otcr002_pricingreport/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
