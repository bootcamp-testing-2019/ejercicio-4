class StorageMeasurement {
    /// Constants

    /*
     * Returns the mutiplication factor of this Units respect to the base unit Bytes.
     */
    static getFactor() {
        const subclassName = this.constructor.name

        throw `Subclass ${subclassName} must define the method 'getFactor()'.`
    }

    /// Creating instances

    /*
     * Returns the bytesAmount expressed as this units.
     */
    static fromBytesAmounts(bytesAmount) {
        const Units = this

        return new Units(bytesAmount / this.getFactor())
    }

    /// Initializing

    constructor(amount) {
        this.amount = amount
    }

    /// Accessing

    /*
     * Returns the amount of units in this measurement.
     */
    getAmount() {
        return this.amount
    }

    /*
     * Returns the units of this measurement.
     */
    getUnits() {
        return this.constructor
    }

    /// Asking

    isStorageMeasurement() {
        return true
    }

    /// Arithmetics

    /*
     * Returns a new Measurement with the addition of this measurent + anotherMeasurement, expressed
     * in the same units as this units.
     */
    plus(anotherMeasurement) {
        this.validateMeasurementCompatibility(
            anotherMeasurement,
            `Can not add ${anotherMeasurement} to a StorageMeasurement.`
        )

        const bytesAmount = this.toBytes().getAmount() + anotherMeasurement.toBytes().getAmount()

        const Units = this.constructor

        return Units.fromBytesAmounts(bytesAmount)
    }

    /*
     * Returns a new Measurement with the substraction of this measurent - anotherMeasurement, expressed
     * in the same units as this units.
     */
    minus(anotherMeasurement) {
        this.validateMeasurementCompatibility(
            anotherMeasurement,
            `Can not substract ${anotherMeasurement} to a StorageMeasurement.`
        )

        const negatedMeasurement = anotherMeasurement.multipliedBy(-1)

        return this.plus(negatedMeasurement)
    }

    /*
     * Returns a new Measurement with the multiplication of this measurent * scalar, expressed
     * in the same units as this units.
     */
    multipliedBy(scalar) {
        this.validateScalarCompatibility(
            scalar,
            `Can not multiply a StorageMeasurement by ${scalar}.`
        )

        const amount = this.getAmount() * scalar

        const Units = this.constructor

        return new Units(amount)
    }

    /*
     * Returns a new Measurement with the division of this measurent / scalar, expressed
     * in the same units as this units.
     */
    dividedBy(scalar) {
        this.validateScalarCompatibility(scalar)

        return this.multipliedBy(1.0 / scalar)
    }

    /// Converting

    /*
     * Returns a new Measurement with this measurement expressed as bytes.
     */
    toBytes() {
        const Bytes = require('./Bytes')

        const Units = this.constructor

        const bytesAmount = this.amount * Units.getFactor()

        return new Bytes(bytesAmount)
    }

    /*
     * Returns a new Measurement with this measurement expressed as kb.
     */
    toKb() {
        const Kilobytes = require('./Kilobytes')

        return Kilobytes.fromBytesAmounts(this.toBytes().getAmount())
    }

    /*
     * Returns a new Measurement with this measurement expressed as mb.
     */
    toMb() {
        const Megabytes = require('./Megabytes')

        return Megabytes.fromBytesAmounts(this.toBytes().getAmount())
    }

    /*
     * Returns a new Measurement with this measurement expressed as gb.
     */
    toGb() {
        const Gigabytes = require('./Gigabytes')

        return Gigabytes.fromBytesAmounts(this.toBytes().getAmount())
    }

    /// Validating

    /*
     * Raises an error if measurement is not compatible with a StorageMeasurement.
     */
    validateMeasurementCompatibility(measurement, message) {
        if(measurement.isStorageMeasurement !== undefined && measurement.isStorageMeasurement()) {
            return
        }

        throw message
    }

    /*
     * Raises an error if measurement is not compatible with a scalar.
     */
    validateScalarCompatibility(scalar, message) {
        if(typeof scalar === 'number') {
            return
        }

        throw message
    }
}

module.exports = StorageMeasurement