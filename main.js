function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;


AAA_imgTag = new Image();
AAA_imgTag.onload = uploadRover;
AAA_imgTag.src = rover_image;
}



function uploadAAA(){
    ctx.drawImage(AAA_imgTag, AAA_x, AAA_y, AAA_width, AAA_height, AAA_image = "AAA.jpg");

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.KeyCode;
    console.log(keypressed);


      if(keypressed == '38'){
          up();
          console.log("up");
      }

      if(keypressed == '40'){
          down();
        console.log("down");
    }

    if(keypressed == '37'){
          left();
        console.log("left");
    }

    if(keypressed == '39'){
          right();
        console.log("right");
    }
}

canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  AAA_width = 100; AAA_height = 90;
  
    AAA_image = "AAA.jpg";
     AAA_x = 10; AAA_y = 10;
      function add() { background_imgTag = new Image()};