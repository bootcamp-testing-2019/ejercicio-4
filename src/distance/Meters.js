const DistanceUnits = require('./DistanceUnits')

class Meters extends DistanceUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Meters.
     */
    static getFactor() {
        return 1.0
    }

    /// Displaying

    static toString() {
        return 'm'
    }
}

module.exports = Meters