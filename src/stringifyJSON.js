// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
 var stringArray = [];

 if ( typeof obj === 'function' || obj === null || obj === 'undefined') {
   return 'null';
 }

 if ( typeof obj === "number" || typeof obj === "boolean" ){
   return `${obj}`;
 }
 
 if (typeof obj === "string"){
   return `"${obj}"`;
 }

 if (Array.isArray(obj)) {
   for (var i = 0; i < obj.length; i++){
     stringArray.push(stringifyJSON(obj[i]));
   }
   return '[' + stringArray.join(',') + ']';
 }
 
 if ( typeof obj === "object"){
  for (var key in obj){
    if (key !== 'undefined' && key !== 'functions'){
    stringArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  }
}
  return '{' + stringArray.join(',') + '}'; 
 }
};

//console.log(stringifyJSON([true])); 

// '[h,e,l,l,o]'