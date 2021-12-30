let open = false
function getNavbar() {
    navbar = document.getElementById("nav-main")
    switch(open) {
        case false:
            navbar.classList.add("active")
            open = true;
            break;
        case true:
            navbar.classList.remove("active")
            open = false;
            break;
    }
}

