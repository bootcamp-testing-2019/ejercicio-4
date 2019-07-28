const {substract} = require('../src/index')

test('adds bytes to bytes', () => {

    const amount = substract(3, 'bytes', 4, 'bytes', 'bytes')

    expect(amount).toEqual(-1)
})

test('adds bytes to kb', () => {

    const amount = substract(1024, 'bytes', 1, 'kb', 'bytes')

    expect(amount).toEqual(0)
})

test('adds bytes to mb', () => {

    const amount = substract(1024, 'bytes', 1, 'mb', 'bytes')

    expect(amount).toEqual(-1047552)
})