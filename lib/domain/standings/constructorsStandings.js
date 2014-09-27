var _ = require('underscore');
var ConstructorStanding = require('./constructorStanding');

function ConstructorsStandings(constructorsStandings) {
    var self = this;
    this.standings = [];
    _.map(constructorsStandings, function(standing) { self.standings.push(new ConstructorStanding (standing)); });
}

ConstructorsStandings.prototype.getConstructorStanding = function(position) {
    return _.find(this.standings, function(standing) { return standing.position == position });
};

module.exports = ConstructorsStandings;