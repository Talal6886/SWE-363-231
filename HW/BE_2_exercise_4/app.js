const UserEventEmitter = require('./events');
const faker = require('faker'); 

const emitter = new UserEventEmitter();

emitter.on('userLoggedIn', (username) => {
  console.log(`${new Date().toISOString()}: ${username} logged in`);
});

emitter.on('userLoggedOut', (username) => {
  console.log(`${new Date().toISOString()}: ${username} logged out`);
});

function simulateUserLogin() {
  const username = faker.name.firstName();
  const delay = Math.random() * 2 + 0.1; 
  setTimeout(() => emitter.emit('userLoggedIn', username), delay * 1000);
}

setInterval(simulateUserLogin, 3000); 


[...Array(Math.floor(Math.random() * 5))].forEach(() => simulateUserLogin());

console.log('Running user login simulation... Ctrl+C to stop');
