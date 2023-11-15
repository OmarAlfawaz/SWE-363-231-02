const UserEventEmitter = require('./eventemitter');
const users = [
  { id: 1, name: 'Omar Alfawaz' },
  { id: 2, name: 'Ali Ahmad' },
  { id: 3, name: 'Salem Khaled' },
];

const eventEmitter = new UserEventEmitter();

setInterval(() => {
  const user = users[Math.floor(Math.random() * users.length)];
  eventEmitter.emit('userLoggedIn', user);
  setTimeout(() => {
    eventEmitter.emit('userLoggedOut', user);
  }, Math.random() * 2000 + 1000);
}, 1000);

eventEmitter.on('userLoggedIn', (user) => {
  console.log(`TIMESTAMP: USER ${user.name} logged in`);
});

eventEmitter.on('userLoggedOut', (user) => {
  console.log(`TIMESTAMP: USER ${user.name} logged out`);
});
