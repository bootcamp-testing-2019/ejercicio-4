const DistanceUnits = require('./DistanceUnits')

class Millimeters extends DistanceUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Meters.
     */
    static getFactor() {
        return 0.001
    }

    /// Displaying

    static toString() {
        return 'mm'
    }
}

module.exports = Millimeters