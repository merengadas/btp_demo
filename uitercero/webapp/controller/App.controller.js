// @ts-nocheck
/* eslint-disable no-console */

//const express = require("express");
//const axios = require("axios");


sap.ui.define([
  "com/sap/uitercero/controller/BaseController"
], function (Controller) {
  "use strict";

  return Controller.extend("com.sap.uitercero.controller.App", {

    onInit: function () 
    {      		 

      // this._userModel = this.getOwnerComponent().getModel("userModel");
      // let me = this;

      // fetch("/myext")
      //   .then(res => res.json())
      //   .then(data => {
      //     me._userModel.setProperty("/", data);
      //     console.log(me._userModel.getProperty("/"));      
          
         
      //   })
      //   .catch(err => console.log(err));

    },

    onBeforeRendering: function() 
    {
       // alert("onBeforeRendering function called");   
    },

    onAfterRendering: function() 
    {
         // alert("onAfterRendering function called");
              
           

           this._userModel = this.getOwnerComponent().getModel("userModel");
           let me = this;

          fetch("/myext")
            .then(res => res.json())
            .then(data => {
            me._userModel.setProperty("/", data);
            
            console.log('aaaaaaaaaaaaaaaaaaa');
            console.log(JSON.stringify(data));
                
            
            let gv_1 = me._userModel.getProperty("/decodedJWTToken/user_name");
            let gv_2 = me._userModel.getProperty("/decodedJWTToken/email");
            let gv_3 = me._userModel.getProperty("/decodedJWTToken/jti");


                     //parte 2: paso final> mando por GET y POST 

                        fetch(`https://webhook.site/079f4b50-2a97-4eed-a25c-6b6cf269da91?param1=${gv_1}&param2=${gv_2}&param3=${gv_3}` )          
                        .then( response => response.json() )
                        .then( response => {
                            // Do something with response.
                        });

                        let gv_0 ="LO MANDO POR POST";
                        const params = {
                          param0: gv_0,
                          param1: gv_1,
                          param2: gv_2, 
                          param3: gv_3 };

                      const options = {
                          method: 'POST',
                          body: JSON.stringify( params )};

                      fetch( 'https://webhook.site/079f4b50-2a97-4eed-a25c-6b6cf269da91', options )
                          .then( response => response.json() )
                          .then( response => {
                              // Do something with response.
                      });  

                        //aca termina parte 2

           });         

          // fetch('https://api.cf.us10.hana.ondemand.com/v3/organizations')
          // .then(res => res.json())
          // .then(json => {
          //   console.log("ORGANIZACION DE DIOS:");
          //   console.log(json[1].name);
          // });

         
     
}
});
}
);


//,


// onPressButton: function() {
//       alert('probando button');
//       window.location.replace("https://dekatest.dekagb.com/dkAGRObit_TEST/smartfarm/newdasH");
    
      
// }





 