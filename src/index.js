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


const Millimeters = require('./distance/Millimeters')
const Centimeters = require('./distance/Centimeters')
const Meters = require('./distance/Meters')
const Kilometers = require('./distance/Kilometers')

function mm(amount) {
    return Millimeters.amount(amount)
}

function cm(amount) {
    return Centimeters.amount(amount)
}

function m(amount) {
    return Meters.amount(amount)
}

function km(amount) {
    return Kilometers.amount(amount)
}

module.exports = {
    bytes, kb, mb, gb,
    mm, cm, m, km,
}