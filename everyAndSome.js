var computers = [
  { name: 'Apple', ram: 24},
  { name: 'Compaq', ram: 4},
  { name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(var i = 0; i < computers.length; i++){
	var computer = computers[i];

  if(computer.ram < 16){
  	allComputersCanRunProgram = false;
  } else {
  	onlySomeComputersCanRunProgram = true;
  }
}
"---"
allComputersCanRunProgram
onlySomeComputersCanRunProgram
"---"
computers.every(function(computer){
	return computer.ram > 16;
});
computers.some(function(computer){
	return computer.ram > 16;
});
//*********************************************//

var names = [
	"Alexnadria",
  "Matthew",
  "Joe"
];

names.every(function(name){
	return name.length > 4;
});


names.some(function(name){
	return name.length > 4;
});

function Field(value){
	this.value = value;
}

Field.prototype.validate = function(){
	return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("my_password");
var birthday = new Field("10/10/2010");

username.validate() && password.validate() && birthday.validate();
".."

var fields = [username, password, birthday];

var formIsValid = fields.every(function(field){
	return field.validate();
});

if(formIsValid){
	//Allow User to submit
} else {
	// Show an error message
}
