var myImage = document.getElementById("profile");

myImage.onclick = function pictureChange() {
    if(myImage.getAttribute('src') == "Senior-55.jpg") {
      	myImage.src = "Senior-115.jpg";
    } else {
      	myImage.src = "Senior-55.jpg";
    }
}