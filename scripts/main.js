var myImage = document.getElementById("profile");

myImage.onclick = function pictureChange() {
    if(myImage.getAttribute('src') == "images/Senior-55.jpg") {
      	myImage.src = "images/Senior-115.jpg";
    } else {
      	myImage.src = "images/Senior-55.jpg";
    }
}