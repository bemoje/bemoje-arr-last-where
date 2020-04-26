import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Return the last element of an array where the callback returns true.
 * @param {Array} arr - The array to iterate
 * @param {callback} callback - callback(element, index, array): boolean
 * @returns {any} The last element to satisfy the condition in the callback
 */
function arrLastWhere(arr, callback) {
	assertArgs(arr, callback);
	assertType(Array, arr);
	assertType(Function, callback);

	for (let i = arr.length - 1; i >= 0; i--) {
		if (callback(arr[i], i, arr) === true) {
			return arr[i]
		}
	}

	return null
}

/**
 * @callback callback
 * @param {*} element - The current element
 * @param {number} index - The current element's index in the array
 * @param {Array} array - The array
 */

export default arrLastWhere;
