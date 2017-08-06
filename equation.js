/* MoMath Math Square Behavior
 *
 *        Title: Protect the King
 *  Description: Users defend the "King" by blocking approaching waves
 * Scheduler ID: 
 *    Framework: P5
 *       Author: Sebastien Siclait <siclait@momath.org>
 *      Created: 2017-06
 *       Status: works / in dev
 */

import P5Behavior from 'p5beh';

const pb = new P5Behavior();
var x,y;
var direction = 1;
var collision = true;
var top, bottom, left, right;
var gameOver;
var gameOverImage;
var gameOverCounter = 0;
var lifeImage, lifeImage_small, lifeImage_rect1, lifeImage_rect2, outline, asq, bsq, prodab, plus, sum, twoab, equ, sumsq, drop;
var lives = 3;
var inOutlinesq1 = false, inOutlinesq2 = false, inOutlinerect1 = false, inOutlinerect2 = false;
var sq1x = 20;
var sq1y = 50;

var sq2x = 60;
var sq2y = 350;

var rect1x = 420;
var rect1y = 100;

var rect2x = 20;
var rect2y = 200;

var sq1flag = false;
var sq2flag = false;
var rect1flag = false;
var rect2flag = false;
pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...  
  // gameOverImage = this.loadImage('images/youLose.png')
}

pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...\
  outline = this.loadImage('images/outline.png')
  lifeImage = this.loadImage('images/a^2.png');
  lifeImage_small = this.loadImage('images/b^2.png');
  lifeImage_rect1 = this.loadImage('images/ab.png');
  lifeImage_rect2 = this.loadImage('images/box-rect2.png');
  asq = this.loadImage('images/asq.png');
  bsq = this.loadImage('images/bsq.png');
  prodab = this.loadImage('images/prod');
  plus = this.loadImage('images/plus.png');
  sum = this.loadImage('images/sum.png');
  twoab = this.loadImage('images/twoab.png');
  equ = this.loadImage('images/equals.png');
  sumsq = this.loadImage('images/sumsq.png');
  drop = this.loadImage('images/drop.png');
  gameOverImage = this.loadImage('images/youLose.png');
}

pb.draw = function (floor, p) {
  /* this == pb.p5 == p */
  // draw here...\



  this.clear();

  // Chooses direction of next attack
  // if (collision) {
  //   direction = Math.floor(Math.random() * 4) + 1;
  // }

  // if (collision) {
  //   if (direction == 1) 
  //     direction = 2;
  //   else
  //     direction = 1;
  // }

  // // Displays number of lives
  // switch(lives) {
  //   case 3:
  //     this.image(lifeImage, 20, 430, 30, 30);
  //     this.image(lifeImage, 60, 430, 30, 30);
  //     this.image(lifeImage, 100, 430, 30, 30);
  //   case 2:
  //     this.image(lifeImage, 20, 430, 30, 30);
  //     this.image(lifeImage, 60, 430, 30, 30);
  //   case 1:
  //     this.image(lifeImage, 20, 430, 30, 30);
  //   case 0:
  // }
  //   var sq1x = 50;
  //   var sq1y = 200;
  //
  //   var sq2x = 120;
  //   var sq2y = 200;
  //
  //   var rect1x = 120;
  //   var rect1y = 100;
  //
  //   var rect2x = 20;
  //   var rect2y = 200;

    // if(floor.users[0]){
    //     globalsq1x = floor.users[0].x;
    //     globalsq1y = floor.users[0].y;
    //     pb.drawUser(floor.users[0]);
    //     this.image(lifeImage, floor.users[0].x-50, floor.users[0].y-50, 100, 100);
    // }
    //
    // if(floor.users[1]){
    //   globalrect1x = floor.users[1].x;
    //   globalrect1y = floor.users[2].
    //     pb.drawUser(floor.users[1]);
    //     this.image(lifeImage, floor.users[1].x-25, floor.users[1].y-50, 50, 100);
    // }
    //
    // if(floor.users[2]){
    //     pb.drawUser(floor.users[2]);
    //     this.image(lifeImage, floor.users[2].x-50, floor.users[2].y-25, 100, 50);
    // }
    //
    // if(floor.users[3]){
    //     globalsq2x = floor.users[3].x;
    //     globalsq2y = floor.users[3].y;
    //     pb.drawUser(floor.users[3]);
    //     this.image(lifeImage, floor.users[3].x-25, floor.users[3].y-25, 50, 50);
    // }
    //
    // if(floor.users.length==4){
    //     if(this.dist(floor.users[0].x, floor.users[0].y, floor.users[1].x, floor.users[1].y) < 170 &&
    //         this.dist(floor.users[0].x, floor.users[0].y, floor.users[1].x, floor.users[1].y) > 130 &&
    //         this.dist(floor.users[0].x, floor.users[0].y, floor.users[2].x, floor.users[2].y) < 170 &&
    //         this.dist(floor.users[0].x, floor.users[0].y, floor.users[2].x, floor.users[2].y) > 130 &&
    //         this.dist(floor.users[0].x, floor.users[0].y, floor.users[3].x, floor.users[3].y) < 232 &&
    //         this.dist(floor.users[0].x, floor.users[0].y, floor.users[3].x, floor.users[3].y) > 192 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[1].x, floor.users[1].y) < 170 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[1].x, floor.users[1].y) > 130 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[2].x, floor.users[2].y) < 170 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[2].x, floor.users[2].y) > 130 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[0].x, floor.users[0].y) < 232 &&
    //         this.dist(floor.users[3].x, floor.users[3].y, floor.users[0].x, floor.users[0].y) > 192){
    //         this.clear();
    //         this.image(lifeImage, 20, 100, 100, 100);
    //         this.image(lifeImage, 120, 200, 50, 50);
    //         this.image(lifeImage, 120, 100, 50, 100);
    //         this.image(lifeImage, 20, 200, 100, 50);
    //         console.log(this.dist(floor.users[0].x, floor.users[0].y, floor.users[1].x, floor.users[1].y));
    //         this.image(gameOverImage, 0, 0, this.width, this.height);
    //     }
    // }
    // else {
    //     this.clear();
    //     this.image(lifeImage, 20, 100, 100, 100);
    //     this.image(lifeImage, 120, 200, 50, 50);
    //     this.image(lifeImage, 120, 100, 50, 100);
    //     this.image(lifeImage, 20, 200, 100, 50);
    // }




    // pb.drawUser(floor.users[1]);
    // pb.drawUser(floor.users[2]);
    // pb.drawUser(floor.users[3]);
    //
    // this.image(lifeImage, floor.users[1].x, floor.users[1].y, 100, 100);
    // this.image(lifeImage, floor.users[2].x, floor.users[2].y, 100, 100);
    // this.image(lifeImage, floor.users[3].x, floor.users[5].y, 100, 100);

    this.image(outline, 200, 150, 150, 150);
    this.image(drop, 240, 220, 70, 25);
    this.image(sum, 250, 125, 50, 50);
    this.image(sum, 160, 215, 50, 50);
    pb.p5.push();
    pb.p5.fill(pb.p5.color(234, 208, 7));
    pb.p5.rect(500, 450, 100, 25);
    pb.p5.fill(pb.p5.color(0, 0, 0));
    pb.p5.text("RESET", 515, 465);
    pb.p5.pop();
  // Drawing unit for lines
  for (let user of floor.users) {
      pb.drawUser(user);
      if (500 <= user.x && user.x <= 600) {
          if (450 <= user.y && user.y < 475) {
              location.reload();
          }
      }

      //this.image(lifeImage, user.x, user.y, 100, 100);

      if (user.y > sq1y && user.y < sq1y+100 && user.x > sq1x && user.x < sq1x + 100 && sq1flag == false){
          sq1x = user.x-50;
          sq1y = user.y-50;
          sq1flag = true;
          this.image(lifeImage, sq1x, sq1y, 100, 100);
      }
      else if (user.y > sq2y && user.y < sq2y + 50 && user.x > sq2x && user.x < sq2x+ 50 && sq2flag == false){
          sq2x = user.x-25;
          sq2y = user.y-25;
          sq2flag = true;
          this.image(lifeImage_small, sq2x, sq2y, 50, 50);
      }
      else if (user.y > rect1y && user.y < rect1y + 100 && user.x > rect1x && user.x < rect1x + 50 && rect1flag == false){
          rect1x = user.x-25;
          rect1y = user.y-50;
          rect1flag = true;
          this.image(lifeImage_rect1, rect1x, rect1y, 50, 100);
      }
      else if (user.y > rect2y && user.y < rect2y + 50 && user.x > rect2x && user.x < rect2x + 100 && rect2flag == false){
          rect2x = user.x-50;
          rect2y = user.y-25;
          rect2flag = true;
          this.image(lifeImage_rect1, rect2x, rect2y, 100, 50);
      }
      else
      {
          sq1flag = (inOutlinesq1===true?true:false);
          sq2flag = (inOutlinesq2===true?true:false);
          rect1flag = (inOutlinerect1===true?true:false);
          rect2flag = (inOutlinerect2===true?true:false);
          this.image(lifeImage, (inOutlinesq1===true?200:sq1x), (inOutlinesq1===true?150:sq1y), 100, 100);
          this.image(lifeImage_small, (inOutlinesq2===true?300:sq2x), (inOutlinesq2===true?250:sq2y), 50, 50);
          this.image(lifeImage_rect1, (inOutlinerect1===true?300:rect1x), (inOutlinerect1===true?150:rect1y), 50, 100);
          this.image(lifeImage_rect1, (inOutlinerect2===true?200:rect2x), (inOutlinerect2===true?250:rect2y), 100, 50);
        // if(!inOutlinesq1){
        //     sq1flag = false;
        //     sq2flag = false;
        //     rect1flag = false;
        //     rect2flag = false;
        //     this.image(lifeImage, sq1x, sq1y, 100, 100);
        //     this.image(lifeImage_small, sq2x, sq2y, 50, 50);
        //     this.image(lifeImage_rect1, rect1x, rect1y, 50, 100);
        //     this.image(lifeImage_rect1, rect2x, rect2y, 100, 50);
        // }
        // else{
        //     sq1flag = true;
        //     sq2flag = false;
        //     rect1flag = false;
        //     rect2flag = false;
        //     this.image(lifeImage, 200, 150, 100, 100);
        //     this.image(lifeImage_small, sq2x, sq2y, 50, 50);
        //     this.image(lifeImage_rect1, rect1x, rect1y, 50, 100);
        //     this.image(lifeImage_rect1, rect2x, rect2y, 100, 50);
        // }


      }


      if(sq1x+50>200 && sq1x+50<350 && sq1y+50>150 && sq1y+50<300){
        inOutlinesq1 = true;
        this.image(asq, 50,20, 75, 75);
      }
      if(sq2x+25>200 && sq2x+25<350 && sq2y+25>150 && sq2y+25<300){
          inOutlinesq2 = true;
          this.image(plus, 100,20, 75, 75);
          this.image(bsq, 150,20, 75, 75);
      }
      if(rect1x+25>200 && rect1x+25<350 && rect1y+50>150 && rect1y+50<300){
          inOutlinerect1 = true;
      }
      if(rect2x+50>200 && rect2x+50<350 && rect2y+25>150 && rect2y+25<300){
          inOutlinerect2 = true;
      }

      if(inOutlinerect1 && inOutlinerect2){
          this.image(plus, 200,20, 75, 75);
          this.image(twoab, 250,20, 75, 75);
      }

      if(inOutlinesq1 && inOutlinesq2 && inOutlinerect1 && inOutlinerect2){
          this.image(equ, 300,20, 75, 75);
          this.image(sumsq, 350, 20,100, 75);
      }



      // if(this.dist(sq1x, sq1y, sq2x+50, sq1y) < 170 &&
      //         this.dist(sq1x, sq1y, sq2x+50, sq1y) > 130 &&
      //         this.dist(sq1x, sq1y, rect2x, rect2y+50) < 170 &&
      //         this.dist(sq1x, sq1y, rect2x, rect2y+50) > 130 &&
      //         this.dist(sq1x, sq1y, sq2x+50, sq2y+50) < 232 &&
      //         this.dist(sq1x, sq1y, sq2x+50, sq2y+50) > 192 &&
      //         this.dist(sq2x+50, sq2y+50, sq2x+50, sq1y) < 170 &&
      //         this.dist(sq2x+50, sq2y+50, sq2x+50, sq1y) > 130 &&
      //         this.dist(sq2x+50, sq2y+50, rect2x, rect2y+50) < 170 &&
      //         this.dist(sq2x+50, sq2y+50, rect2x, rect2y+50) > 130 &&
      //         this.dist(sq2x+50, sq2y+50, sq1x, sq1y) < 232 &&
      //         this.dist(sq2x+50, sq2y+50, sq1x, sq1y) > 192){
      //         //this.clear();
      //         //this.image(lifeImage, 20, 100, 100, 100);
      //         //this.image(lifeImage, 120, 200, 50, 50);
      //         //this.image(lifeImage, 120, 100, 50, 100);
      //         //this.image(lifeImage, 20, 200, 100, 50);
      //         //console.log(this.dist(floor.users[0].x, floor.users[0].y, floor.users[1].x, floor.users[1].y));
      //         //this.image(gameOverImage, 0, 0, this.width, this.height);
      //     }




    //
    // switch(direction) {
    //   // Coming from the bottom (decreasing y-coordinate)
    //   case 1:
    //     // Resets line, if necessary
    //     if (collision) {
    //       y = this.height;
    //       collision = false;
    //     }
    //
    //     // Moves line
    //     y = y - 1;
    //     this.stroke('#DC7A0E');
    //     this.line(0, y, this.width, y);
    //
    //     // Checks for successful user intervention
    //     if (user.y > y) {
    //       collision = true;
    //     }
    //     break;
    //   // Coming from the right (decreasing x-coordinate)
    //   case 2:
    //     if (collision) {
    //       x = this.width;
    //       collision = false;
    //     }
    //
    //     x = x - 1;
    //     this.stroke('#DC7A0E');
    //     this.line(x, 0, x, this.height);
    //
    //     if (user.x > x) {
    //       collision = true;
    //     }
    //     break;
    //   // Coming from the top (increasing y-coordinate)
    //   case 3:
    //     if (collision) {
    //       y = 0;
    //       collision = false;
    //     }
    //
    //     y = y + 1;
    //     this.stroke('#DC7A0E');
    //     this.line(0, y, this.width, y);
    //
    //     if (user.y < y) {
    //       collision = true;
    //     }
    //     break;
    //   // Coming from the left (increasing x-coordinate)
    //   case 4:
    //     if (collision) {
    //       x = 0;
    //       collision = false;
    //     }
    //
    //     x = x + 1;
    //     this.stroke('#DC7A0E');
    //     this.line(x, 0, x, this.height);
    //
    //     if (user.x < x) {
    //       collision = true;
    //     }
    //     break;
    // }
  }
  
  // // Draws central circle (King)
  // if (gameOverCounter == 0) {
  //   this.fill('#3BDBE9');
  //   this.ellipse(this.width / 2, this.height / 2, 80, 80);
  // } else {
  //   this.image(gameOverImage, 0, 0, this.width, this.height);
  //   gameOverCounter = gameOverCounter - 1;
  // }
  //
  // // Set dimensions of circle to determine loss
  // top = this.height / 2 + 40;
  // bottom = this.height / 2 - 40;
  // right = this.width / 2 + 40;
  // left = this.width / 2 - 40;

 // // Line makes it to the circle and "hurts" the king
 //  if ((x < right && x > left) || (y < top && y > bottom)) {
 //    if (lives > 0) {
 //      this.fill('red');
 //      this.rect(0, 0, this.width, this.height);
 //      lives = lives - 1;
 //    }
 //
 //    // Displays gameOverImage when the players have no more lives
 //    else {
 //      this.image(gameOverImage, 0, 0, this.width, this.height);
 //      lives = 3;
 //      gameOver = true;
 //      gameOverCounter = 60;
 //    }
 //    x = 0;
 //    y = 0;
 //
 //    collision = true;
 //  }
  console.log(lives);
  console.log(collision);

};

export const behavior = {
  title: "Protect the King",
  init: pb.init.bind(pb),
  frameRate: 'sensor',
  render: pb.render.bind(pb),
  numGhosts: 2,
  maxUsers: 4
};
export default behavior