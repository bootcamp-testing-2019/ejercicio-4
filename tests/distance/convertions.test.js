const {mm, cm, m, km} = require('../../src/index')
const Millimeters = require('../../src/distance/Millimeters')
const Centimeters = require('../../src/distance/Centimeters')
const Meters = require('../../src/distance/Meters')
const Kilometers = require('../../src/distance/Kilometers')

describe('When converting mm', () => {

    test('to mm', () => {
        const result = mm(1).toMm()

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to cm', () => {
        const result = mm(10).toCm()

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = mm(1000).toM()

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = mm(1000 * 1000).toKm()

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting cm', () => {

    test('to mm', () => {
        const result = cm(1).toMm()

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(10)
    })

    test('to cm', () => {
        const result = cm(1).toCm()

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = cm(100).toM()

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = cm(100 * 1000).toKm()

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting meters', () => {

    test('to mm', () => {
        const result = m(1).toMm()

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1000)
    })

    test('to cm', () => {
        const result = m(1).toCm()

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(100)
    })

    test('to m', () => {
        const result = m(1).toM()

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = m(1000).toKm()

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When converting km', () => {

    test('to mm', () => {
        const result = km(1).toMm()

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1000 * 1000)
    })

    test('to cm', () => {
        const result = km(1).toCm()

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(100 * 1000)
    })

    test('to m', () => {
        const result = km(1).toM()

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1000)
    })

    test('to km', () => {
        const result = km(1).toKm()

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})