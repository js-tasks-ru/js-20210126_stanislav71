/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    let clone = Object.assign({},obj);

    [...fields].forEach(field => {
        if(field in clone)
            delete clone[field]
    });
    return clone;
};
