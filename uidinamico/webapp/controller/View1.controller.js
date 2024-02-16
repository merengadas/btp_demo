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
                self.getInfoTile2();
      
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

                    that._oTileModel = new sap.ui.model.json.JSONModel([]);
                    that._oTileModel.setData(info);  
                   console.log(JSON.stringify(info));
                    

                    that.getView().setModel(that._oTileModel);

                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              },
              getInfoTile2: function () {
                var that = this;
                $.ajax({
                  type: "GET",
                  url: "https://www.crcind.com/csp/samples/SOAP.Demo.cls?soap_method=AddInteger&Arg1=1&Arg2=2",
                  content: "text/xml",
                  datatype:"xml",
                  success: function (data) {
                   
                    var dataXml= data.responseText;
                    var parser = new DOMParser();
                    var xmlDoc=parser.parseFromString(dataXml, "text/xml");

                    //responseTotal= xmlDoc.getElementsByTagName("AddIntegerResult")[0].childNodes[0].nodeValue;
                  //  Messagebox.Show(responseTotal);
                    

                   that._oTileModel2 = new sap.ui.model.xml.XMLModel();
                   that._oTileModel2.setData(xmlDoc);  
                   console.log(data);
                    
                    that.getView().setModel(that._oTileModel2);

                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              }

            });
          }
        );
        
