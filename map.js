// Vanilla JS

var numbers  = [1, 2, 3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++){
	doubledNumbers.push(numbers[i] * 2);
}
doubledNumbers;

// ES6
// The result is taking place inside the array doubled
var doubled = numbers.map(function(number){
	return number * 2;
});

doubled;

//*********************************************//
// Array of objects
var cars = [
  // object Car
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car){
	return car.price;
});

prices;

//*********************************************//
//var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {

    return array.map(function(element){
        return element[property];
    });
}

pluck(paints, 'color');
