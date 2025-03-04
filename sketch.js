let foto
function preload() {
// put preload code here
  foto = loadImage("./images/rbd.png")
}

function setup() {
  // put setup code here
  createCanvas(800,800)
  textFont("Stencil")
  textSize(40)
  textAlign(CENTER)
  textStyle(BOLD)
  noLoop()
}

function draw() {
  background(255)
  //image(foto,0,0,800,800)
  foto.loadPixels()
  let numPixeles = foto.width * foto.height * 4
  for (let i=0; i < numPixeles; i +=4) {
    foto.pixels[i] = 255 - foto.pixels[i]
    foto.pixels[i+1] = 255 - foto.pixels[i+1]
    foto.pixels[i+2] = 255 - foto.pixels[i+2]
  }
  foto.updatePixels()
  image(foto,0,0,800,800)
  fill(255)
  text("EVIL RBD BE LIKE",width/2,30)
  //fill(0,0,255)
  text("NO ME SALVES",width/2,750)

}
