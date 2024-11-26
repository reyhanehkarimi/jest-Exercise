const filterElement = require("./2-filterElement")

it('should be return items equal element', () => { 
    const array = [1,2,1,4,5]
    const element = 1;
    expect(filterElement(array, element)).toEqual([1,1])
 })