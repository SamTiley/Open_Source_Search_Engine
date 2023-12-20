document.writeln("<div id=ad_1></div>")
document.writeln("<div id=ad_2></div>")
document.writeln("<div id=ad_3></div>")
document.writeln("<div id=ad_4></div>")
window.onload = function() {
    setTimeout(function() {
        var ad = document.querySelector("ins.adsbygoogle");
		var modal = document.getElementById("myModal");

        if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {
  			modal.style.display = "block";
        }

    }, 2000);
};
document.writeln("<div class=modal id=myModal><div class=modal-content><div class=modal-header>It looks like you are using an ad blocker!</div><div class=modal-body><p>To continue reading you need to turnoff adblocker and refresh the page</p></div></div></div>")