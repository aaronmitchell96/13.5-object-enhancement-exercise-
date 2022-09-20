//1
function createInstructor(firstName, lastName){
    return{
        firstName,
        lastName
    }
}

//2
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt",
    [favoriteNumber] : "That is my favorite!"
}

//3
var instructor  = {
    firstName: "Colt",
    sayHi(){
        return "Hi";
    },
    sayBye(){
        return this.firstName + " Says bye!";
    }
}

//4
function animal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}