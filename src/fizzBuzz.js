//defines an object called FizzBuzz
function FizzBuzz() {
}
//associated method play which takes an arguement of number
FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'Buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}

//A method which will check to see if it is divsible by x
FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  //specifically states that the number should be divided by the divisor
  return number % divisor === 0;
}
//POP THIS IN THE CONSOLE
var fizzBuzz = new FizzBuzz();
//for fizzBuzz starting at 1 until it reaches 100, +1
for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
