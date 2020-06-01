/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    let results = arr.filter(item => (item >= a && item <= b))
    return results;
}
