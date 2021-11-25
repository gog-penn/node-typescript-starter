import { addNumbers, calcAreaSquare, calcAreaTriangle } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Add two numbers together', () => {
    expect(addNumbers(7, 11)).toBe(18);
})