/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
let arr = str
    .split(' ')
    .join(',')
    .split(',')
    .map(val=>parseFloat(val))
    .filter(val=>!Number.isNaN(val));
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}
