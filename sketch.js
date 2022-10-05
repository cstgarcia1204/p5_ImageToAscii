const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
let lula;  
function preload() {
  lula = loadImage('/Lula_meme.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  image(lula, 0, 0, width, height);
  let w = width / lula.width;
  let h = height / lula.height;
  lula.loadPixels(); 

  // i = column, j = row
  for(let i = 0; i < lula.width; i++) {
    for(let j = 0; j < lula.height; j++){

      // formula to say column plus row * the width * 4 
      //  --> gives the red value for any given column and row pixel
      const pixelIndex = (i+j * lula.width)*4;
      const r = lula.pixels[pixelIndex + 0];
      const g = lula.pixels[pixelIndex + 1];
      const b = lula.pixels[pixelIndex + 2 ];
      //to convert image to grayscale
      const avg = (r + g + b)/ 3;

      noStroke();
      fill(255);
      // square(i * w, j * h, w);

      //from zero to length of the density
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0)); //brightness value

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);


    }   
  }
}
