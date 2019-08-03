const Units = require('../Units')

let Measurement

class DistanceUnits extends Units {
    static amount(amount) {
        if(Measurement === undefined) {
            Measurement = require('./DistanceMeasurement')
        }

        return new Measurement(amount, this)
    }

    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        throw `Subclass ${subclassName} must define the method 'getFactor()'.`
    }

    /// Displaying

    static toString() {
        throw `Subclass ${subclassName} must define the method 'toString()'.`
    }
}

module.exports = DistanceUnits