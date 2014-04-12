//
//  associativeSort.js
//  ShadyJS
//
//  Version 0.2
//  11/04/2014
//
//  Created by Adam Pypstra
//

//~~TESTING~~
var aarray = {
	list: ['item0', 'item1', 'item2', 'item3', 'item4', 'item5'],
	items: {
		item0: {id:'item0',num: 25},
		item1: {id:'item1',num: 1},
		item2: {id:'item2',num: 2},
		item3: {id:'item3',num: 5},
		item4: {id:'item4',num: -1},
		item5: {id:'item5',num: 4}
	}
};

function test()
{
	var i;

	console.group('Pre-Sort');
	for(i = 0; i < aarray.list.length; ++i)
	{
		console.log(aarray.items[aarray.list[i]]);
	}
	console.groupEnd();

	associativeSort(aarray, 'items', 'num');

	console.group('Post-Sort');
	for(i = 0; i < aarray.list.length; ++i)
	{
		console.log(aarray.items[aarray.list[i]]);
	}
	console.groupEnd();

}
//~~TESTING~~

/**
 * Sorts an assocaitive array {Object} based on provided criteria
 * @function associativeSort
 * @param array       {Object}  - Associative array object to be sorted
 * @param listKey     {String}  - Property in @param array that contains ids for the items in the array
 * @param itemKey     {String}  - Property in @param array that contains the items to be sorted
 * @param compareKey  {String}  - Property to compare for each item in the array
 */
function associativeSort(array, listKey, itemKey, compareKey)
{
	var sortedArray;
	var list = array[listKey];
	var items = array[itemKey];

	var compare = function(a,b)
	{
		console.log('a:%s > b:%s IS -> %s', a[compareKey], b[compareKey], (a[compareKey] > b[compareKey]));
		return a[compareKey] > b[compareKey];
	}

	for(var i = 0; i < list.length - 1; ++i)
	{
		var result = compare(items[list[i]], items[list[(i + 1)]]);
		console.log(result);

		switch(result)
		{
			case true: {
				var hold = list[(i + 1)];
				var hold2 = list[i];
				list[i] = hold;
				list[(i + 1)] = hold2;
				i = 0;
				break;
			}
			case false: {
				break;
			}
		}

	}
}