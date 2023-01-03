let imageRatio, //ratio of the image h/w
  index = 0,
  canvas,
  moon = [], //image
  moonCopy = [], //resized image of the image (visible)
  moonOri = [],
  allPics = 0;

function preload() {
  if (document.title == "Beauty") {
    allPics = 10;
  } else if (document.title == "Stills") {
    allPics = 10;
  } else if (document.title == "Add") {
    allPics = 12;
  } else if (document.title == "Remove") {
    allPics = 13;
  } else if (document.title == "Background") {
    allPics = 8;
  } else if (document.title == "Set") {
    allPics = 10;
  } else if (document.title == "Reflections") {
    allPics = 6;
  } else if (document.title == "Wrinkles") {
    allPics = 9;
  } else if (document.title == "Adjustments") {
    allPics = 14;
  } else if (document.title == "Color Correction") {
    allPics = 10;
  } else if (document.title == "Color Change") {
    allPics = 13;
  } else if (document.title == "Sharpen") {
    allPics = 6;
  } else if (document.title == "Selections") {
    allPics = 4;
  } else if (document.title == "Themed") {
    allPics = 8;
  } else if (document.title == "Kids") {
    allPics = 9;
  } else if (document.title == "Jewellery") {
    allPics = 4;
  }
  for (let i = 0; i < allPics; i++) {
    moon[i] = loadImage(
      `pics/${document.title}/pic${i}.jpg`,
      (img) => (moonCopy[i] = img.get())
    );
    moonOri[i] = loadImage(`pics/${document.title}/pic${i}ori.jpg`);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  document.getElementById("page").innerText = index + 1 + " /" + allPics;

  if (width < height) {
    imageRatio = moon[index].width / moon[index].height;
  } else {
    imageRatio = moon[index].height / moon[index].width;
  }

  image(
    moonCopy[index],
    width / 2 - windowHeight / imageRatio / 2,
    0,
    windowHeight / imageRatio,
    windowHeight
  );

  if (
    mouseX > width / 2 - windowHeight / imageRatio / 2 &&
    mouseX < width / 2 + windowHeight / imageRatio / 2
  ) {
    hover();
  }

  if (mouseX > windowWidth / 2 + windowHeight / imageRatio / 2) {
    cursor("/pics/LAYOUT/RIGHT.png");
  } else if (
    index > 0 &&
    mouseX < windowWidth / 2 - windowHeight / imageRatio / 2
  ) {
    cursor("/pics/LAYOUT/LEFT.png");
  } else {
    cursor(ARROW);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // print("resizing to: "+windowWidth+" "+windowHeight);
  if (windowHeight < moon[index].height) {
    moonCopy[index] = moon[index].get();
    moonCopy[index].resize(0, windowHeight);
  }
}

function mouseReleased() {
  //ONLY if click registered inside image
  if (mouseX > width / 2 + windowHeight / imageRatio / 2) {
    index = index + 1;
    if (index == moon.length) {
      index = index - moon.length;
    }
  } else if (index > 0 && mouseX < width / 2 - windowHeight / imageRatio / 2) {
    index = index - 1;
    if (index == moon.length) {
      index = index - moon.length;
    }
  }
}

function keyPressed() {
  if (index > 0 && keyCode === LEFT_ARROW) {
    index = index - 1;
    if (index == moon.length) {
      index = index - moon.length;
    }
  } else if (keyCode === RIGHT_ARROW) {
    index = index + 1;
    if (index == moon.length) {
      index = index - moon.length;
    }
  }
}

function hover() {
  image(
    moonOri[index],
    width / 2 - windowHeight / imageRatio / 2,
    0,
    windowHeight / imageRatio,
    windowHeight
  );
}
