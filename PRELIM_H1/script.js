// Function to show and animate more info
function showMoreInfo() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        setTimeout(function() {
            moreInfo.classList.add("show");
        }, 10); // Adding slight delay for the animation to take effect
    } else {
        moreInfo.classList.remove("show");
        setTimeout(function() {
            moreInfo.style.display = "none";
        }, 500); // Hide after animation
    }
}
