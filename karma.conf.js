module.exports = function (config) {
  "use strict";

  config.set({
    frameworks: ["ui5"], ui5: {
      type: "application",
      configPath: "uianexo/ui5.yaml",
      paths: {
        webapp: "uianexo/webapp"
      }
    },
    browsers: ["Chrome"],
    browserConsoleLogOptions: {
      level: "error"
    }
  });
};
