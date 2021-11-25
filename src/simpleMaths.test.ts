import { calcAreaRectangle, calcAreaSquare, calcAreaTriangle } from './simpleMaths'

test('Area Square', () => {
    expect(calcAreaSquare(4)).toBe(16);
})

test('Area Triangle', () => {
    expect(calcAreaTriangle(4, 5)).toBe(10);
})

test('Area Rectangle', () => {
    expect(calcAreaRectangle(7, 5)).toBe(35);
})