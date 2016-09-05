// Vanilla JS
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}

// forEach helper
// We are passing an anonymous function
colors.forEach(function(color){
	console.log(color)
})

//*********************************************//

var numbers = [1, 2, 3, 4, 5]

var sum = 0
// Loop over the array sum variables
numbers.forEach(function(number){
	sum += number
})
sum

function adder (number) {
	sum += number
}
numbers.forEach(adder)
//*********************************************//
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
var i;
function calculateArea(height, width){
    var area = height * width;
    return area;
}

images.forEach(function(image){
    areas.push(calculateArea(image.height, image.width));
});
