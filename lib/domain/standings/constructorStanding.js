var Constructor = require('./../constructors/constructor');

function ConstructorStanding(constructorStandingDetails) {
    this.position = parseInt(constructorStandingDetails.position);
    this.points = parseInt(constructorStandingDetails.points);
    this.wins = parseInt(constructorStandingDetails.wins);
    this.constructor = new Constructor(constructorStandingDetails.Constructor);
}

module.exports = ConstructorStanding;