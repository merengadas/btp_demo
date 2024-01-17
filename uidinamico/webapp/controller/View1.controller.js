sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.uidinamico.controller.View1", {

            onInit: function() {
          
                var self = this;
                self.getInfoTile();
      
              },
              getInfoTile: function () {
                var that = this;
                $.ajax({
                  type: "GET",
                  url: "https://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires",
                  success: function (data) {
                    var d = data.datetime.split("T")[1].split(".")[0];
                    var a = d.split(":");
                    var info = {};
                    if (Number(a[0]) > 12) {
                      info.hora = a[0] -= 12;
                      info.desc = d;
                    } else {
                      info.hora = a[0];
                      info.desc = d;
                    }
                   // set data model on view
                    var oData = {
                      employee: {
                      name: "John"
                      }
                      };
      
                    var oModel = new  sap.ui.model.json.JSONModel(oData);
                    
                    that.getView().setModel(oModel);
                    

                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              }


        });
    });
