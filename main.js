function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

  
}
function draw(){
    image(video, 0, 0, 640, 480);

    fill(0, 128, 0);
  stroke(0, 128, 0);
    circle(37, 37,70);

    fill(0, 128, 0);
    stroke(0, 128, 0);
      circle(604, 37,70);

      fill(0, 128, 0);
      stroke(0, 128, 0);
        circle(37, 440,70);

        fill(0, 128, 0);
        stroke(0, 128, 0);
          circle(604, 440,70);
}
function take_snapshot(){
    save('student_name.png');
}
