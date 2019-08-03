let StorageMeasurement

class Units {
    static amount(amount) {
        if(StorageMeasurement === undefined) {
            StorageMeasurement = require('./StorageMeasurement')
        }

        return new StorageMeasurement(amount, this)
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

module.exports = Units