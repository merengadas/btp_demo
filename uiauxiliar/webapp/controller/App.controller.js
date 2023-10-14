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
        }
        //,
        // onPressButton: function() {
        //   alert('probando button');
          
        //   window.location.replace("https://dekatest.dekagb.com/dkAGRObit_TEST/smartfarm/newdasH");
          
          
        // }
      });
    }
  );
  