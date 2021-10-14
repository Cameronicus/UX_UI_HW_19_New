function closeN() {
document.getElementById("sideNav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

function openN() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  $("#contModal").click(function(event) {
    event.preventDefault();
    this.blur();
    $.get(this.button, function(html) {
       $(button).appendTo("body").modal();
    });
  });

  