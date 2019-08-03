const Bytes = require('./Bytes')
const Kilobytes = require('./Kilobytes')
const Megabytes = require('./Megabytes')
const Gigabytes = require('./Gigabytes')

class StorageMeasurement {
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

    /// Asking

    /*
     * Returns true since this is a StorageMeasurement.
     */
    isStorageMeasurement() {
        return true
    }

    /// Arithmetics

    /*
     * Returns the sum of this measurement plus anotherMeasurement expressed in the same units as
     * this units.
     */
    plus(anotherMeasurement) {
        this.validateStorageMeasurement(
            anotherMeasurement,
            `Can not add ${anotherMeasurement} to a StorageMeasurement.`
        )

        const bytes = this.toBytes().getAmount() + anotherMeasurement.toBytes().getAmount()

        const amount = bytes / this.getUnits().getFactor()

        const Units = this.getUnits()

        return Units.amount(amount)
    }

    /*
     * Returns the rest of this measurement mimnus anotherMeasurement expressed in the same units as
     * this units.
     */
    minus(anotherMeasurement) {
        this.validateStorageMeasurement(
            anotherMeasurement,
            `Can not substract ${anotherMeasurement} to a StorageMeasurement.`
        )

        const bytes = this.toBytes().getAmount() - anotherMeasurement.toBytes().getAmount()

        const amount = bytes / this.getUnits().getFactor()

        const Units = this.getUnits()

        return Units.amount(amount)
    }

    /*
     * Returns the multiplication of this measurement by a scalar expressed in the same units as
     * this units.
     */
    multipliedBy(scalar) {
        this.validateScalar(
            scalar,
            `Can not multiply a StorageMeasurement by ${scalar}.`
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
        this.validateScalar(
            scalar,
            `Can not divide a StorageMeasurement by ${scalar}.`
        )

        return this.multipliedBy(1.0 / scalar)
    }

    /// Converting

    /*
     * Returns this Measurement expressed as Bytes.
     */
    toBytes() {
        const bytes = this.units.getFactor() * this.amount

        return Bytes.amount(bytes)
    }

    /*
     * Returns this Measurement expressed as Kilobytes.
     */
    toKb() {
        const bytes = this.units.getFactor() * this.amount

        const kb = bytes / Kilobytes.getFactor()

        return Kilobytes.amount(kb)
    }

    /*
     * Returns this Measurement expressed as Megabytes.
     */
    toMb() {
        const bytes = this.units.getFactor() * this.amount

        const mb = bytes / Megabytes.getFactor()

        return Megabytes.amount(mb)
    }

    /*
     * Returns this Measurement expressed as Gigabytes.
     */
    toGb() {
        const bytes = this.units.getFactor() * this.amount

        const mb = bytes / Gigabytes.getFactor()

        return Gigabytes.amount(mb)
    }

    /// Displaying

    toString() {
        const unitsString = this.units.toString()

        return `${unitsString}(${this.amount})`
    }

    /// Validating

    /*
     * Validates that the given object behaves as a StorageMeasurement.
     * Raises an errorMessage if not.
     */
    validateStorageMeasurement(object, errorMessage) {
        if(object.isStorageMeasurement !== undefined && object.isStorageMeasurement()) {
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

module.exports = StorageMeasurement