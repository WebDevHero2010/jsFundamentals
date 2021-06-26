/*
    - CHALLENGE #4
        - Create an object literal called library.
        - the library object will contain 3 properties: name, address, sections
        - name and address will both hold values that are strings. You can 
        fabricate the information.
        - sections will be an object that will store a property 
        called collections, which is an array of more objects. 
        You should include at least 2 objects inside the collections array.
        - the objects stored in the collections array will hold properties 
        of classification, count, and aisle. 
        - both the classification and aisle properties should hold strings 
        as values, and count should hold a value that is a number.
*/

let library = {
    name: "Marcus",
    address: "Nightmare on CodeStreet",
    sections: {collections: [{classification: "Fantasy", aisle: "A", count: 123}, {classification: "Horror", aisle: "C", count: 456}]}
}

console.log(library.sections.collections[0].aisle);