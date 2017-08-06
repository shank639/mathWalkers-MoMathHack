/* MoMath Math Square Behavior
 *
 *        Title: Sum of Odd Numbers
 *  Description: Display a learning aid which shows that the sum of consecutive odd numbers is a perfect square
 *    Framework: none
 *       Author: Raghavendra,Shashank,Sreeram, Suraj
 *      Created: 2017-08
 *       Status: works
 */
import {params, form} from 'main';
// import P5Behavior from 'p5beh';
// const pb = new P5Behavior();
//
// pb.preload = function (p) {
// }
// pb.setup = function (p) {
// };
// pb.draw = function (floor, p) {
//     this.clear();
//     // First Square
//     var color1 = pb.p5.color(198, 37, 29);
//     var color2 = pb.p5.color(198, 37, 29);
//     var color3 = pb.p5.color(198, 37, 29);
//     var color4 = pb.p5.color(198, 37, 29);
//     var color5 = pb.p5.color(198, 37, 29);
//     var color6 = pb.p5.color(198, 37, 29);
//     var color7 = pb.p5.color(198, 37, 29);
//     var color8 = pb.p5.color(198, 37, 29);
//     var color9 = pb.p5.color(198, 37, 29);
//     var color10 = pb.p5.color(198, 37, 29);
//     var color11 = pb.p5.color(198, 37, 29);
//     //Row 1
//     pb.p5.push();
//     pb.p5.fill(color11);
//     pb.p5.translate(40,500);
//     for(var i=0;i<10;i++){
//         //pb.p5.rect(i*50,0,40,25);
//         pb.p5.fill(pb.p5.color(40, 226, 121));
//         pb.p5.rect(i * 50, 0, 40, 25);
//         pb.p5.fill(pb.p5.color(0, 0, 0));
//         pb.p5.text(Math.pow((i+1),2).toString(),i*50 + 15 , 15);
//     }
//     pb.p5.pop();
//
//     pb.drawSensors(floor.sensors);
//
//
//
//     for (let u of floor.users) {
//         pb.drawUser(u);
//     }
//
// };
//
//
// export const behavior = {
//     title: "Odd numbers",
//     frameRate: 'animate',
//     render: pb.render.bind(pb),
//     maxUsers: 5,
//     init: pb.init.bind(pb)
// };
// export default behavior
/* MoMath Math Square Behavior
 *
 *        Title: Sum of Odd Numbers
 *  Description: Display a learning aid which shows that the sum of consecutive odd numbers is a perfect square
 *    Framework: none
 *       Author: Raghavendra,Shashank,Sreeram, Suraj
 *      Created: 2017-08
 *       Status: works
 */
import {params, form} from 'main';
import P5Behavior from 'p5beh';
const pb = new P5Behavior();
var colors = [];
var temp = 0;
var img;
pb.preload = function (p) {
}
pb.setup = function (p) {
    colors = [[pb.p5.color(253,230,40), pb.p5.color(233,185,63), pb.p5.color(254,96,28), pb.p5.color(237,43,49),
        pb.p5.color(238,13,128), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
        pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(233,185,63), pb.p5.color(233,185,63), pb.p5.color(254,96,28), pb.p5.color(237,43,49),
            pb.p5.color(238,13,128), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(254,96,28), pb.p5.color(254,96,28), pb.p5.color(254,96,28), pb.p5.color(237,43,49),
            pb.p5.color(238,13,128), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(237,43,49), pb.p5.color(237,43,49), pb.p5.color(237,43,49), pb.p5.color(237,43,49),
            pb.p5.color(238,13,128), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128),
            pb.p5.color(238,13,128), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(154,40,143), pb.p5.color(154,40,143), pb.p5.color(154,40,143), pb.p5.color(154,40,143),
            pb.p5.color(154,40,143), pb.p5.color(154,40,143), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(57,49,140), pb.p5.color(57,49,140), pb.p5.color(57,49,140), pb.p5.color(57,49,140),
            pb.p5.color(57,49,140), pb.p5.color(57,49,140), pb.p5.color(57,49,140), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128),
            pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128), pb.p5.color(238,13,128),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(0,148,200), pb.p5.color(0,148,200), pb.p5.color(0,148,200), pb.p5.color(0,148,200),
            pb.p5.color(0,148,200), pb.p5.color(0,148,200), pb.p5.color(0,148,200), pb.p5.color(0,148,200),
            pb.p5.color(0,148,200), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)],
        [pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(1,161,81),
            pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(1,161,81),
            pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(1,161,81), pb.p5.color(139,146,71)]];

    img = pb.p5.loadImage("images/progression-formula.png");
};
pb.draw = function (floor, p) {
    this.clear();
    // First Square
    var color11 = pb.p5.color(198, 37, 29);
    var color12 = pb.p5.color(255, 255, 255);
    //Row 1
    pb.p5.push();
    pb.p5.fill(color11);
    pb.p5.image(img, 130, 10, 300, 40);
    pb.p5.translate(80,525);

    for(var i=0;i<10;i++){
        pb.p5.fill(pb.p5.color(40, 226, 121));
        pb.p5.rect(i * 40, 0, 35, 25);
        pb.p5.fill(pb.p5.color(0, 0, 0));
        pb.p5.text(Math.pow((i+1),2).toString(),i*40 + 10 , 15);
    }
    pb.p5.pop();

    //Row 1
    pb.p5.push();
    pb.p5.fill(color11);
    pb.p5.translate(80,60);
    for(var i=1;i<=temp;i++){
        pb.p5.fill(colors[i-1][i-1]);
        pb.p5.text((2*i-1).toString(),(i-1)*40 + 10 , 15);
    }
    pb.p5.pop();

    //Grid Generation
    pb.p5.push();
    pb.p5.translate(80,80);
    for(var i=0;i<10;i++){
        for(var j=0; j<10;j++){
            console.log(temp);
            if(temp <= i || temp<=j) {
                pb.p5.fill(color12);
                pb.p5.rect(j * 40, i * 40, 35, 35);
            }
            else {
                pb.p5.fill(colors[i][j]);
                pb.p5.rect(j * 40, i * 40, 35, 35);
            }
        }
    }
    pb.p5.push();
    pb.drawSensors(floor.sensors);
    for (let u of floor.users) {
        pb.drawUser(u);
        //Checking for sensor data
        for(var i=0;i<10;i++){
            if((i*40+80)<=u.x && u.x<(i*40+115)){
                if(525<=u.y && u.y< 550){
                    temp = i+1;
                    break;
                }else{
                    temp=0;
                }
            }
        }
    }
};
export const behavior = {
    title: "Static Image: " + params.src,
    frameRate: 'animate',
    render: pb.render.bind(pb),
    maxUsers: 5,
    init: pb.init.bind(pb)
};
export default behavior