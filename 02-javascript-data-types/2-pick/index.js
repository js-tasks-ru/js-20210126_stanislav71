/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => { 
    const memo = {};

    [...fields].forEach(field => {
        if(Object.keys(obj).includes(field))
            memo[field] = obj[field]
    });
    return memo;
};
