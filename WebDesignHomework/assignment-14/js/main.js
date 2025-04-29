function copyImageToCanvas() {
    var image = document.querySelector("img");
    var canvas = document.querySelector("canvas");

    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0); 
}