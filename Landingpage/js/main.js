
var modal = document.querySelector("#modal");
    var trigger = document.querySelector("#booking-button");
    var closeButton = document.querySelector("#close");

    function openModal() {
        modal.style.display = "block";
    }

	function closeModal(){
		modal.style.display = "none";
	}
	
	
    function windowOnClick(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    trigger.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", windowOnClick);
	
	/* jQuery link scroll effect */
