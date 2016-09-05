var users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' }
];

var user;

for( var i = 0; i < users.length; i++){
	if(users[i].name === 'Alex'){
  	user = users[i];
    break;
  }
}


users.find(function(user){
	return user.name === 'Jill';
})
//*********************************************//

function Car(model){
	this.model = model;
}

var cars = [
	new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car){
	return car.model === 'Focus';
});

var posts = [
  { id:1, title: 'New Post'},
  { id:2, title: 'Old Post'},
]
//*********************************************//
var comment = { postId:1, content: 'Great Post'};

function postForComment(posts, comment){
	return posts.find(function(post){
  	return post.id === comment.postId;
  })
}

postForComment(posts, comment);

//*********************************************//
function findWhere(array, criteria) {

  property = Object.keys(criteria)[0];

  return array.find(function(element){
      return element[property] === criteria[property];
  });
}

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }
