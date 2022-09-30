/*global QUnit*/

sap.ui.define([
	"comfioriotcr002zotcr002pricingreport/z_otcr002_pricingreport/controller/pricingReport.controller"
], function (Controller) {
	"use strict";

	QUnit.module("pricingReport Controller");

	QUnit.test("I should test the pricingReport controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
