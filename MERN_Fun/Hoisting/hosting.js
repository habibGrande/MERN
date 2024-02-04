console.log(hello);                                   
var hello = 'world';                                 

// var hello : was hoisting at the top of the code then it was console.log so the output will be undefind then it was defind after the console.log


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// the function was hoisting by the js and the output will be magnet because the scope of var


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// the output will be super cool because the function wasnt called

mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// the mean was defind as a var not as a function and the call of the function was before the asgin


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// first output will be undifnd second output will be "rock" third output will be "r&b" last output will be "disco" 


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// first output will be san jose second outout will be seattle because it is on the function scope third output burbank last output is san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// first output will be { name: 'Chicago', students: 65, hiring: true }
// second output will be an error because the dojo is a constant can not be changed 


