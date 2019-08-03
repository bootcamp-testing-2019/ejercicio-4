const Bytes = require('./storage/Bytes')
const Kilobytes = require('./storage/Kilobytes')
const Megabytes = require('./storage/Megabytes')
const Gigabytes = require('./storage/Gigabytes')

function bytes(amount) {
    return Bytes.amount(amount)
}

function kb(amount) {
    return Kilobytes.amount(amount)
}

function mb(amount) {
    return Megabytes.amount(amount)
}

function gb(amount) {
    return Gigabytes.amount(amount)
}

module.exports = {bytes, kb, mb, gb}