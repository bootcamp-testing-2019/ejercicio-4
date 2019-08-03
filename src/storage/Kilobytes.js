const StorageMeasurement = require('./StorageMeasurement')

class Kilobytes extends StorageMeasurement {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1024.0
    }

    /// Displaying

    toString() {
        return `kb(${this.amount})`
    }
}


module.exports = Kilobytes