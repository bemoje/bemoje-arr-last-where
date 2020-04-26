import arrLastWhere from '../src/arr-last-where'

const arr = [1, 2, 6, 3, 4, 5]

arrLastWhere(arr, (element) => {
	return element >= 5
})
//=> 5

arrLastWhere(arr, (element) => {
	return element >= 7
})
//=> null
