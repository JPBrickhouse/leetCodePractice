// Two-sum problem, but using a HASH table

// One can think of an object as an associative array (a.k.a. map, dictionary, hash, lookup table).
// The keys in this array are the names of the object's properties.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors

// KEY VALUE PAIRS

// ========================================================
// Building a hash table, just to understand the principle
var hashTableBuild = function (nums) {
    let hashTable = {} // initializing an empty object
    // forEach
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    nums.forEach((currentValue, index) => {
        // in the hashTable:
        // the key will be currentValue (aka, the currentValue of the array)
        // the value will be the index of that currentValue
        hashTable[currentValue] = index
    });
    console.log(hashTable)
};
// ========================================================
console.log(hashTableBuild([2,7,11,15]))
