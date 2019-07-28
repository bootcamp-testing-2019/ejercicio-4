const {add} = require('../src/index')

test('adds bytes to bytes', () => {

    const amount = add(3, 'bytes', 4, 'bytes', 'bytes')

    expect(amount).toEqual(7)
})

test('adds bytes to kb', () => {

    const amount = add(1024, 'bytes', 1, 'kb', 'bytes')

    expect(amount).toEqual(2048)
})

test('adds bytes to mb', () => {

    const amount = add(1024, 'bytes', 1, 'mb', 'bytes')

    expect(amount).toEqual(1049600)
})