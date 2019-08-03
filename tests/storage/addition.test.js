const {bytes, kb, mb, gb} = require('../../src/index')
const Bytes = require('../../src/storage/Bytes')
const Kilobytes = require('../../src/storage/Kilobytes')
const Megabytes = require('../../src/storage/Megabytes')
const Gigabytes = require('../../src/storage/Gigabytes')

describe('When adding bytes', () => {

    test('to bytes', () => {
        const result = bytes(1).plus( bytes(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to kilobytes', () => {
        const result = kb(1).plus( bytes(1024) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to megabytes', () => {
        const result = mb(1).plus( bytes(1024 * 1024) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to gigabytes', () => {
        const result = gb(1).plus( bytes(1024 * 1024 * 1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding kilobytes', () => {

    test('to bytes', () => {
        const result = bytes(1024).plus( kb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(2 * 1024)
    })

    test('to kilobytes', () => {
        const result = kb(1).plus( kb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to megabytes', () => {
        const result = mb(1).plus( kb(1024) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to gigabytes', () => {
        const result = gb(1).plus( kb(1024 * 1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding megabytes', () => {

    test('to bytes', () => {
        const result = bytes(1024 * 1024).plus( mb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(2 * 1024 * 1024)
    })

    test('to kilobytes', () => {
        const result = kb(1024).plus( mb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(2048)
    })

    test('to megabytes', () => {
        const result = mb(1).plus( mb(1) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(2)
    })

    test('to gigabytes', () => {
        const result = gb(1).plus( mb(1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding gigabytes', () => {

    test('to bytes', () => {
        const result = bytes(1024 * 1024 * 1024).plus( gb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(2 * 1024 * 1024 * 1024)
    })

    test('to kilobytes', () => {
        const result = kb(1024 * 1024).plus( gb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(2 * 1024 * 1024)
    })

    test('to megabytes', () => {
        const result = mb(1024).plus( gb(1) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(2 * 1024)
    })

    test('to gigabytes', () => {
        const result = gb(1).plus( gb(1) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('It raises an error when adding a non StorageMeasurement', () => {

    test('to bytes', () => {
        expect( () => {
            bytes(1).plus(1)
        }).toThrow('Can not add 1 to a StorageMeasurement.')
    })

    test('to kilobytes', () => {
        expect( () => {
            kb(1).plus(1)
        }).toThrow('Can not add 1 to a StorageMeasurement.')
    })

    test('to megabytes', () => {
        expect( () => {
            mb(1).plus(1)
        }).toThrow('Can not add 1 to a StorageMeasurement.')
    })

    test('to gigabytes', () => {
        expect( () => {
            gb(1).plus(1)
        }).toThrow('Can not add 1 to a StorageMeasurement.')
    })

})