// const density = 'Ñ@#W$9876543210?!abc;:+=-,._ '; //add more spaces build the image in a better definition,
const density = '        .:-i|=+%O#@';
// let lula;
let video;
let asciiDiv;
// function preload() {
//   lula = loadImage('/Lula_meme-48.png');
// }

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(48, 48);
  asciiDiv = createDiv();
}


  function draw() {
  // background(0);
  // image(lula, 0, 0, width, height);
  // let w = width / lula.width;
  // let h = height / lula.height;
  video.loadPixels(); 
  let asciiImage = '';

  // i = column, j = row
  //flip the loop that run to all matrix in horizontal trajectory or row by row
  for(let j = 0; j < video.height; j++) {
    // let row = ''; //acummulate all the characters into a string for each row
    for(let i = 0; i < video.width; i++){

      // formula to say column plus row * the width * 4 
      //  --> gives the red value for any given column and row pixel
      const pixelIndex = (i+j * video.width)*4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2 ];
      //to convert image to grayscale
      const avg = (r + g + b)/ 3;
      //from zero to length of the density
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0)); //brightness value

      const c = density.charAt(charIndex);
      if(c == ' ') asciiImage += '&nbps;';
      else asciiImage += c;
    }
    asciiImage += '<br/>';
    // createDiv(asciiImage);
    // console.log(row);
  }
  asciiDiv.html(asciiImage);
}
