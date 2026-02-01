var f = document.getElementById("filter");
var e1 = document.getElementById("e1");
var e2 = document.getElementById("e2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
f.onchange = function () {
    e1.style.display = "block";
    e2.style.display = "block";
    c1.style.display = "block";
    c2.style.display = "block";
    if (f.value == "electronics") {
        c1.style.display = "none";
        c2.style.display = "none";
    }
    if (f.value == "clothing") {
        e1.style.display = "none";
        e2.style.display = "none";
    }
};
f.onchange();