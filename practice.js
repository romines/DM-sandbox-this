//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      var q1 = "In most cases, the 'this' keyword allows you to refer to the particular object invoking a method. This is especially useful in object prototypes.";

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      var q2 = "The 'this' keyword refers to the object doing the calling, so 1) in global functions 'this' refers to the calling object (window), 2) in chained functions, the object that precedes the dot during the function call is the calling object, so 'this' refers to that(!). 3) When 'this' appears in a constructor function it refers to the specific instance of the object created and returned when the constructor is invoked. 4) You can use the 'call' and 'apply' methods to explicitly define what 'this' points to"

  // 3) What is the difference between call and apply?

      //Answer
      var q3 = "Both take an object to invoke the function on as their first parameter, but the .call method requires comma delimited parameters to pass on after that, whereas .apply can take an array. .apply is useful when you have a variable number of parameters.";

  // 4) What does .bind do?

      //Answer
      var q4 = ".bind returns a function (does not execute it), which has the object that you would like 'this' to refer to bound do the function. Optionally, you can bind additional values to be used as additional arguments when the new function is called";


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    user = {
      username: 't.pain',
      email: 't.pain@gmail.com',
      getUsername: function(){
        return this.username;
      }
    };

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

    // user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.move = 0;
    this.moveCar = function(){
      this.move += 10;
      return this.move;
    };
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  //Code Here
  Car.prototype.getYear = getYear;


//New Problem



var user2 = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

// setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

  //Answer Here
  var answer = undefined;

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
  var nextAnswer = 'the global window object'

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
  setTimeout(getUsername.bind(user2), 5000);
