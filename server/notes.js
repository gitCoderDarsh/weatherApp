// so if i write async keyword before a function
// then that fucntion is converted into an asynchronous function

// so as per the above example
// when the execution reaches this line 
// const response = await fetch('https://api.example.com/data');

// it will start executing response, meaning it is fetching information from the api 
// and until either the information is recieved by the server or not 
// the next line wont execute

// now in either case it has to return some value, if success, it will return the data else if the server doesnt get the data then the async function will return an error

// in either case something is returned and this is the concept of promise 

// if error occurs then we can see what error has occured

// and this async functions somewhat runs parallelly to the main flow