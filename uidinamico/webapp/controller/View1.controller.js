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
                //self.getInfoTile();
                self.getInfoTile();
                self.getInfoTileLima();
                self.getInfoTileChicago();
      
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

                    that._oTileModel1 = new sap.ui.model.json.JSONModel([]);
                    that._oTileModel1.setData(info);  
                   console.log(JSON.stringify(info));
                    

                    that.getView().setModel(that._oTileModel1);

                    getInfoTileLima();
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              },

              getInfoTileLima: function () {
                var that = this;
                $.ajax({
                  type: "GET",
                  url: "https://worldtimeapi.org/api/timezone/America/Lima",
                  success: function (data) {
                    var d = data.datetime.split("T")[1].split(".")[0];
                    var a = d.split(":");
                    var info = {};
                    if (Number(a[0]) > 12) {
                      info.horaLima = a[0] -= 12;
                      info.desc = d;
                    } else {
                      info.horaLima = a[0];
                      info.desc = d;
                    }

                    that._oTileModel2 = new sap.ui.model.json.JSONModel([]);
                    that._oTileModel2.setData(info);  
                   console.log(JSON.stringify(info));
                    

                    that.getView().setModel(that._oTileModel2, "lima");
                    
                    getInfoTileChicago();
                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              },

              getInfoTileChicago: function () {
                var that = this;
                $.ajax({
                  type: "GET",
                  url: "https://worldtimeapi.org/api/timezone/America/Chicago",
                  success: function (data) {
                    var d = data.datetime.split("T")[1].split(".")[0];
                    var a = d.split(":");
                    var info = {};
                    if (Number(a[0]) > 12) {
                      info.horaChicago = a[0] -= 12;
                      info.desc = d;
                    } else {
                      info.horaChicago = a[0];
                      info.desc = d;
                    }

                    that._oTileModel3 = new sap.ui.model.json.JSONModel([]);
                    that._oTileModel3.setData(info);  
                   console.log(JSON.stringify(info));
                    

                    that.getView().setModel(that._oTileModel3, "Chicago");
                    
                    getInfoTileChicago();
                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              },


              getInfoTile2: function () {
                var that = this;
                let path = this.getOwnerComponent().getManifestObject()._oBaseUri._parts.path;
                console.log(path);
                $.ajax({
                  type: "GET",
                  url: "v2/northwind/northwind.svc/Employees",
                  contentType:"text/xml; charset=\"utf-8\"",
                  dataType:"xml",
                  success: function (data) {
                   
                    debugger;
                    var response = data;
                    
                    var dataXml= data.responseText;
                    var parser = new DOMParser();
                    var xmlDoc=parser.parseFromString(dataXml, "text/xml");

                    //responseTotal= xmlDoc.getElementsByTagName("AddIntegerResult")[0].childNodes[0].nodeValue;
                  //  Messagebox.Show(responseTotal);
                    

                   that._oTileModel2 = new sap.ui.model.xml.XMLModel();
                   that._oTileModel2.setData(xmlDoc);  
                   console.log(response);
                    
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
        
