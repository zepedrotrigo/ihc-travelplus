function focusColor(id)
{
    var val = undefined;
    var el = document.getElementById("focusLayer");

    if (id == "fa-home") {
        val = "0.5vh";
    }
    else if (id == "fa-search") {
        val = "7.3vh";
    }
    else if (id == "fa-plane") {
        val = "14.3vh";
    }
    else {
        val = "21.5vh";
    }

    el.style.left = val;
}