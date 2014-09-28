var ErgastClient = require("./index");

var ergast = new ErgastClient();

// Get the information of the drivers of 2014
ergast.getDrivers(2014, function(err, drivers) {
    if (!err) console.log(drivers);
});

// Get the information of Alonso
ergast.getDriver('alonso', function(err, driver) {
    if (!err) console.log(driver);
});

// Get the information of the constructors of 2014
ergast.getConstructors(2014, function(err, constructors) {
    if (!err) console.log(constructors);
});

// Get the information of Ferrari
ergast.getConstructor('ferrari', function(err, constructor) {
   if (!err) console.log(constructor);
});