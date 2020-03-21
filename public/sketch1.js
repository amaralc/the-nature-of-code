/**
 *
 * Perlin noise and noise() vs. random()
 *
 * This sketch draws a circle that moves in two directions according to noise()
 * function values.
 *
 * Reference: https://www.youtube.com/watch?v=YcdldZ1E9gU&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=4
 *
 */

var xoff = 0;
var yoff = 1000;
var doff = 2000;

function setup() {
  createCanvas(innerWidth,innerHeight);
  noiseSeed(100);
}

function draw() {
  ellipse(
    map(noise(xoff), 0, 1, 0, width),
    map(noise(yoff),0,1,0,height),
    map(noise(doff),0,1,20,50),
    map(noise(doff),0,1,20,50)
  );
  xoff += 0.005;
  yoff += 0.005;
  doff += 0.01;
}

