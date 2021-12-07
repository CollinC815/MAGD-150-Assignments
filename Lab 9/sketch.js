//links to media used
//https://www.pexels.com/video/video-of-a-clownfish-and-sea-anemone-8856785/

//https://www.bensound.com/royalty-free-music/track/happy-rock






var song;
var video;
var slider;

function preload(){
  song = loadSound('rock.mp3'); 
  video = createVideo('ocean.mp4'); //preloading the song and video
  video.hide();
//hiding the video so it doesn't play when it opens
}

function setup() {
  createCanvas(400, 400);
  background('#8F6D40');
  song.play();
  slider = createSlider(-1,1,0,0.01);
  slider.size(50);
  slider.position(108, 320);
  //creation of the slider and position
}

function draw() {
  song.pan(slider.value());
  fill("#a8b0b2");
  rect(50,60,94,164);
  image(video, 52,62, 90,160);
  rect(300,200,60,90);
  rect(260,100,50,50);
  rect(90,300,90,60);
  
}

function mousePressed() {
  //mouse function of the video
  video.loop();
}



