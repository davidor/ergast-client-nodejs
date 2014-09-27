var _ = require('underscore');
var Race = require('./../races/race');

function Season(seasonRaces) {
    var self = this;
    this.races = [];
    _.map(seasonRaces, function(seasonRace) { self.races.push(new Race(seasonRace)); });
}

Season.prototype.getRace = function(round) {
    return _.find(this.races, function(race) { return race.round == round });
};

module.exports = Season;
