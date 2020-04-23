function add(a, b){
    return a + b;
}

//consider the above function which returns the new value of a + b
//how could we apple currying to this type of problem, and what IS currying exactly?
//Essentially, currying allows us to take a function that receives N number of arguments 
//and turn it into only 1 argument

//SO, let's take the above function and rewrite it using currying

function add(a){
    return function(b){
        return a + b;
    };
}

add(1)(5) //this is the same as add(1, 5) from the very top of this file

//now let's keep it going and rewrite as an arrow function
const add2 = a => b => a + b;