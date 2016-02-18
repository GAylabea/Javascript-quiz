// Need to capture input from user
var treeHeight = document.getElementById("treeheight");
var treeCharacter = document.getElementById("treecharacter");
var button = document.getElementById("button");
// var cv = treeCharacter.value
// var hv = treeHeight.value

function getValue() {
  var cv = treeCharacter.value;
  var hv = treeHeight.value;
  checkInput(cv, hv);
}

// need to make sure the user inputs character and number
function checkInput(cv, hv) {
  if (!cv || !hv) {
    alert("please fill out all fields!"); 
  } else {
    buildObj(cv, hv);
  }
}

function buildObj (cv, hv) {
  var treeObj = {
    C: cv,
    H: hv
  }
  growTree(treeObj)
} 

// function determineTreeHeight (clickEvent){
//   var treeHeight = getElementById('treeheight').value
// }

function growTree (obj) {
  var h = obj.H; 
  for (var i = 0; i <= h; i++) {
    var spaces = (h - 1) -i; 
    var numChar = 2*i+1;
    console.log(" ".repeat(spaces) + obj.C.repeat(numChar));
    }
}

button.addEventListener("click", getValue); 

// need to do an eventlisteners for an enter key 

