if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  };




//                              ADD


function newEle() {
var input = document.getElementById("input").value;

if (input.length == 0){
    alert("PLease Enter Value");
    return;
}
var set = document.getElementById("ul");
var newEle = document.createElement("li");
var newEle1 = document.createTextNode(input);
newEle.appendChild(newEle1);
set.appendChild(newEle);
};


function delEle() {
    
    var del = document.getElementById("ul");
    var dele =  del.lastChild;
    del.removeChild(dele);
   
}