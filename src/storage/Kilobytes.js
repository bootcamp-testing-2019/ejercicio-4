const Units = require('./Units')

class Kilobytes extends Units {
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