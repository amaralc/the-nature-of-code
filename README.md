# Lessons - The Nature of Code

In this repository you will find code, examples and experiments based on the youtube playlist [The Nature of Code 2](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM). The goal is to better understand the P5.js library as well as practice JavaScript applied to creative coding.

## I.2: Introduction - Perlin Noise and p5.js Tutorial
[Video](https://youtu.be/Qf4dIN99e2w?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&t=606)

  * Function ```random()``` and function ```noise()``` have different outcomes;
  * Function ```random()```:
    * Generates random numbers that are not related with one another;
  * Funcion ```noise()```:
    * Is a Perlin Noise function, named after Perlin, who has developed code for procedural texturing in computer graphics in the 80's;
    * Generates smooth random numbers that are related with one another;
    * The algorith define waveforms based on random values and sum these waveforms to create a final shape;
    * Each waveform is an octave apart from the other (random numbers taken with double frequency);

## I.3: noise() vs random() - Perlin Noise and p5.js Tutorial
[Video](https://www.youtube.com/watch?v=YcdldZ1E9gU&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=4)

  * Application of perlin noise;
  * Experiments with perlin noise:

    ```js
      var xoff = 0;
      var yoff = 0;
      var doff = 0;

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
        xoff += 0.007;
        yoff += 0.009;
        doff += 0.011;
      }
    ```

    * The values `xoff`, `yoff` and `doff` represent how much does the algorithm moves in perlin noise space at each iteration;
    * The bigger the `xoff` value, the more close from `random()` the values get, but with one difference: perlin noise tend to look like a gaussian distribution;



