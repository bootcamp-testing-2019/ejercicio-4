const Measurement = require('../Measurement')

const Millimeters = require('./Millimeters')
const Centimeters = require('./Centimeters')
const Meters = require('./Meters')
const Kilometers = require('./Kilometers')

class DistanceMeasurement extends Measurement {
    /// Asking

    /*
     * Returns true since this is a DistanceMeasurement.
     */
    isDistanceMeasurement() {
        return true
    }

    /// Converting

    /*
     * Returns this Measurement expressed as Meters.
     */
    toBaseUnits() {
        return this.toM()
    }

    /*
     * Returns this Measurement expressed as Millimeters.
     */
    toMm() {
        const meters = this.units.getFactor() * this.amount

        const mm = meters / Millimeters.getFactor()

        return Millimeters.amount(mm)
    }

    /*
     * Returns this Measurement expressed as Centimeters.
     */
    toCm() {
        const meters = this.units.getFactor() * this.amount

        const cm = meters / Centimeters.getFactor()

        return Centimeters.amount(cm)
    }

    /*
     * Returns this Measurement expressed as Meters.
     */
    toM() {
        const meters = this.units.getFactor() * this.amount

        return Meters.amount(meters)
    }

    /*
     * Returns this Measurement expressed as Kilometers.
     */
    toKm() {
        const meters = this.units.getFactor() * this.amount

        const km = meters / Kilometers.getFactor()

        return Kilometers.amount(km)
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
}

module.exports = DistanceMeasurement