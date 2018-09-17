// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// var htmlStrings = [
//   '<div class="targetClassName"></div>',
//   '<div class="otherClassName targetClassName"></div>',
//   '<div><div class="targetClassName"></div></div>',
//   '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
//   '<div><div></div><div><div class="targetClassName"></div></div></div>',
//   '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
//   '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
// ];

var getElementsByClassName = function(className) {
  var result =  [];
  
  var findClassName = function(node) {
   if (node.className && node.classList.contains(className)) {
     result.push(node); 
   }
   
   if (node.childNodes) {
     for (var item of node.childNodes) {
       findClassName(item);      
     }
   }
  }
  findClassName(document.body);
  return result;
 //console.log(result), why doesn't it print anything?
};

