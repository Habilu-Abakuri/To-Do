// create a close button and append to each list
let myNodeList = document.getElementsByTagName("li");

for (let i = 0; i < myNodeList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

//hide list when clicked
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//create a new list item when clicking on Add task button
let task = document.getElementById("addTask");

task.addEventListener("click", () => {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var txt = document.createTextNode(inputValue);
    li.appendChild(txt);

    if (inputValue === ''){
        alert("type something motherfucker");
    }
    else {
        document.getElementById("listItems").appendChild(li);
    }
    document.getElementById("input").value = "";


    var span = document.createElement("SPAN");
    var t = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(t);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++){
        close[i].onclick = function (){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
})