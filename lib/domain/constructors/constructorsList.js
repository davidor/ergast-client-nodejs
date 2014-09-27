var _ = require('underscore');
var Constructor = require('./constructor');

function ConstructorsList(constructorsDetails) {
    var self = this;
    this.constructors = [];
    _.map(constructorsDetails, function(constructorDetails) {
        self.constructors.push(new Constructor(constructorDetails));
    });
}

ConstructorsList.prototype.getConstructor = function(id) {
    return _.find(this.constructors, function(constructor) { return constructor.constructorId == id });
};

module.exports = ConstructorsList;