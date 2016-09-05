var numbers = [ 10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
"----"
numbers.reduce(function (sum, number) {
  return sum + number;
}, 0)

// ------------------------------------------------//

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);
  return previous;
}, []);
// ------------------------------------------------//

function balancedParens(string) {
  return string.split("").reduce(function(previous, char){
		if ( previous < 0 ) { return previous};
    if ( char === "(" ) { ++previous; }
    if ( char === ")" ) { --previous; }
    return previous
  }, 0);
}
balancedParens("()");
// ------------------------------------------------//

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(function(previous, ReducedElement){
    if(findNumberInArray(previous,ReducedElement)) { previous.push(ReducedElement) };
    return previous;
  }, []);
}

function findNumberInArray(array, number){
	return !array.find(function(element){
		return element === number;
	});
}
findNumberInArray(numbers, 5);
unique(numbers);
