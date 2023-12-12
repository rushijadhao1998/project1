const showPopupButton = document.getElementById("show-popup");
const closePopupButton = document.getElementById("close-popup");
const popup = document.getElementById("popup");

showPopupButton.addEventListener("click", function () {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
});

// Close the popup if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});



const showPopup2Button = document.getElementById("show-popup2");
const closePopup2Button = document.getElementById("close-popup2");
const popup2 = document.getElementById("popup2");

showPopup2Button.addEventListener("click", function () {
    popup2.style.display = "block";
});

closePopup2Button.addEventListener("click", function () {
    popup2.style.display = "none";
});

// Close the popup if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup2.style.display = "none";
    }
});



// Add event listeners to handle the click event on the "Sign Up" link
document.getElementById("showSignUp").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default behavior of the anchor tag

    // Hide the sign-in modal
    document.querySelector(".popup2").style.display = "none";
    // Display the sign-up modal
    document.querySelector(".popup").style.display = "block";
});



const showdltButton = document.getElementById("btn-trash");
const noButton = document.getElementById("btn-no");
const dltcontain = document.getElementById("dlt-contain");

showdltButton.addEventListener("click", function () {
    dltcontain.style.display = "block";
});

noButton.addEventListener("click", function () {
    dltcontain.style.display = "none";
});

// Close the popup if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        dltcontain.style.display = "none";
    }
});