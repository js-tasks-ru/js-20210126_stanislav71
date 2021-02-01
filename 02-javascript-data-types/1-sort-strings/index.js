/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    const cloneArr = [...arr]
    
    if (param === 'asc')
        return cloneArr.sort(ascSort)
    if (param === 'desc')
        return cloneArr.sort(descSort)
}
function ascSort(a,b){
    return sortFunction(a, b, false);
}
function descSort(a,b){
    return sortFunction(a, b, true);
}
function sortFunction(a, b, reverse){
    return reverse ? b.localeCompare(a,'ru-u-kf-upper','en-u-kf-upper') :
    a.localeCompare(b,'ru-u-kf-upper','en-u-kf-upper');
}
  