// Case Base
const add = function (a, b) {
  return a + b
}

const add = (a, b) => {
  a + b
}

add(1,2)

// Very refactored, not recomended for all of the cases
const add = (a, b) => a + b

const newSum = add(1,2)

newSum


// Advance case

 const double = (number) => 2 * number

 double(8)

 const double = (number => 2 * number)


// Complex example
const numbers = [1,2,3]

numbers.map(function(number){
  return 2 * number
})

numbers.map(number => 2 * number)
