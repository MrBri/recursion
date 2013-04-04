// fixme
var getElementsByClassName = function(className){
  var newArray = [];
  var nodeArray = document.body.childNodes;
  for (var i = 0; i < nodeArray.length; i++) {
    // console.log(nodeArray[i]);
    if ( nodeArray[i].classList ){
      if (nodeArray[i].classList.contains(className)) {
        newArray.push(nodeArray[i]);
      }
    }
  }
  return newArray;
};