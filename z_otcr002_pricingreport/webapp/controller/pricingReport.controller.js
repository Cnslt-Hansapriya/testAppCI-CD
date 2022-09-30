sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.fiori.otcr002.zotcr002pricingreport.zotcr002pricingreport.controller.pricingReport", {
            onInit: function () {

            },

            onDateOk : function(){
                this.datePopup.close();
            },
            onDateClose : function(){
                this.datePopup.close();
            },

            onSelect : function(){
                this.rejectPopup.close();
            },
            onClose : function(){
                this.rejectPopup.close();
            },

            onValueHelpOkPress : function(){

            },

            onValueHelpCancelPress : function(){

            },

            onSavePressed : function(){
                this.pricePopup.close();
            },

            onCancelPressed : function(){
                this.pricePopup.close();
            },

            onFilterSelect : function(){
                if(!this.filterPopup){
                    this.filterPopup = new sap.ui.xmlfragment("com.fiori.otcr002.zotcr002pricingreport.zotcr002pricingreport.fragments.filter",this);    
                    this.getView().addDependent(this.filterPopup);
                    
                }
                this.filterPopup.open();
            },

            rejectPopup : null,
            datePopup : null,
            pricePopup : null,
            filterPopup : null,
            onReject : function() {
                if(!this.rejectPopup){
                    this.rejectPopup = new sap.ui.xmlfragment("com.fiori.otcr002.zotcr002pricingreport.zotcr002pricingreport.fragments.Reject",this);    
                    this.getView().addDependent(this.rejectPopup);
                    this.rejectPopup.setTitle("Reject Item");
                }
                this.rejectPopup.open();
            },

            onAccept : function(){
                if(!this.pricePopup){
                    this.pricePopup = new sap.ui.xmlfragment("com.fiori.otcr002.zotcr002pricingreport.zotcr002pricingreport.fragments.priceAccept",this);    
                    this.getView().addDependent(this.pricePopup);
                }
                this.pricePopup.open();
            },

            onValueHelpOkPress : function(){
                this.filterPopup.close();
            },
            onValueHelpCancelPress : function(){
                this.filterPopup.close();
            },

            onDateSelect : function() {
                if(!this.datePopup){
                    this.datePopup = new sap.ui.xmlfragment("com.fiori.otcr002.zotcr002pricingreport.zotcr002pricingreport.fragments.DateSelect",this);    
                    this.getView().addDependent(this.datePopup);
                    this.datePopup.setTitle("Time Period");
                }
                this.datePopup.open();
            },

            
        });
    });
