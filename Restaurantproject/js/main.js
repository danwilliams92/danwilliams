/* Make navbar sticky */

// When the user scrolls the page, execute sticky
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Add toggle to course boxes */

function toggle1(){
		var ele = document.getElementById("moreDetails1");
		var button1 = document.getElementById("coursebutton1");
		
		if(ele.style.display == "block") {

				ele.style.display = "none";
				button1.innerText = "More Details";

		}

		else {
			ele.style.display = "block";
			button1.innerText = "Hide";
		}	
} 

function toggle2(){
	var ele = document.getElementById("moreDetails2");
	var button2 = document.getElementById("coursebutton2");
	
	if(ele.style.display == "block") {

    		ele.style.display = "none";
			button2.innerText = "More Details";
  	}

	else {
		ele.style.display = "block";
		button2.innerText = "Hide";

	}

} 

function toggle3(){
	var ele = document.getElementById("moreDetails3");
	var button3 = document.getElementById("coursebutton3");

	if(ele.style.display == "block") {

    		ele.style.display = "none";
			button3.innerText = "More Details";

  	}

	else {
		ele.style.display = "block";
		button3.innerText = "Hide";
	}

} 
 

 function openCity(evt, cityName) {
    var i, tabcontent, tablinks, menucontainer;
	
	menuContainer = document.querySelector(".menucontainer");
	
	menuContainer.style.marginBottom = "0";
	
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}