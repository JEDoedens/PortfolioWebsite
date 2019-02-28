console.log("hoi")

var image = document.getElementById("gezinfoto");

image.addEventListener("mouseenter", function( event ) {
   image.src = "images/Gezin1.JPG"
});

image.addEventListener("mouseleave", function( event ) {
   image.src = "images/Gezin.JPG"
});
