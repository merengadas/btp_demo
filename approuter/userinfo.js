/* eslint-disable no-console */
const approuter = require("@sap/approuter");
const jwtDecode = require("jwt-decode");

let ar = approuter();

ar.beforeRequestHandler.use((req, res, next) => {

    console.log("The following request was made...");
    console.log("Method: " + req.method);
    console.log("Headers: " + req.headers);
    console.log("URL: " + req.url);

    next();
});

ar.beforeRequestHandler.use("/cero", (req, res) => {
  
  console.log(JSON.stringify(req.headers));  
  res.end(JSON.stringify(req.headers));

});


ar.beforeRequestHandler.use("/myext", (req, res) => {

  if (!req.user) {
    res.statusCode = 403;
    res.end("Missing JWT Token");
  }

  res.statusCode = 200;
  let decodedJWTToken = jwtDecode(req.user.token.accessToken);

  console.log(JSON.stringify({
    decodedJWTToken
  }));

  res.end(JSON.stringify({
    decodedJWTToken, 
  }));

});

ar.beforeRequestHandler.use("/myext1", (req, res) => {

  if (!req.user) {
    res.statusCode = 403;
    res.end("Missing JWT Token");
  }

  res.statusCode = 200;
  let myvar= req.user.token.accessToken;

  console.log(JSON.stringify({
    myvar
  }));

  res.end(JSON.stringify({
    myvar
  }));

  ar.beforeRequestHandler.use("/myext3", (req, res) => {

    console.log("paso1");
    const fetch = require("node-fetch")
    console.log("paso2");
    const params = new URLSearchParams();
    
    params.append("grant_type", "password");
    params.append("username", "ltaberna@bit.com.ar");
    params.append("password", "Dd25921325");
    params.append("client_id", "sb-mydemo_seguridad!t175666");
    params.append("client_secret", "Jw75RDD4l3HneNmWMVJ0MI+RndI=");
    
    console.log("paso3");
    describe("Test API", function() {
      console.log("paso4");
      let api_token = "";
    
      it("gets a token", async function() {
        console.log("paso5");
        api_token = await fetch("https://some-url/realms/my-realm/protocol/openid-connect/token", {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params
        }).then (response => {
          console.log("paso6");
          return response.json();
        });
        console.log("paso7");
        console.log(token);
      });
    });



  
    res.statusCode = 200;    
    
    res.end(JSON.stringify({
    token
    }));
  
  });

});

ar.start();
