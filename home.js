function changeColor(event) {
    console.log(event.target);
    event.target.style.color = "blue";
    event.target.style.textDecoration = "underline";
}

function underlineNav() {
    console.log("test");
    document.getElementsByClassName("nav-footer").style.textDecoration = "underline";
}

function changeColorBorder(event) {
    console.log("test")
    event.target.style.borderColor = "#c79c60";
    event.target.style.boxShadow = "5px 5px 10px #c79c60";
}

function display_nav() {
    let navBarMobile = document.getElementById('hidden-element');

    if (navBarMobile.style.display == 'none') {
        navBarMobile.style.display = 'flex';
    } else {
        navBarMobile.style.display = 'none';
    }
}