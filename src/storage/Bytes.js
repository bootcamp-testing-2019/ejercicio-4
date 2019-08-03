const Units = require('./Units')

class Bytes extends Units {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        return 1.0
    }

    /// Displaying

    static toString() {
        return 'bytes'
    }
}

module.exports = Bytes