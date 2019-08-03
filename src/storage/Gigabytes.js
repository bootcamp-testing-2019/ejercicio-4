const StorageUnits = require('./StorageUnits')

class Gigabytes extends StorageUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1024.0 * 1024.0 * 1024.0
    }

    /// Displaying

    static toString() {
        return 'gb'
    }
}

module.exports = Gigabytes