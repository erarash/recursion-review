// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //split json and turn it into an array
  var result = [];
  
    if (json === 'true'){
      return true;
    } else if (json === 'false'){
      return false;
    } else if (json === 'null') {
      return null;
    } else if (isNaN(json) === false) {
      return parseInt(json);
    } 
      
if (json[0] === '[' && json.length === 2) {
return result
} else if (json [0] === '['){
    var sliced = json.slice(1, json.length-1); //'hello'
    var arr = sliced.split(','); //['hello']
      for (var i = 0; i < arr.length; i++) {
        result.push(parseJSON(arr[i]));
        
      }
      return result;
      
    }
    else {
      return json;
    }

};

console.log(parseJSON('[]'));
console.log(typeof parseJSON('[]'));


// console.log(parseJSON('[1,2,3]'));
// '[]' should return []

// arr ["[", "1", ",", "2", ",", "3", "]"]
// ["[", "]"]
