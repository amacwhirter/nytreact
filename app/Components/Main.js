// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Search");
var Results = require("./children/Results");
var History = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

//CREATE MAIN COMPONENT HERE\\

// Export the component back for use in other files
module.exports = Main;
