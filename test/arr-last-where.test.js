import arrLastWhere from '../src/arr-last-where'

describe('arrLastWhere', () => {
	test('works', () => {
		const arr = [1, 2, 6, 3, 4, 5]
		expect(
			arrLastWhere(arr, (element) => {
				return element >= 5
			}),
		).toBe(5)
		expect(
			arrLastWhere(arr, (element) => {
				return element >= 7
			}),
		).toBe(null)
	})
})
