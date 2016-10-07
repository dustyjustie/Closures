// var loadedDie = (function () {
//   var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
//   for(var i = 0; i < list.length; i++)
//     var diceValue = list[i+i]
//   return diceValue
// });

// console.log(loadedDie());  // 5
// console.log(loadedDie());  // 4
// console.log(loadedDie());  // 6

var loadedDie = (function makeDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;

  return function innerLoadedDie() {
    // console.log('Throwing die ' + name)
    var item = list[i++];
    if(i >= list.length)
    {
      i = 0;
    }
    return item;
    // for(var i = 0; i < list.length; i++)
    // list += 1;
    // return list
  }
})();

console.log(loadedDie());
console.log(loadedDie());
console.log(loadedDie());
