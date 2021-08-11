/*
Asynchronous action - An action for which the computer/compiler doesn't have to wait for completion. It can trigger it and then move ahead. 

Promise - Promises are objects through whcih, asynchronous activities are controlled/governed. 

Promise Object => Constructor method => new Promise (executorFunc) //Input to this constructor method is an executor Function.

executorFunc => is an higher order function, that takes 2 inputs. Those inputs are callback functions - resolve() & reject();

We, as a user, do not need to configure resolve & reject function anywhere in our program. It is done by Promise object itself. 

we don't play with resolve() or reject() methods, instead, we play with the promise object by doing tasks within the constructor method of Promise object and puting if/else conditions. If, anywhere in my constructor method, resolve gets triggered, then what it will do is change the status of promise object from "pending" to "settled". In "settled", it will change to fulfilled(or successful completion). Similarly with the reject() method as well. It will change to settled (rejected) status. 

Also, resolve/reject will also take an argument. Whatever that argument is, it'll be returned by the whole promise constructor method once the settled state is acheived (be it successful or not).

.then() method => every promise object has it. It'll be triggered when the promise comes to settled state. .then() is a higher order function. Takes 2 callback functions as input - often referred as (handlers) - "onFulfilled" & "onRejected". One of these will be triggered respectively based on the settled state of Promise (resolve => onFulfilled, & reject => onRejected). onFulfilled/Rejected will be called with the same argument that is returned by the Promise (resolve/reject methods inside promise constructor). onFulfilled/onRejected are optional. if any of them is not mentioned, then in that case, for that respective event, it'll do nothing and return the same argument that the promise earlier returned.  

*/ 

const executorFunc = (resolve,reject) => {
  if(someCondition) 
     resolve('Successfully completed');
  else reject('Error encountered');
}

const myPromiseObject = new Promise (executorFunc);

//handlers with .then()
const myPromise = new Promise ((resolve,reject)=>{
  const temp = Math.floor(Math.random()*10);
  if(temp< 5){
    resolve('Value is less than 5!');
  }
  else reject('Value is greater than 5!');
});

const handleSuccess = (message)=>{
  console.log('Its a success: ');
  console.log(message);
}
const handleFailure = (message) => {
  console.log('Its a failure: ');
  console.log(message);
}
myPromise.then(handleSuccess, handleFailure);



//Another example
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (message)=>{
  console.log(`Event : Success`);
  console.log(message);
}
const handleFailure = (message)=>{
  console.log('Event : Failure')
  console.log(message);
}

checkInventory(order).then(handleSuccess,handleFailure)


//Using .catch() phrase with promises
//1st method to implement the idealogy of separation of concerns - use 2 .then() operators differently. How it works? We know if one of the handlers is missed, then the promise would return the same value that is returned by the resolve/reject call back function. Hence a second .then() is used.
//Idealogy : Separtion of concerns - Better debugging, reduce redundancy & duplicacy...etc
checkInventory(order).then((resolvedValue)=>{
  console.log('Event: Success');
  console.log(resolvedValue);
}).then(null,(rejectedValue)=>{
  console.log('Event: Failure');
  console.log(rejectedValue);
});


//Method2 - Use catch(). it's equivalent to the 2nd .then() in above line of code. Except, this only takes one argument ie. callback func - onRejected.
setTimeout(()=>{
  console.log('Updating Order');
  order.push(['Caps',5]);
  checkInventory(order).then((resolvedValue)=>{
  console.log('Event: Success');
  console.log(resolvedValue);
}).catch((rejectedValue)=>{
  console.log('Event: Failure');
  console.log(rejectedValue);
});
},5000)




//Promise.all() : accepts an array of promises. If all of them resolve, Promise.all() will resolve with the resolvedValue as array of resolvedValue from all array of Promises respectively. 
//If any one of the array of Promises Fail/reject, the Promise.all() will also reject with that rejectedValue.
const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.');
const checkPants = checkAvailability('pants','Favorite Supply Co.');
const checkBags = checkAvailability('bags','Favorite Supply Co.')

Promise.all([ checkSunglasses,checkPants,checkBags]).then(onFulfill).catch(onReject);


/*
Let’s review:

    Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
    Promises can be in one of three states: pending, resolved, or rejected.
    A promise is settled if it is either resolved or rejected.
    We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
    setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
    We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
    We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
    Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
    To use promise composition correctly, we have to remember to return promises constructed within a .then().
    We should chain multiple promises rather than nesting them.
    To take advantage of concurrency, we can use Promise.all().

*/
