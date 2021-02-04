/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if(size) {
        string = [...string];
        let trigger = 1;
        let index = -1;
        while(++index < string.length - 1){
            if(string[index] === string[index + 1]){
                if (++trigger > size)
                    string.splice(index-- + 1, 1);
                continue;
            }
            trigger = 1;
        }
        return string.join('');
    }
    return size === undefined ? string : '';
}