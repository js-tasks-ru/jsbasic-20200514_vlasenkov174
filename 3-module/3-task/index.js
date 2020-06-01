/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let splitStr = str.split('-');
    let mapStr = splitStr.map(function(word, index) {
        if (index == 0) {
            return word
        }
        else {
            return word[0].toUpperCase() + word.slice(1)
        }
        
    });
    console.log(mapStr)
    let joinStr = mapStr.join('');
    return joinStr;
}
camelize("background-color") == 'backgroundColor';