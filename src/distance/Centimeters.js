const DistanceUnits = require('./DistanceUnits')

class Centimeters extends DistanceUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Meters.
     */
    static getFactor() {
        return 0.01
    }

    /// Displaying

    static toString() {
        return 'cm'
    }
}

module.exports = Centimeters