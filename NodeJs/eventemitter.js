const EventEmitter = require('events');

class UserEventEmitter extends EventEmitter {
  constructor() {
    super();
  }

  onUserLoggedIn(user) {
    console.log(`TIMESTAMP: USER_${user.id} logged in`);
  }

  onUserLoggedOut(user) {
    console.log(`TIMESTAMP: USER_${user.id} logged out`);
  }
}

module.exports = UserEventEmitter;
