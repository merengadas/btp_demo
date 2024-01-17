sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.sap.uidinamico.controller.App", {
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

              var oModel = new JSONModel(oData);
              
              that.getView().setModel(oModel);
              
            },
            error: function (error) {
              console.log("Tile: ", error);
            }
          });
        }

      });
    }
  );
  