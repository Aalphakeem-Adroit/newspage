function myFunction() {
    var x = document.getElementById("navitems");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navitems").style.top = "0";
    } else {
      document.getElementById("navitems").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }

  