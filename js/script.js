function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Script to add sticky effect to profile image on scroll
window.onscroll = function() {
    var profileImage = document.getElementById("profileImage");
    if (window.scrollY > 50) {
        profileImage.classList.add("sticky");
    } else {
        profileImage.classList.remove("sticky");
    }
};