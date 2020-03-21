/**
 *
 * Graphing 1D Perlin Noise
 *
 * Reference: https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&t=185s
 *
 */

var start = 0;
var dt = 0.01;

function setup() {
  pixelDensity(1);
  frameRate(30);
  createCanvas(innerWidth,innerHeight);
  background(0);
  noiseSeed(100);
  noiseDetail(4, 0.5);
}

function draw() {

  background(0);
  noFill();
  beginShape();
  var xoff = start;

  for (x = 0; x < width; x++){
    stroke(200);
    var y = noise(xoff)*height;
    vertex(x,y);
    xoff += dt;
  }

  endShape();
  //noLoop();

  start += dt;
}

