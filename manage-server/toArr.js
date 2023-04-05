const qs = require('Qs')

module.exports.toArr=function(original){
original=qs.parse(original)
let arr = Object.keys(original).map(key=> original[key]);
let after = arr.map(function(obj){ 
      return Object.keys(obj). // convert object to array of keys 
       reduce(function(arr, current){arr.push(obj[current]); return arr}, []); // generate a new array based on object values 
  })
  return after
}

