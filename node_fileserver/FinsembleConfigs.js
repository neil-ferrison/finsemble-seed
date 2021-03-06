
var Finsemble = require("@chartiq/finsemble/libs/Server");
var path = require('path');

//Gets your hostname/port/etc for your application.
var StartupConfig = require("../configs/startup");
var env = process.env.NODE_ENV ? process.env.NODE_ENV : "local";
Finsemble.setUUID("Finsemble" + "-" + env);
var hostname = StartupConfig[env].clientRoute;

//Adding your local services/components into the project so that the Finsemble core is aware of them.
Finsemble.addServices(require("../configs/services.json"));
Finsemble.addComponents(require("../configs/components.json"));

//Modify this file to adjust what users see when loading the app for the first time.
Finsemble.setDefaultWorkspaces(require("../configs/defaultWorkspaces.json"));

//sets path for any css overwrites. 
//**FULL PATH REQUIRED IF YOU WANT IT TO WORK WITH USER DEFINED COMPONENTS**
//Uncomment for a McDonald's themed experience
//Modify `./src/components/assets/css/finsemble-overrides.scss` to change the theming.
//Finsemble.setCSSOverridesPath(StartupConfig[env].clientRoute +'/components/assets/css/finsemble-overrides.css');


//Soon you will be able to change your default storage
Finsemble.setDefaultStorage("localStorage");


Finsemble.updateBaseUrl(hostname);

module.exports = function () {

    return Finsemble.getConfig();
};