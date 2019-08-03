const StorageUnits = require('./StorageUnits')

class Kilobytes extends StorageUnits {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1024.0
    }

    /// Displaying

    static toString() {
        return 'kb'
    }
}

module.exports = Kilobytes