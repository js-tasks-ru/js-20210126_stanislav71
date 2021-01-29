/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let clone_arr = [...arr]
    
    if (param === 'asc')
        return clone_arr.sort(sortFunction)
    if (param === 'desc')
        return clone_arr.sort(sortFunction).reverse()
}

function sortFunction(a, b){
    return a.localeCompare(b,'ru-u-kf-upper','en-u-kf-upper');
}
  