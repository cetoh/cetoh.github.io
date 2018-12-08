var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images\Senior-55.jpg') {
      myImage.setAttribute ('src','images\Senior-115.jpg');
    } else {
      myImage.setAttribute ('src','images\Senior-55.jpg');
    }
}