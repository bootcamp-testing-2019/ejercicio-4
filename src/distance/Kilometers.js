const DistanceUnits = require('./DistanceUnits')

class Kilometers extends DistanceUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Meters.
     */
    static getFactor() {
        return 1000.0
    }

    /// Displaying

    static toString() {
        return 'km'
    }
}

module.exports = Kilometers