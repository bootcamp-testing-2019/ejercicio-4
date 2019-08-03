const Bytes = require('./storage/Bytes')
const Kilobytes = require('./storage/Kilobytes')
const Megabytes = require('./storage/Megabytes')
const Gigabytes = require('./storage/Gigabytes')

function bytes(amount) {
    return new Bytes(amount)
}

function kb(amount) {
    return new Kilobytes(amount)
}

function mb(amount) {
    return new Megabytes(amount)
}

function gb(amount) {
    return new Gigabytes(amount)
}

module.exports = {bytes, kb, mb, gb}