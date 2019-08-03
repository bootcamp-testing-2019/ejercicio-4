const StorageMeasurement = require('./StorageMeasurement')

class Gigabytes extends StorageMeasurement {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1024.0 * 1024.0 * 1024.0
    }

    /// Displaying

    toString() {
        return `gb(${this.amount})`
    }
}

module.exports = Gigabytes