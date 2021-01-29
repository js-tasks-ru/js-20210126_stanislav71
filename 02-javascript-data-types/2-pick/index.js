/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => { 
    let memo = {};

    [...fields].forEach(field => {
        if(field in obj)
            memo[field] = obj[field]
    });
    return memo;
};
