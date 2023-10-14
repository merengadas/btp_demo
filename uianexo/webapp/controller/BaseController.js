sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/core/UIComponent",
  "com/sap/uianexo/model/formatter"
], function(Controller, History, UIComponent, formatter) {
  "use strict";

  return Controller.extend("com.sap.uianexo.controller.BaseController", {

    formatter: formatter,

    getModel: function(sName) {
      return this.getView().getModel(sName);
    },

    
    setModel: function(oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },

    /**
     * Convenience method for getting the resource bundle.
     * @public
     * @returns {sap.ui.model.resource.ResourceModel} the resourceModel of the component
     */
    getResourceBundle: function() {
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },

    
    navTo: function(psTarget, pmParameters, pbReplace) {
      this.getRouter().navTo(psTarget, pmParameters, pbReplace);
    },

    getRouter: function() {
      return UIComponent.getRouterFor(this);
    },

    onNavBack: function() {
      var sPreviousHash = History.getInstance().getPreviousHash();

      if (sPreviousHash !== undefined) {
        window.history.back();
      } else {
        this.getRouter().navTo("appHome", {}, true /*no history*/ );
      }
    }

  });

});
