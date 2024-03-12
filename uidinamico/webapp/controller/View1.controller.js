sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'require'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,  JSONModel, require) {
        "use strict";

        return Controller.extend("com.sap.uidinamico.controller.View1", {

            onInit: function() {
          
                var self = this;
                
                //self.getInfoTile();
                //self.getInfoTileLima();
               // self.getInfoTileChicago();

                let sPayload='<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                '<soap:Body>'+
                  '<NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">'+
                    '<ubiNum>2</ubiNum>' +
                  '</NumberToWords>'+
                '</soap:Body>'
              '</soap:Envelope>'

               // self.getInfoTile2(sPayload);


                //-OTHER
                //var sPath = require.toUrl("com/sap/uidinamico/resources/json/SampleData.json");
                       
                //var oModel = new JSONModel(sPath);
                console.log("LAURAAAAAAAAAAAAAAAAA");
                var oModelparaGrafico = new JSONModel({
                  "size": "L",
                  "lines": [
                    {
                    "points": [
                      {"x": 0, "y": 50},
                      {"x": 20, "y": 68},
                      {"x": 40, "y": 25},
                      {"x": 60, "y": 45},
                      {"x": 80, "y": 67},
                      {"x": 100, "y": 88}
                    ]
                    }
                  ],
                  "regular": [
                    {
                      "description": "Points, threshold line, and labels shown",
                      "leftTopLabel": "120 M",
                      "rightTopLabel": "140 M",
                      "leftBottomLabel": "May 2016",
                      "rightBottomLabel": "Oct 2016",
                      "threshold": 0,
                      "showPoints": true,
                      "showThresholdValue": true,
                      "thresholdDisplayValue": "zero"
                    }, {
                      "description": "Points and threshold line hidden, upper labels shown",
                      "leftTopLabel": "120 M",
                      "rightTopLabel": "140 M",
                      "threshold": null,
                      "showPoints": false,
                      "color": "Error",
                      "showThresholdValue": true
                    }, {
                      "description": "Points, threshold line, and labels shown; semantic colors used",
                      "leftTopLabel": "-20 M",
                      "rightTopLabel": "140 M",
                      "leftBottomLabel": "May 2016",
                      "rightBottomLabel": "Oct 2016",
                      "threshold": 55,
                      "showPoints": true,
                      "color": {"above": "Good", "below": "Error"},
                      "showThresholdValue": true
                    }, {
                      "description": "Points, threshold line and labels hidden",
                      "threshold": null,
                      "showPoints": false,
                      "color": {"above": "Good", "below": "Critical"},
                      "showThresholdValue": true
                    }
                  ],
                  "emphasized": [
                    {
                      "description": "2 points, threshold line, and labels shown",
                      "lines": [
                        {
                        "points": [
                          {"x": 0, "y": 50, "show": true},
                          {"x": 8, "y": 68},
                          {"x": 20, "y": 25},
                          {"x": 30, "y": 45},
                          {"x": 40, "y": 67},
                          {"x": 100, "y": 88, "show": true}
                        ]
                        }
                      ],
                      "threshold": 0,
                      "leftTopLabel": "120 M",
                      "rightTopLabel": "140 M",
                      "leftBottomLabel": "Sept 2016",
                      "rightBottomLabel": "Oct 2016"
                    }, {
                      "description": "2 points and labels shown; semantic colors used",
                      "lines": [
                        {
                        "points": [
                          {"x": 0, "y": 50, "color": "Error", "show": true},
                          {"x": 8, "y": 68},
                          {"x": 20, "y": 25},
                          {"x": 30, "y": 45},
                          {"x": 40, "y": 67},
                          {"x": 100, "y": 88, "color": "Good", "show": true}
                        ]
                        }
                      ],
                      "threshold": null,
                      "leftTopLabel": "120 M",
                      "rightTopLabel": "140 M",
                      "leftBottomLabel": "Sept 2016",
                      "rightBottomLabel": "Oct 2016"
                    }, {
                      "description": "2 points, threshold line, and labels shown",
                      "color": "Critical",
                      "lines": [
                        {
                        "points": [
                          {"x": 0, "y": 50, "show": true},
                          {"x": 20, "y": 68},
                          {"x": 45, "y": 25},
                          {"x": 100, "y": 88, "show": true}
                        ]
                        }
                      ],
                      "threshold": 0,
                      "leftTopLabel": "120 M",
                      "rightTopLabel": "140 M",
                      "leftBottomLabel": "May 2016",
                      "rightBottomLabel": "Oct 2016"
                    }, {
                      "description": "4 points (start/end, min/max value) and threshold line shown; semantic colors used",
                      "lines": [
                        {
                        "points": [
                          {"x": 0, "y": -6, "show": true},
                          {"x": 20, "y": 30, "color": "Good", "show": true},
                          {"x": 35, "y": 26},
                          {"x": 60, "y": -11, "color": "Error", "show": true},
                          {"x": 80, "y": 4},
                          {"x": 100, "y": 12, "show": true}
                        ]
                        }
                      ],
                      "threshold": 0
                    }
                  ],
                  "multiline": [
                  {
                    "description": "2 lines, threshold line, labels shown",
                    "threshold": 50,
                    "leftTopLabel": "120 M",
                    "rightTopLabel": "140 M",
                    "leftBottomLabel": "Sept 2016",
                    "rightBottomLabel": "Oct 2016",
                    "showPoints": true,
                    "lines": [
                    {
                      "points": [
                      {"x": 0, "y": 50},
                      {"x": 8, "y": 68},
                      {"x": 20, "y": 25},
                      {"x": 30, "y": 45},
                      {"x": 40, "y": 67},
                      {"x": 100, "y": 88}
                      ]
                    },
                    {
                      "points": [
                      {"x": 2, "y": 55},
                      {"x": 8, "y": 40},
                      {"x": 15, "y": 20},
                      {"x": 30, "y": 75},
                      {"x": 40, "y": 30},
                      {"x": 100, "y": 50}
                      ]
                    }
                    ]
                  },
                  {
                    "description": "3 lines, threshold line and labels hidden",
                    "leftTopLabel": "120 M",
                    "rightTopLabel": "140 M",
                    "leftBottomLabel": "Sept 2016",
                    "rightBottomLabel": "Oct 2016",
                    "color": "Error",
                    "threshold": null,
                    "showThresholdLine": false,
                    "showTopLabels": false,
                    "showBottomLabels": false,
                    "lines": [
                    {
                      "points": [
                      {"x": 0, "y": 50},
                      {"x": 8, "y": 68},
                      {"x": 20, "y": 25},
                      {"x": 30, "y": 45},
                      {"x": 40, "y": 67},
                      {"x": 100, "y": 88}
                      ],
                      "color": "Neutral",
                      "type": "Solid"
                    },
                    {
                      "points": [
                      {"x": 2, "y": 55},
                      {"x": 8, "y": 40},
                      {"x": 15, "y": 20},
                      {"x": 30, "y": 75},
                      {"x": 40, "y": 30},
                      {"x": 70, "y": 30},
                      {"x": 80, "y": 35},
                      {"x": 100, "y": 50}
                      ],
                      "showPoints": true,
                      "type": "Dashed"
                    },
                    {
                      "points": [
                      {"x": 0, "y": 30},
                      {"x": 8, "y": 30},
                      {"x": 15, "y": 30},
                      {"x": 30, "y": 50},
                      {"x": 40, "y": 30},
                      {"x": 70, "y": 40},
                      {"x": 80, "y": 50},
                      {"x": 100, "y": 60}
                      ],
                      "showPoints": true,
                      "type": "Dotted"
                    }
                    ]
                  }
                  ]
                }
                );           

                console.log(JSON.stringify(oModelparaGrafico));
                
                self.getView().setModel(self.oModelparaGrafico);
               
           
      
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

                   // getInfoTileLima();
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
                    
                  //  getInfoTileChicago();
                    
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
                    
                   // getInfoTileChicago();
                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              },


              getInfoTile2: function (sPayload) {
                var that = this;
                                
                $.ajax({
                  type: "POST",
                  url: "xxx/webservicesserver/numberconversion.wso?op=NumberToWords",
                  data:sPayload,
                  contentType:"text/xml",
                  dataType:"xml",
                  success: function (data) {
                                      
                    var response = data;
                    var dataXml= data.responseText;
                    var parser = new DOMParser();
                    var xmlDoc=parser.parseFromString(dataXml, "text/xml");

                    let valor= xmlDoc.getElementsByTagName("NumberToWordsResponse")[0].childNodes[0].nodeValue;
                    console.log(valor) ;
                    

                   that._oTileModelSOAP = new sap.ui.model.xml.XMLModel();
                   that._oTileModelSOAP.setData(xmlDoc);  
                   console.log(response);
                    
                    that.getView().setModel(that._oTileModelSOAP,"SOAP");

                    
                  },
                  error: function (error) {
                    console.log("Tile: ", error);
                  }
                });
              }

            });
          }
        );
        
