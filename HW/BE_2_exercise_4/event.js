class UserEventEmitter {
    constructor() {
      this.listeners = {
        userLoggedIn: [],
        userLoggedOut: [],
      };
    }
  
    on(event, listener) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }
  
    emit(event, data) {
      if (!this.listeners[event]) return;
      this.listeners[event].forEach((listener) => listener(data));
    }
  }
  
  module.exports = UserEventEmitter;
  