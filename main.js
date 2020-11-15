if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

$(document).ready(function () {
  $(".num").click(function () {
    var num = $(this);
    var text = $.trim(
      num.find(".txt").clone().children().remove().end().text()
    );
    var telNumber = $("#telNumber");
    $(telNumber).val(telNumber.val() + text);
  });

  $(".tel").attr("readonly");
});

function myFunction() {
  var api = "https://wa.me/234";
  var x = document.getElementById("test").elements[0].value;
  var what = api.concat(x);
  window.location.href = what;
  //document.getElementById("root").innerHTML = what;
}

function myCall() {
  var call = "tel:";
  var x = document.getElementById("test").elements[0].value;
  var caller = call.concat(x);
  window.open(caller);
  //document.getElementById("root").innerHTML = what;
}
