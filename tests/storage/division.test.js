const {bytes, kb, mb, gb} = require('../../src/index')
const Bytes = require('../../src/storage/Bytes')
const Kilobytes = require('../../src/storage/Kilobytes')
const Megabytes = require('../../src/storage/Megabytes')
const Gigabytes = require('../../src/storage/Gigabytes')

test('When dividing bytes', () => {
    const result = bytes(2).dividedBy(2)

    expect(result.getUnits()).toBe(Bytes)
    expect(result.getAmount()).toEqual(1)
})

test('When dividing kilobytes', () => {
    const result = kb(2).dividedBy(2)

    expect(result.getUnits()).toBe(Kilobytes)
    expect(result.getAmount()).toEqual(1)
})

test('When dividing megabytes', () => {
    const result = mb(2).dividedBy(2)

    expect(result.getUnits()).toBe(Megabytes)
    expect(result.getAmount()).toEqual(1)
})

test('When dividing gigabytes', () => {
    const result = gb(2).dividedBy(2)

    expect(result.getUnits()).toBe(Gigabytes)
    expect(result.getAmount()).toEqual(1)
})