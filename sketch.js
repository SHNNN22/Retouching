/*
var img = [];
var index = 0;
var width = 500;
function preload(){

  img[0] = loadImage("pics/pic0.jpg");
	img[1] = loadImage("pics/pic1.jpg");
	img[2] = loadImage("pics/pic2.jpg");
	img[3] = loadImage("pics/pic3.jpg");
	img[4] = loadImage("pics/pic4.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  image(img[index],0,0);
}
function windowResized() {
   resizeCanvas(windowWidth, windowHeight);
}

function mouseReleased(){

    //ONLY if click registered inside image
    if(mouseX>width/2){
          index = index + 1;
          if (index == img.length){
              index = index - img.length;
          }
    } else if(index>0){
			index = index - 1;
			if (index == img.length){
					index = index - img.length;
			}
		}
}

function mouseHover(){

    //ONLY if click registered inside image
    if(mouseX>width && mouseY>height){
			image(img[index+1],50,50,width,windowHeight);
}
}
*/

var moon = [],       //image
    moonCopy = [],        //resized image of the image (visible)
    imageRatio;     //ratio of the image h/w

		var index = 0;
var canvas
let ori = []
function preload() {
	moon[0]=loadImage("pics/pic0.jpg", img => moonCopy[0] = img.get());
	moon[1]=loadImage("pics/pic1.jpg", img => moonCopy[1] = img.get());
	moon[2]=loadImage("pics/pic2.jpg", img => moonCopy[2] = img.get());
	moon[3]=loadImage("pics/pic3.jpg", img => moonCopy[3] = img.get());
  moon[4]=loadImage("pics/pic4.jpg", img => moonCopy[4] = img.get());
  moon[5]=loadImage("pics/pic5.jpg", img => moonCopy[5] = img.get());
  moon[6]=loadImage("pics/pic6.jpg", img => moonCopy[6] = img.get());
  moon[7]=loadImage("pics/pic7.jpg", img => moonCopy[7] = img.get());
  moon[8]=loadImage("pics/pic8.jpg", img => moonCopy[8] = img.get());
  moon[9]=loadImage("pics/pic9.jpg", img => moonCopy[9] = img.get());
		//img[0] = loadImage("pics/pic0.jpg");
		ori[0]=loadImage("pics/pic0ori.jpg")
		ori[1]=loadImage("pics/pic1ori.jpg")
		ori[2]=loadImage("pics/pic2ori.jpg")
		ori[3]=loadImage("pics/pic3ori.jpg")
		ori[4]=loadImage("pics/pic4ori.jpg")
    ori[5]=loadImage("pics/pic5ori.jpg")
    ori[6]=loadImage("pics/pic6ori.jpg")
    ori[7]=loadImage("pics/pic7ori.jpg")
    ori[8]=loadImage("pics/pic8ori.jpg")
    ori[9]=loadImage("pics/pic9ori.jpg")
}

function setup()   {
    canvas = createCanvas(windowWidth, windowHeight);

}

function draw() {
    background(255);
    if(width<height){
    imageRatio = moon[index].width/moon[index].height;
    } else {
    imageRatio = moon[index].height/moon[index].width;
    }
      image(moonCopy[index],width/2 - (windowHeight/imageRatio)/2,0,windowHeight/imageRatio, windowHeight);

      if(mouseX>width/2 - (windowHeight/imageRatio)/2 && mouseX<width/2 + (windowHeight/imageRatio)/2) {
        hover()
      }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    print("resizing to: "+windowWidth+" "+windowHeight);
    if (windowHeight < moon[index].height){
        moonCopy[index] = moon[index].get();
        moonCopy[index].resize(0, windowHeight);
    }
}

function mouseReleased(){

    //ONLY if click registered inside image
    if(mouseX>width/2 + (windowHeight/imageRatio)/2){
          index = index + 1;
          if (index == moon.length){
              index = index - moon.length;
          }
    } else if(index>0 && mouseX<width/2 - (windowHeight/imageRatio)/2){
			index = index - 1;
			if (index == moon.length){
					index = index - moon.length;
			}
		}
}

function hover() {
		image(ori[index],width/2 - (windowHeight/imageRatio)/2,0,windowHeight/imageRatio, windowHeight);

}
