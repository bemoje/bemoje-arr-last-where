(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-last-where'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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

	return arrLastWhere;

})));
