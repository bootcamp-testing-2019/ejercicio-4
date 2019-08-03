const {bytes, kb, mb, gb} = require('../../src/index')
const Bytes = require('../../src/storage/Bytes')
const Kilobytes = require('../../src/storage/Kilobytes')
const Megabytes = require('../../src/storage/Megabytes')
const Gigabytes = require('../../src/storage/Gigabytes')

describe('When multiplying a scalar', () => {
    test('from bytes', () => {
        const result = bytes(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('from kilobytes', () => {
        const result = kb(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('from megabytes', () => {
        const result = mb(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('from gigabytes', () => {
        const result = gb(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(2)
    })
})

describe('It raises an error when multiplying by a non scalar', () => {
    test('from bytes', () => {
        expect( () => {
            bytes(1).multipliedBy(bytes(1))
        }).toThrow('Can not multiply a StorageMeasurement by bytes(1).')
    })

    test('from kilobytes', () => {
        expect( () => {
            kb(1).multipliedBy(bytes(1))
        }).toThrow('Can not multiply a StorageMeasurement by bytes(1).')
    })

    test('from megabytes', () => {
        expect( () => {
            mb(1).multipliedBy(bytes(1))
        }).toThrow('Can not multiply a StorageMeasurement by bytes(1).')
    })

    test('from gigabytes', () => {
        expect( () => {
            gb(1).multipliedBy(bytes(1))
        }).toThrow('Can not multiply a StorageMeasurement by bytes(1).')
    })
})