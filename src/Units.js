class Units {
    /// Instantiating

    static amount(amount) {
        const subclassName = this.constructor.name

        throw `Subclass ${subclassName} must define the method 'amount(amount)'.`
    }

    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        const subclassName = this.constructor.name

        throw `Subclass ${subclassName} must define the method 'getFactor()'.`
    }

    /// Displaying

    static toString() {
        const subclassName = this.constructor.name

        throw `Subclass ${subclassName} must define the method 'toString()'.`
    }
}

module.exports = Units