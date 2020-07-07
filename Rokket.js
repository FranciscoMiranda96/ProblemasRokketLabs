// 1. Composite Function --------------------------

var rokket = x => y => z => x*y*z;

// Testing 1

console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16

// 2. Longest string --------------------------

var rokket = list => {
    var num = 0;
    var result = '';
    for(var element in list){
        if(list[element].length >= num){
            num = list[element].length;
            result = list[element];
        };
    };
    return result;
};
// Testing 2

const list = ['best', 'company', 'ever'];

console.log(rokket(list)) // this outputs 'company'

// 3. String repetition --------------------------

var rokket = (word, num) => {
    var result = '';
    while (num>0){
        result = result + word;
        num--;
    };
    return result;
};

// Testing 3

console.log(rokket('node', 5)) // this outputs 'nodenodenodenodenode'
console.log(rokket('abc', 2)) // this outputs 'abcabc'

// 4. Only last names

var rokket = contacts => {
    var result = [];
    for(var i in contacts){
        result.push(contacts[i].lastName);
    };
    return result;
};

// Testing 4

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
    ];
console.log(rokket(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']

// 5. Unique numbers

var rokket = (l1, l2) => {
    const fl = l1.concat(l2);
    return Array.from(new Set(fl));
}

// Testing 5

console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]