const {mm, cm, m, km} = require('../../src/index')
const Millimeters = require('../../src/distance/Millimeters')
const Centimeters = require('../../src/distance/Centimeters')
const Meters = require('../../src/distance/Meters')
const Kilometers = require('../../src/distance/Kilometers')

describe('When dividing a scalar', () => {
    test('from mm', () => {
        const result = mm(2).dividedBy(2)

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('from cm', () => {
        const result = cm(2).dividedBy(2)

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(1)
    })

    test('from m', () => {
        const result = m(2).dividedBy(2)

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(1)
    })

    test('from km', () => {
        const result = km(2).dividedBy(2)

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(1)
    })
})

describe('It raises an error when dividing by a non scalar', () => {
    test('from mm', () => {
        expect( () => {
            mm(1).dividedBy(mm(1))
        }).toThrow('Can not divide a DistanceMeasurement by mm(1).')
    })

    test('from cm', () => {
        expect( () => {
            cm(1).dividedBy(mm(1))
        }).toThrow('Can not divide a DistanceMeasurement by mm(1).')
    })

    test('from m', () => {
        expect( () => {
            m(1).dividedBy(mm(1))
        }).toThrow('Can not divide a DistanceMeasurement by mm(1).')
    })

    test('from km', () => {
        expect( () => {
            km(1).dividedBy(mm(1))
        }).toThrow('Can not divide a DistanceMeasurement by mm(1).')
    })
})