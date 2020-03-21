/**
 *
 * I.5: 2D Noise
 *
 * Reference: https://www.youtube.com/watch?v=ikwNrFvnL3g&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&t=163s
 *
 */

var dt = 0.01;

function setup() {
  pixelDensity(1);
  frameRate(30);
  createCanvas(100,100);
}

function draw() {

  loadPixels();
  var yoff = 0;
  for (y = 0; y < height; y++){
    var xoff = 0;
    for (x = 0; x < width; x++){
      var i = (x + y*width)*4;
      var r = noise(xoff,yoff)*255;
      pixels[i+0] = r;
      pixels[i+1] = r;
      pixels[i+2] = r;
      pixels[i+3] = 255;
      xoff += dt;
    }
    yoff += dt;
  }
  // start += dt;
  updatePixels();
  //noLoop();
}

