function getMessage () {
  const year = new Date().getFullYear()
  return 'The year is: ' + year
}

// With Template String
function getMessage () {
  const year = new Date().getFullYear()
  return `The year is ${year}`
}
getMessage()

function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}
