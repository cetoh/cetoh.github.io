var myImage = document.getElementById("profile");

myImage.onclick = function pictureChange() {
    if(myImage.getAttribute('src') == "https://cetoh.github.io/images/Senior-55.jpg") {
      	myImage.src = "https://cetoh.github.io/images/Senior-115.jpg";
    } else {
      	myImage.src = "https://cetoh.github.io/images/Senior-55.jpg";
    }
}