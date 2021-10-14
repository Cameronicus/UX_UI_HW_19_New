function closeN() {
document.getElementById("sideNav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

function openN() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  // Set object for the modal
var myModal = document.getElementById("contModal");
// Set object for the button that will trigger the modal box
var myButton = document.getElementById("buttonMod");
// Set an element that will close the modal box
var exitBtn = document.getElementsByClassName("close")[0];
// Allows display of modal box, when user clicks the button
myButton.onclick = function() {
myModal.style.display = "block";
}
// Allows the user to close the modal box, when user will click on (x) button
exitBtn.onclick = function() {
myModal.style.display = "none";
}
// Allows the user to close the modal box, even when the user clicks anywhere outside of the modal box
window.onclick = function(event) {
if (event.target == myModal) {
myModal.style.display = "none";
}
}

  