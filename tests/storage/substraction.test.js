const {bytes, kb, mb, gb} = require('../../src/index')
const Bytes = require('../../src/storage/Bytes')
const Kilobytes = require('../../src/storage/Kilobytes')
const Megabytes = require('../../src/storage/Megabytes')
const Gigabytes = require('../../src/storage/Gigabytes')

describe('When substracting bytes', () => {

    test('to bytes', () => {
        const result = bytes(2).minus( bytes(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to kilobytes', () => {
        const result = kb(2).minus( bytes(1024) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to megabytes', () => {
        const result = mb(2).minus( bytes(1024 * 1024) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gigabytes', () => {
        const result = gb(2).minus( bytes(1024 * 1024 * 1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting kilobytes', () => {

    test('to bytes', () => {
        const result = bytes(2 * 1024).minus( kb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to kilobytes', () => {
        const result = kb(2).minus( kb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to megabytes', () => {
        const result = mb(2).minus( kb(1024) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gigabytes', () => {
        const result = gb(2).minus( kb(1024 * 1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting megabytes', () => {

    test('to bytes', () => {
        const result = bytes(2 * 1024 * 1024).minus( mb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024 * 1024)
    })

    test('to kilobytes', () => {
        const result = kb(2 * 1024).minus( mb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to megabytes', () => {
        const result = mb(2).minus( mb(1) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gigabytes', () => {
        const result = gb(2).minus( mb(1024) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting gigabytes', () => {

    test('to bytes', () => {
        const result = bytes(2 * 1024 * 1024 * 1024).minus( gb(1) )

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024 * 1024 * 1024)
    })

    test('to kilobytes', () => {
        const result = kb(2 * 1024 * 1024).minus( gb(1) )

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1024 * 1024)
    })

    test('to megabytes', () => {
        const result = mb(2 * 1024).minus( gb(1) )

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to gigabytes', () => {
        const result = gb(2).minus( gb(1) )

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('It raises an error when adding a non StorageMeasurement', () => {

    test('to bytes', () => {
        expect( () => {
            bytes(1).minus(1)
        }).toThrow('Can not substract 1 to a StorageMeasurement.')
    })

    test('to kilobytes', () => {
        expect( () => {
            kb(1).minus(1)
        }).toThrow('Can not substract 1 to a StorageMeasurement.')
    })

    test('to megabytes', () => {
        expect( () => {
            mb(1).minus(1)
        }).toThrow('Can not substract 1 to a StorageMeasurement.')
    })

    test('to gigabytes', () => {
        expect( () => {
            gb(1).minus(1)
        }).toThrow('Can not substract 1 to a StorageMeasurement.')
    })

})