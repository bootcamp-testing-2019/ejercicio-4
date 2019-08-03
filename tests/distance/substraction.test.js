const {mm, cm, m, km} = require('../../src/index')
const Millimeters = require('../../src/distance/Millimeters')
const Centimeters = require('../../src/distance/Centimeters')
const Meters = require('../../src/distance/Meters')
const Kilometers = require('../../src/distance/Kilometers')

describe('When substracting mm', () => {

    test('to mm', () => {
        const result = mm(2).minus( mm(1) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to cm', () => {
        const result = cm(2).minus( mm(10) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = m(2).minus( mm(1000) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = km(2).minus( mm(1000 * 1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting cm', () => {

    test('to mm', () => {
        const result = mm(2).minus( cm(0.1) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to cm', () => {
        const result = cm(2).minus( cm(1) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = m(2).minus( cm(100) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = km(2).minus( cm(100 * 1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting m', () => {

    test('to mm', () => {
        const result = mm(2).minus( m(0.001) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to cm', () => {
        const result = cm(2).minus( m(0.01) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = m(2).minus( m(1) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = km(2).minus( m(1000) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('When substracting km', () => {

    test('to mm', () => {
        const result = mm(2).minus( km(0.000001) )

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to cm', () => {
        const result = cm(2).minus( km(0.00001) )

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to m', () => {
        const result = m(2).minus( km(0.001) )

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('to km', () => {
        const result = km(2).minus( km(1) )

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })

})

describe('It raises an error when substracting a non DistanceMeasurement', () => {

    test('to mm', () => {
        expect( () => {
            mm(1).minus(1)
        }).toThrow('Can not substract 1 to a DistanceMeasurement.')
    })

    test('to cm', () => {
        expect( () => {
            cm(1).minus(1)
        }).toThrow('Can not substract 1 to a DistanceMeasurement.')
    })

    test('to m', () => {
        expect( () => {
            m(1).minus(1)
        }).toThrow('Can not substract 1 to a DistanceMeasurement.')
    })

    test('to km', () => {
        expect( () => {
            km(1).minus(1)
        }).toThrow('Can not substract 1 to a DistanceMeasurement.')
    })

})