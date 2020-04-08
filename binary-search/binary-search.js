'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let center = Math.floor(array.length / 2)
	let midpoint = array[center]
	console.log('center >>>', center);
	console.log('midpoint>>>', midpoint)
	if (midpoint === target) return true;
	if (array.length === 1) return false;
	if (target < midpoint)  return binarySearch(array.slice(0, center), target)
	else return binarySearch(array.slice(center), target)
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch