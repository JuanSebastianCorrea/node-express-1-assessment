### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  
  Async callbacks, then() and catch(), async/await


- What is a Promise?
  
  It is a JavaScript object that represents a pending values that will be resolved or rejected.


- What are the differences between an async function and a regular function?

  Regular functions are synchronous operations that block the next operations until they are completed, while asynchronous functions happen outside of the regular program flow.
  Regular functions are executed in the order that they appear in the callstack, while async functions are "handed off" to the browser until they have a value, once they have a value they are placed in the callback queue. The callback queue waits until the callstack has completed all other tasks, then the callback queue function gets passed to the callstack and is completed.


- What is the difference between Node.js and Express.js?
- 
  Express is a framework built on top of Node.js. While Node is a JavaScript environment that runs server side in general, Express is specifically used to make webservers.


- What is the error-first callback pattern?

  It is a common pattern in Node in which callback functions expect an error as the first parameter. If something goes wrong, the error parameter will have the information on that error. So we have to first check inside our callback if there is an error in order to handle it. If there are no errors, the error parameter will be null and the callback can continue with the execution of the other code.

  It is used when sending custom error messages to the global error handler middleware at the bottom of a Node app. The global error handler accepts 4 parameters. The first parameter is error. So within our routes we can try and catch and if at any point we get an error, we can create a custome error which is an instance of a predifined error class. This custom error is caught and passed to the global error handler at the bottom of our app, which is in charge of sending the custom error we threw.

- What is middleware?
  
  Middleware is code that runs in the middle of the request/response cylce. It is used to separate our code into logical groupings. It is used in our global error handler. If you insert middleware at the top of your app it will run every request/response cycle, if you put it at the bottom, it will only run if no routes are matched.


- What does the `next` function do?

  Next() is used to tell our app to move to the next matching route. When next is passed any argument it is treated as an error, which will pass the error to our global error handler. 

- What does `RETURNING` do in SQL? When would you use it?

  It is used to unconditionally and immediately terminate an SQL procedure.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  It is inefficient because we are making each request sequentially and awaiting each response.
  There is no error handling.
  It would be clearer if the order of the returned array variables matched the order in which they were requested.




```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
