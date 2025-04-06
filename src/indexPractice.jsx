function extractKeysAndValues(obj, result = {}) {
    function extractValue(subobj){
  for (const key in subobj) {
    
    if (typeof subobj[key] === "object" && subobj[key] !== null) {
      extractValue(subobj[key]);
    } else {
      result[key] = subobj[key];
    }
  }
    }
   extractValue(obj) 
  return result;
}

// Example object
const person = {
  name: "Alice",
  contact: {
    email: "alice@example.com",
    phone: "123-456-7890"
  }
};

console.log(extractKeysAndValues(person));

