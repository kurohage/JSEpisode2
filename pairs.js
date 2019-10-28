/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names) {
  // Your code goes here
  let final = [];
  let tmp = [];
  let i;

  if (!names || names.length == 0) return final;

  let loops = names.length;

  //console.log(`Names length: ${names.length}. Loops: ${Math.floor(loops / 2)}`);

  for (i = 0; i < Math.floor(loops / 2); i++) {
    tmp.push(names.getRandom());
    tmp.push(names.getRandom());
    final.push(tmp);
    //console.log(`Index: ${i}, Temp: ${tmp}`);
    tmp = [];
    //console.log(`Final: ${final}. Index now: ${i}`);
  }

  if (loops % 2 !== 0) {
    //console.log(`Odd number. Final item: ${names[0]}`);
    final.push(names);
  }

  return final;
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function() {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
