const {bytes, kb, mb, gb} = require('../../src/index')
const Bytes = require('../../src/storage/Bytes')
const Kilobytes = require('../../src/storage/Kilobytes')
const Megabytes = require('../../src/storage/Megabytes')
const Gigabytes = require('../../src/storage/Gigabytes')

describe('When converting bytes', () => {

    test('to bytes', () => {
        const result = bytes(1).toBytes()

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to kb', () => {
        const result = bytes(1024).toKb()

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to mb', () => {
        const result = bytes(1024 * 1024).toMb()

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gb', () => {
        const result = bytes(1024 * 1024 * 1024).toGb()

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting kilobytes', () => {

    test('to bytes', () => {
        const result = kb(1).toBytes()

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to kb', () => {
        const result = kb(1).toKb()

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to mb', () => {
        const result = kb(1024).toMb()

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gb', () => {
        const result = kb(1024 * 1024).toGb()

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting megabytes', () => {

    test('to bytes', () => {
        const result = mb(1).toBytes()

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024 * 1024)
    })

    test('to kb', () => {
        const result = mb(1).toKb()

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to mb', () => {
        const result = mb(1).toMb()

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1)
    })

    test('to gb', () => {
        const result = mb(1024).toGb()

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting gigabytes', () => {

    test('to bytes', () => {
        const result = gb(1).toBytes()

        expect(result.getUnits()).toBe(Bytes)
        expect(result.getAmount()).toEqual(1024 * 1024 * 1024)
    })

    test('to kb', () => {
        const result = gb(1).toKb()

        expect(result.getUnits()).toBe(Kilobytes)
        expect(result.getAmount()).toEqual(1024 * 1024)
    })

    test('to mb', () => {
        const result = gb(1).toMb()

        expect(result.getUnits()).toBe(Megabytes)
        expect(result.getAmount()).toEqual(1024)
    })

    test('to gb', () => {
        const result = gb(1).toGb()

        expect(result.getUnits()).toBe(Gigabytes)
        expect(result.getAmount()).toEqual(1)
    })

})