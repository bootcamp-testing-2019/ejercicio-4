const Measurement = require('../Measurement')

const Bytes = require('./Bytes')
const Kilobytes = require('./Kilobytes')
const Megabytes = require('./Megabytes')
const Gigabytes = require('./Gigabytes')

class StorageMeasurement extends Measurement {
    /// Asking

    /*
     * Returns true since this is a StorageMeasurement.
     */
    isStorageMeasurement() {
        return true
    }

    /// Converting

    /*
     * Returns this Measurement expressed as Bytes.
     */
    toBaseUnits() {
        return this.toBytes()
    }

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
}

module.exports = StorageMeasurement