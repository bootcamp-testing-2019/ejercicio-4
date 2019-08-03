const {mm, cm, m, km} = require('../../src/index')
const Millimeters = require('../../src/distance/Millimeters')
const Centimeters = require('../../src/distance/Centimeters')
const Meters = require('../../src/distance/Meters')
const Kilometers = require('../../src/distance/Kilometers')

describe('When multiplying a scalar', () => {
    test('from mm', () => {
        const result = mm(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Millimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('from cm', () => {
        const result = cm(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Centimeters)
        expect(result.getAmount()).toEqual(2)
    })

    test('from m', () => {
        const result = m(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Meters)
        expect(result.getAmount()).toEqual(2)
    })

    test('from km', () => {
        const result = km(1).multipliedBy(2)

        expect(result.getUnits()).toBe(Kilometers)
        expect(result.getAmount()).toEqual(2)
    })
})

describe('It raises an error when multiplying by a non scalar', () => {
    test('from mm', () => {
        expect( () => {
            mm(1).multipliedBy(mm(1))
        }).toThrow('Can not multiply a DistanceMeasurement by mm(1).')
    })

    test('from cm', () => {
        expect( () => {
            cm(1).multipliedBy(mm(1))
        }).toThrow('Can not multiply a DistanceMeasurement by mm(1).')
    })

    test('from m', () => {
        expect( () => {
            m(1).multipliedBy(mm(1))
        }).toThrow('Can not multiply a DistanceMeasurement by mm(1).')
    })

    test('from km', () => {
        expect( () => {
            km(1).multipliedBy(mm(1))
        }).toThrow('Can not multiply a DistanceMeasurement by mm(1).')
    })
})