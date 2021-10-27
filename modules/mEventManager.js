const mEventManager = {
  subscriptions: {}, 
  
  uniqueId: 0,
  
  getNextUniqueId: function(){
    return "id" + mEventManager.uniqueId++;
  },

  subscribe: function(eventType, callback) {
    const id = mEventManager.getNextUniqueId();
    
    mEventManager.subscriptions[eventType] = mEventManager.subscriptions[eventType] || {};
    mEventManager.subscriptions[eventType][id] = callback;

    return { 
      unsubscribe: function() {
        delete mEventManager.subscriptions[eventType][id];
        if(Object.keys(mEventManager.subscriptions[eventType]).length === 0) {
          delete mEventManager.subscriptions[eventType];
        }
      }
    };
  },

  publish: function(eventType, arg){
    if(mEventManager.subscriptions[eventType]){
      Object.keys(mEventManager.subscriptions[eventType]).forEach(key => mEventManager.subscriptions[eventType][key](arg));      
    }
  },
  
  reset: function(){
    mEventManager.subscriptions = {};
  }
};


