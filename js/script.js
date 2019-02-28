console.log("hoi")

var image = document.getElementById("gezinfoto");

image.addEventListener("mouseenter", function( event ) {
   image.src = "images/Gezin1.jpg"
});

image.addEventListener("mouseleave", function( event ) {
   image.src = "images/Gezin.jpg"
});
