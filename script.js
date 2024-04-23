/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Sara Codes!");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect mouse enter and leave events on the button
  btn.addEventListener("mouseenter", function () {
    // Add the 'dipped' class when mouse enters the button
    btn.classList.add("dipped");
  });

  btn.addEventListener("mouseleave", function () {
    // Remove the 'dipped' class when mouse leaves the button
    btn.classList.remove("dipped");
  });
}

// Get all the butterfly images by their class name
const butterflies = document.querySelectorAll(".illustration");

// Loop through each butterfly image
butterflies.forEach(butterfly => {
  // Add mouse enter event listener to each butterfly image
  butterfly.addEventListener("mouseenter", function() {
    // Add the 'dipped' class when mouse enters the butterfly image
    butterfly.classList.add("dipped");
  });

  // Add mouse leave event listener to each butterfly image
  butterfly.addEventListener("mouseleave", function() {
    // Remove the 'dipped' class when mouse leaves the butterfly image
    butterfly.classList.remove("dipped");
  });
});


