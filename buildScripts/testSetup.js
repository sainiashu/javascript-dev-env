//This file is not transpiled, so must use CommonJS and ESS

//Register babel to transpile before our tests run.
require('babel-register')();

//Disable webpack features that Mocha does not understand it.
require.extensions['.css']= function() {};