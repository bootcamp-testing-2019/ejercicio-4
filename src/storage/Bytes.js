const StorageMeasurement = require('./StorageMeasurement')

class Bytes extends StorageMeasurement {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1.0
    }

    /// Displaying

    toString() {
        return `bytes(${this.amount})`
    }
}

module.exports = Bytes