sap.ui.define(
    [
      "com/sap/uiauxiliar/controller/BaseController"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.sap.uiauxiliar.controller.App", {
        onInit() {

          this._userModel = this.getOwnerComponent().getModel("userModel");
                let me = this;
          
                fetch("/myext")
                  .then(res => res.json())
                  .then(data => {
                    me._userModel.setProperty("/", data);
                    console.log(me._userModel.getProperty("/"));
                  })
                  .catch(err => console.log(err));
        }, 

        onAfterRendering: function() 
        {
              
    
               this._userModel = this.getOwnerComponent().getModel("userModel");
               let me = this;
               
    
                fetch("/cero")
                .then(res => res.json())
                .then(data => {
                console.log("paso el metodo cero OK");
                let empresa= data.host;
                let var2 = empresa.replace('-a329a4dc5.cfapps.us10.hana.ondemand.com', '')
                console.log(var2);
    
       
    
                fetch("/myext")
                .then(res => res.json())
                .then(data => {
                me._userModel.setProperty("/", data);
                console.log('paso el metodo myext OK');
                console.log(JSON.stringify(data));
                    
                
                let gv_1 = me._userModel.getProperty("/decodedJWTToken/user_name");
                let gv_2 = var2;
                let gv_3 = me._userModel.getProperty("/decodedJWTToken/jti");
    
    
                         //parte 2: paso final> mando por GET y POST 
                         var requestHeadersget = {
                          "Authorization": `bearer ${gv_3}`
                        };
    
                            fetch(`https://webhook.site/079f4b50-2a97-4eed-a25c-6b6cf269da91?param1=${gv_1}&param2=${gv_2}`, { method: 'GET', headers: requestHeadersget} )          
                            .then( response => response.json() )
                            .then( response => {
                                // Do something with response.
                            });
    
                            
                            const params = {
                              param1: gv_1,
                              param2: gv_2 
                              };
    
                           const requestHeaders = new Headers({
                              "Authorization": `bearer ${gv_3}`
                            });
                    
                          const options = {
                              method: 'POST',
                              headers: requestHeaders,
                              body: JSON.stringify( params )};
    
                          fetch( 'https://webhook.site/079f4b50-2a97-4eed-a25c-6b6cf269da91', options )
                              .then( response => response.json() )
                              .then( response => {
                                  // Do something with response.
                          });  
    
    
                        });  
    
                            //aca termina parte 2
    
               });         
    
              // fetch('https://api.cf.us10.hana.ondemand.com/v3/organizations')
              // .then(res => res.json())
              // .then(json => {
              //   console.log("ORGANIZACION DE DIOS:");
              //   console.log(json[1].name);
              // });
              
              //link de Agronegocios
              window.location.replace("https://dekatest.dekagb.com/Agronegocios_TEST/Session/Login?returnUrlApp=%2FAgronegocios_TEST%2FSession%2FLoginApp%3Fapps%3Dagronegocios%26theme%3Dagronegocios");
         
    }
   



      });
    }
  );
  