// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to remove the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.remove();
    
  }
}

// Add a "checked" symbol when clicking on a list item
// Move completed items to 'completed' container

const completedBox = document.querySelector('#completedItems');
const list = document.querySelector('#myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  completedBox.appendChild(ev.target);
  showAlert('Task Completed!', 'success');

  }
}, false);

completedBox.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI'){
    ev.target.classList.toggle('checked');
    list.appendChild(ev.target);

  }

}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    showAlert('Please give a task to complete', 'warning');
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

 function showAlert(message, className){
  //create div
  const div = document.createElement('div');
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.header');
  const form = document.querySelector('.title');
  //insert alert
  container.insertBefore(div, form);

  //alert timeout
  setTimeout(function(){
      document.querySelector('.alert').remove();
  }, 2000);
}

