var countdownGenerator = function (x) {
  var start = x;

  return function () {
    // console.log('T-minus ' + start--)
    if (start > 0)
    {
      console.log("T-minus " + start + "...")
    }
    else if (start === 0)
    {
      console.log("Blast Off!")
    }
    else
    {
      console.log("Rockets already gone, bub!")
    }
    start = start - 1 // start -= 1
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!