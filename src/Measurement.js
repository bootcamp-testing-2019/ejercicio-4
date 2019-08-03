class Measurement {
    /// Initializing

    constructor(amount, units) {
        this.amount = amount
        this.units = units
    }

    /// Accessing

    /*
     * Returns the units of this Measurement.
     */
    getUnits() {
        return this.units
    }

    /*
     * Returns the amount of units of this Measurement.
     */
    getAmount() {
        return this.amount
    }

    /// Converting

    /*
     * Returns this Measurement expressed as Bytes.
     */
    toBaseUnits() {
        throw `Subclass ${subclassName} must define the method 'toBaseUnits()'.`
    }

    /// Asking

    /*
     * Returns true since this is a DistanceMeasurement.
     */
    isDistanceMeasurement() {
        return true
    }

    /// Arithmetics

    /*
     * Returns the sum of this measurement plus anotherMeasurement expressed in the same units as
     * this units.
     */
    plus(anotherMeasurement) {
        const measurementName = this.constructor.name

        this.validateDistanceMeasurement(
            anotherMeasurement,
            `Can not add ${anotherMeasurement} to a ${measurementName}.`
        )

        const baseUnitsAmount = this.toBaseUnits().getAmount() + anotherMeasurement.toBaseUnits().getAmount()

        const amount = baseUnitsAmount / this.getUnits().getFactor()

        const Units = this.getUnits()

        return Units.amount(amount)
    }

    /*
     * Returns the rest of this measurement mimnus anotherMeasurement expressed in the same units as
     * this units.
     */
    minus(anotherMeasurement) {
        const measurementName = this.constructor.name

        this.validateDistanceMeasurement(
            anotherMeasurement,
            `Can not substract ${anotherMeasurement} to a ${measurementName}.`
        )

        const baseUnitsAmount = this.toBaseUnits().getAmount() - anotherMeasurement.toBaseUnits().getAmount()

        const amount = baseUnitsAmount / this.getUnits().getFactor()

        const Units = this.getUnits()

        return Units.amount(amount)
    }

    /*
     * Returns the multiplication of this measurement by a scalar expressed in the same units as
     * this units.
     */
    multipliedBy(scalar) {
        const measurementName = this.constructor.name

        this.validateScalar(
            scalar,
            `Can not multiply a ${measurementName} by ${scalar}.`
        )

        const amount = this.amount * scalar

        const Units = this.getUnits()

        return Units.amount(amount)
    }

    /*
     * Returns the division of this measurement by a scalar expressed in the same units as
     * this units.
     */
    dividedBy(scalar) {
        const measurementName = this.constructor.name

        this.validateScalar(
            scalar,
            `Can not divide a ${measurementName} by ${scalar}.`
        )

        return this.multipliedBy(1.0 / scalar)
    }

    /// Displaying

    toString() {
        const unitsString = this.units.toString()

        return `${unitsString}(${this.amount})`
    }

    /// Validating

    /*
     * Validates that the given object behaves as a DistanceMeasurement.
     * Raises an errorMessage if not.
     */
    validateDistanceMeasurement(object, errorMessage) {
        if(object.isDistanceMeasurement !== undefined && object.isDistanceMeasurement()) {
            return
        }

        throw errorMessage
    }

    /*
     * Validates that the given object is a scalar number.
     * Raises an errorMessage if not.
     */
    validateScalar(object, errorMessage) {
        if(typeof object === 'number') {
            return
        }

        throw errorMessage
    }
}

module.exports = Measurement