const {mm, cm, m, km} = require('../../src/index')
const Millimeters = require('../../src/distance/Millimeters')
const Centimeters = require('../../src/distance/Centimeters')
const Meters = require('../../src/distance/Meters')
const Kilometers = require('../../src/distance/Kilometers')

describe('When adding mm', () => {

    test('to mm', () => {
        const result = mm(1).plus( mm(1) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to cm', () => {
        const result = cm(1).plus( mm(10) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to m', () => {
        const result = m(1).plus( mm(1000) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to km', () => {
        const result = km(1).plus( mm(1000 * 1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding cm', () => {

    test('to mm', () => {
        const result = mm(1).plus( cm(0.1) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to cm', () => {
        const result = cm(1).plus( cm(1) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to m', () => {
        const result = m(1).plus( cm(100) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to km', () => {
        const result = km(1).plus( cm(100 * 1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding m', () => {

    test('to mm', () => {
        const result = mm(1).plus( m(0.001) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to cm', () => {
        const result = cm(1).plus( m(0.01) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to m', () => {
        const result = m(1).plus( m(1) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to km', () => {
        const result = km(1).plus( m(1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('When adding km', () => {

    test('to mm', () => {
        const result = mm(1).plus( km(0.000001) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to cm', () => {
        const result = cm(1).plus( km(0.00001) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to m', () => {
        const result = m(1).plus( km(0.001) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(2)
    })

    test('to km', () => {
        const result = km(1).plus( km(1) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(2)
    })

})

describe('It raises an error when adding a non DistanceMeasurement', () => {

    test('to mm', () => {
        expect( () => {
            mm(1).plus(1)
        }).toThrow('Can not add 1 to a DistanceMeasurement.')
    })

    test('to cm', () => {
        expect( () => {
            cm(1).plus(1)
        }).toThrow('Can not add 1 to a DistanceMeasurement.')
    })

    test('to m', () => {
        expect( () => {
            m(1).plus(1)
        }).toThrow('Can not add 1 to a DistanceMeasurement.')
    })

    test('to km', () => {
        expect( () => {
            km(1).plus(1)
        }).toThrow('Can not add 1 to a DistanceMeasurement.')
    })

})