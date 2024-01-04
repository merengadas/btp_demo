sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("nptile2.uitile2.controller.View1", {
            onInit: function () {

            }

            // onPress: function (oResult) {
            //     alert('test');
            //     var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
            //     oCrossAppNavigator.toExternal({
            //          target: { semanticObject : "uitile2", action: "display"}});
            // }
        });
    });
