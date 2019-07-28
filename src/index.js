const convertionFactor = {
    bytes: 1.0,
    kb: 1024,
    mb: 1024 * 1024,
}

function expressedIn(amount, units, resultUnits) {
    const bytesAmount = amount * convertionFactor[units]

    return bytesAmount / convertionFactor[resultUnits]
}

function add(amount, units, amount2, units2, resultUnits) {
    const bytes = expressedIn(amount, units, 'bytes')

    const bytes2 = expressedIn(amount2, units2, 'bytes')

    return expressedIn(bytes + bytes2, 'bytes', resultUnits)
}

function substract(amount, units, amount2, units2, resultUnits) {
    const bytes = expressedIn(amount, units, 'bytes')

    const bytes2 = expressedIn(amount2, units2, 'bytes')

    return expressedIn(bytes - bytes2, 'bytes', resultUnits)
}

module.exports = {add, substract}