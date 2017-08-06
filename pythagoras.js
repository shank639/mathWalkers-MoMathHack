/* MoMath Math Square Behavior
 *
 *        Title: Pythagoras Theorem
 *  Description: Display a pythagoras theorem learning aid
 *    Framework: none
 *       Author: Raghavendra,Shashank,Sreeram, Suraj
 *      Created: 2017-08
 *       Status: works
 */

import {Behavior} from 'behavior';
import {params, form} from 'main';
import P5Behavior from 'p5beh';
const pb = new P5Behavior();
var img;
var ranges = {
    sq1:{
        x1:25,
        x2:75,
        x3:125,
        y1:200,
        y2:250,
        y3:300,
        m11:true,
        m12:true,
        m13:true,
        m21:true,
        m22:true,
        m23:true,
        m31:true,
        m32:true,
        m33:true,
        area:9
    },
    sq2:{
        x1:175,
        x2:225,
        x3:275,
        x4:325,
        y1:350,
        y2:400,
        y3:450,
        y4:500,
        m11:true,
        m12:true,
        m13:true,
        m14:true,
        m21:true,
        m22:true,
        m23:true,
        m24:true,
        m31:true,
        m32:true,
        m33:true,
        m34:true,
        m41:true,
        m42:true,
        m43:true,
        m44:true,
        area:16
    },
    sq3:{
        x1:0,
        x2:50,
        x3:100,
        x4:150,
        x5:200,
        y1:0,
        y2:50,
        y3:100,
        y4:150,
        y5:200,
        m11:false,
        m12:false,
        m13:false,
        m14:false,
        m15:false,
        m21:false,
        m22:false,
        m23:false,
        m24:false,
        m25:false,
        m31:false,
        m32:false,
        m33:false,
        m34:false,
        m35:false,
        m41:false,
        m42:false,
        m43:false,
        m44:false,
        m45:false,
        m51:false,
        m52:false,
        m53:false,
        m54:false,
        m55:false,
        area:0
    },
    length:50,
    breadth:50
};

pb.preload = function (p) {
    // try {
    //     img = pb.p5.loadImage("images/pythagoras-formula.png");
    // }
    // catch(err) {
    //     console.log(err);
    // }
};
pb.setup = function (p) {
    //pb.p5.loadImage("images/PYT-Theo.png");
    img = pb.p5.loadImage("images/pythagoras-formula.png");
};
pb.draw = function (floor, p) {
    try {
        this.clear();
        // First Square
        var titleColor = pb.p5.color(255, 255, 255);
        pb.p5.image(img, 20, 40);
        var color1 = pb.p5.color(198, 37, 29);
        var str = "Pythagoras Theorem";
        var squared = "2";
        //title
        pb.p5.push();
        pb.p5.fill(titleColor);
        pb.p5.textSize(25);
        pb.p5.text(str, 0, 30);
        pb.p5.pop();
        //Equation
        // pb.p5.push();
        // pb.p5.fill(titleColor);
        // pb.p5.textSize(25);
        // pb.p5.text(equation.toString(), 0, 70);
        // pb.p5.pop();
        //Red square counter
        pb.p5.push();
        pb.p5.fill(color1);
        pb.p5.textSize(25);
        pb.p5.text("Area: " + ranges.sq1.area.toString(), 20, 120);
        pb.p5.pop();
        // Triangle
        pb.p5.push();
        pb.p5.fill(pb.p5.color(234, 208, 7));
        pb.p5.triangle(175, 200, 175, 350, 375, 350);
        pb.p5.pop();
        pb.p5.push();
        // finalArea counter
        //Red square counter
        pb.p5.push();
        pb.p5.fill(pb.p5.color(234, 208, 7));
        pb.p5.textSize(25);
        pb.p5.text("Area: " + ranges.sq3.area.toString(), 475, 375);
        pb.p5.pop();
        pb.p5.fill(color1);
        //Row 1
        if (ranges.sq1.m11)
            pb.p5.rect(ranges.sq1.x1, ranges.sq1.y1, ranges.length, ranges.breadth);
        if (ranges.sq1.m12)
            pb.p5.rect(ranges.sq1.x2, ranges.sq1.y1, ranges.length, ranges.breadth);
        if (ranges.sq1.m13)
            pb.p5.rect(ranges.sq1.x3, ranges.sq1.y1, ranges.length, ranges.breadth);
        //Row 2
        if (ranges.sq1.m21)
            pb.p5.rect(ranges.sq1.x1, ranges.sq1.y2, ranges.length, ranges.breadth);
        if (ranges.sq1.m22)
            pb.p5.rect(ranges.sq1.x2, ranges.sq1.y2, ranges.length, ranges.breadth);
        if (ranges.sq1.m23)
            pb.p5.rect(ranges.sq1.x3, ranges.sq1.y2, ranges.length, ranges.breadth);
        //Row 3
        if (ranges.sq1.m31)
            pb.p5.rect(ranges.sq1.x1, ranges.sq1.y3, ranges.length, ranges.breadth);
        if (ranges.sq1.m32)
            pb.p5.rect(ranges.sq1.x2, ranges.sq1.y3, ranges.length, ranges.breadth);
        if (ranges.sq1.m33)
            pb.p5.rect(ranges.sq1.x3, ranges.sq1.y3, ranges.length, ranges.breadth);
        pb.p5.pop();
        //Second Square
        var color2 = pb.p5.color(29, 94, 198);
        //Blue square counter
        pb.p5.push();
        pb.p5.fill(color2);
        pb.p5.textSize(25);
        pb.p5.text("Area: " + ranges.sq2.area.toString(), 20, 500);
        pb.p5.pop();
        pb.p5.push();
        pb.p5.fill(color2);
        //Row 1
        if (ranges.sq2.m11)
            pb.p5.rect(ranges.sq2.x1, ranges.sq2.y1, ranges.length, ranges.breadth);
        if (ranges.sq2.m12)
            pb.p5.rect(ranges.sq2.x2, ranges.sq2.y1, ranges.length, ranges.breadth);
        if (ranges.sq2.m13)
            pb.p5.rect(ranges.sq2.x3, ranges.sq2.y1, ranges.length, ranges.breadth);
        if (ranges.sq2.m14)
            pb.p5.rect(ranges.sq2.x4, ranges.sq2.y1, ranges.length, ranges.breadth);
        //Row 2
        if (ranges.sq2.m21)
            pb.p5.rect(ranges.sq2.x1, ranges.sq2.y2, ranges.length, ranges.breadth);
        if (ranges.sq2.m22)
            pb.p5.rect(ranges.sq2.x2, ranges.sq2.y2, ranges.length, ranges.breadth);
        if (ranges.sq2.m23)
            pb.p5.rect(ranges.sq2.x3, ranges.sq2.y2, ranges.length, ranges.breadth);
        if (ranges.sq2.m24)
            pb.p5.rect(ranges.sq2.x4, ranges.sq2.y2, ranges.length, ranges.breadth);
        //Row 3
        if (ranges.sq2.m31)
            pb.p5.rect(ranges.sq2.x1, ranges.sq2.y3, ranges.length, ranges.breadth);
        if (ranges.sq2.m32)
            pb.p5.rect(ranges.sq2.x2, ranges.sq2.y3, ranges.length, ranges.breadth);
        if (ranges.sq2.m33)
            pb.p5.rect(ranges.sq2.x3, ranges.sq2.y3, ranges.length, ranges.breadth);
        if (ranges.sq2.m34)
            pb.p5.rect(ranges.sq2.x4, ranges.sq2.y3, ranges.length, ranges.breadth);
        //Row 4
        if (ranges.sq2.m41)
            pb.p5.rect(ranges.sq2.x1, ranges.sq2.y4, ranges.length, ranges.breadth);
        if (ranges.sq2.m42)
            pb.p5.rect(ranges.sq2.x2, ranges.sq2.y4, ranges.length, ranges.breadth);
        if (ranges.sq2.m43)
            pb.p5.rect(ranges.sq2.x3, ranges.sq2.y4, ranges.length, ranges.breadth);
        if (ranges.sq2.m44)
            pb.p5.rect(ranges.sq2.x4, ranges.sq2.y4, ranges.length, ranges.breadth);
        pb.p5.pop();
        //Third Square
        pb.p5.push();
        pb.p5.fill(color1);
        pb.p5.translate(175, 200);
        pb.p5.rotate(-(pb.p5.PI * 53.13) / 180);
        //Row 1
        if (ranges.sq3.m11)
            pb.p5.rect(ranges.sq3.x1, ranges.sq3.y1, ranges.length, ranges.breadth);
        if (ranges.sq3.m12)
            pb.p5.rect(ranges.sq3.x2, ranges.sq3.y1, ranges.length, ranges.breadth);
        if (ranges.sq3.m13)
            pb.p5.rect(ranges.sq3.x3, ranges.sq3.y1, ranges.length, ranges.breadth);
        if (ranges.sq3.m14)
            pb.p5.rect(ranges.sq3.x4, ranges.sq3.y1, ranges.length, ranges.breadth);
        if (ranges.sq3.m15)
            pb.p5.rect(ranges.sq3.x5, ranges.sq3.y1, ranges.length, ranges.breadth);
        //Row 2
        if (ranges.sq3.m21)
            pb.p5.rect(ranges.sq3.x1, ranges.sq3.y2, ranges.length, ranges.breadth);
        if (ranges.sq3.m22)
            pb.p5.rect(ranges.sq3.x2, ranges.sq3.y2, ranges.length, ranges.breadth);
        if (ranges.sq3.m23)
            pb.p5.rect(ranges.sq3.x3, ranges.sq3.y2, ranges.length, ranges.breadth);
        if (ranges.sq3.m24)
            pb.p5.rect(ranges.sq3.x4, ranges.sq3.y2, ranges.length, ranges.breadth);

        pb.p5.fill(color2);

        if (ranges.sq3.m25)
            pb.p5.rect(ranges.sq3.x5, ranges.sq3.y2, ranges.length, ranges.breadth);
        //Row 3
        if (ranges.sq3.m31)
            pb.p5.rect(ranges.sq3.x1, ranges.sq3.y3, ranges.length, ranges.breadth);
        if (ranges.sq3.m32)
            pb.p5.rect(ranges.sq3.x2, ranges.sq3.y3, ranges.length, ranges.breadth);
        if (ranges.sq3.m33)
            pb.p5.rect(ranges.sq3.x3, ranges.sq3.y3, ranges.length, ranges.breadth);
        if (ranges.sq3.m34)
            pb.p5.rect(ranges.sq3.x4, ranges.sq3.y3, ranges.length, ranges.breadth);
        if (ranges.sq3.m35)
            pb.p5.rect(ranges.sq3.x5, ranges.sq3.y3, ranges.length, ranges.breadth);
        //Row 4
        if (ranges.sq3.m41)
            pb.p5.rect(ranges.sq3.x1, ranges.sq3.y4, ranges.length, ranges.breadth);
        if (ranges.sq3.m42)
            pb.p5.rect(ranges.sq3.x2, ranges.sq3.y4, ranges.length, ranges.breadth);
        if (ranges.sq3.m43)
            pb.p5.rect(ranges.sq3.x3, ranges.sq3.y4, ranges.length, ranges.breadth);
        if (ranges.sq3.m44)
            pb.p5.rect(ranges.sq3.x4, ranges.sq3.y4, ranges.length, ranges.breadth);
        if (ranges.sq3.m45)
            pb.p5.rect(ranges.sq3.x5, ranges.sq3.y4, ranges.length, ranges.breadth);
        //Row 5
        if (ranges.sq3.m51)
            pb.p5.rect(ranges.sq3.x1, ranges.sq3.y5, ranges.length, ranges.breadth);
        if (ranges.sq3.m52)
            pb.p5.rect(ranges.sq3.x2, ranges.sq3.y5, ranges.length, ranges.breadth);
        if (ranges.sq3.m53)
            pb.p5.rect(ranges.sq3.x3, ranges.sq3.y5, ranges.length, ranges.breadth);
        if (ranges.sq3.m54)
            pb.p5.rect(ranges.sq3.x4, ranges.sq3.y5, ranges.length, ranges.breadth);
        if (ranges.sq3.m55)
            pb.p5.rect(ranges.sq3.x5, ranges.sq3.y5, ranges.length, ranges.breadth);
        pb.p5.pop();
        pb.p5.push();
        pb.p5.fill(pb.p5.color(234, 208, 7));
        pb.p5.rect((ranges.sq2.x4 + 200), ranges.sq2.y3, 100, 25);
        pb.p5.fill(pb.p5.color(0, 0, 0));
        pb.p5.text("RESET", (ranges.sq2.x4 + 205), ranges.sq2.y3 + 15);
        pb.p5.pop();
        pb.drawSensors(floor.sensors);

        for (let u of floor.users) {
            pb.drawUser(u);
            //Reset
            if ((ranges.sq2.x4 + 200) <= u.x && (ranges.sq2.x4 + 300)) {
                if (ranges.sq2.y3 <= u.y && u.y < (ranges.sq2.y3 + 25)) {
                    location.reload();
                }
            }

            //First Square traversal
            if (ranges.sq1.x1 <= u.x && u.x < ranges.sq1.x2) {
                if (ranges.sq1.y1 <= u.y && u.y < ranges.sq1.y2) {
                    if (ranges.sq1.m11) {
                        ranges.sq3.m11 = true;
                        ranges.sq1.m11 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y2 <= u.y && u.y < ranges.sq1.y3) {
                    if (ranges.sq1.m21) {
                        ranges.sq3.m12 = true;
                        ranges.sq1.m21 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y3 <= u.y && u.y < (ranges.sq1.y3 + ranges.length)) {
                    if (ranges.sq1.m31) {
                        ranges.sq3.m13 = true;
                        ranges.sq1.m31 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            if (ranges.sq1.x2 <= u.x && u.x < ranges.sq1.x3) {
                if (ranges.sq1.y1 <= u.y && u.y < ranges.sq1.y2) {
                    if (ranges.sq1.m12) {
                        ranges.sq3.m14 = true;
                        ranges.sq1.m12 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y2 <= u.y && u.y < ranges.sq1.y3) {
                    if (ranges.sq1.m22) {
                        ranges.sq3.m15 = true;
                        ranges.sq1.m22 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y3 <= u.y && u.y < (ranges.sq1.y3 + ranges.length)) {
                    if (ranges.sq1.m32) {
                        ranges.sq3.m21 = true;
                        ranges.sq1.m32 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            if (ranges.sq1.x3 <= u.x && u.x < (ranges.sq1.x3 + ranges.breadth)) {
                if (ranges.sq1.y1 <= u.y && u.y < ranges.sq1.y2) {
                    if (ranges.sq1.m13) {
                        ranges.sq3.m22 = true;
                        ranges.sq1.m13 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y2 <= u.y && u.y < ranges.sq1.y3) {
                    if (ranges.sq1.m23) {
                        ranges.sq3.m23 = true;
                        ranges.sq1.m23 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq1.y3 <= u.y && u.y < (ranges.sq1.y3 + ranges.length)) {
                    if (ranges.sq1.m33) {
                        ranges.sq3.m24 = true;
                        ranges.sq1.m33 = false;
                        ranges.sq1.area=ranges.sq1.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            //Second Square traversal
            if (ranges.sq2.x1 <= u.x && u.x < ranges.sq2.x2) {
                if (ranges.sq2.y1 <= u.y && u.y < ranges.sq2.y2) {
                    if (ranges.sq2.m11) {
                        ranges.sq3.m25 = true;
                        ranges.sq2.m11 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y2 <= u.y && u.y < ranges.sq2.y3) {
                    if (ranges.sq2.m21) {
                        ranges.sq3.m31 = true;
                        ranges.sq2.m21 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y3 <= u.y && u.y < ranges.sq2.y4) {
                    if (ranges.sq2.m31) {
                        ranges.sq3.m32 = true;
                        ranges.sq2.m31 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y4 <= u.y && u.y < (ranges.sq2.y4 + ranges.length)) {
                    if (ranges.sq2.m41) {
                        ranges.sq3.m33 = true;
                        ranges.sq2.m41 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            if (ranges.sq2.x2 <= u.x && u.x < ranges.sq2.x3) {
                if (ranges.sq2.y1 <= u.y && u.y < ranges.sq2.y2) {
                    if (ranges.sq2.m12) {
                        ranges.sq3.m34 = true;
                        ranges.sq2.m12 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y2 <= u.y && u.y < ranges.sq2.y3) {
                    if (ranges.sq2.m22) {
                        ranges.sq3.m35 = true;
                        ranges.sq2.m22 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y3 <= u.y && u.y < ranges.sq2.y4) {
                    if (ranges.sq2.m32) {
                        ranges.sq3.m41 = true;
                        ranges.sq2.m32 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y4 <= u.y && u.y < (ranges.sq2.y4 + ranges.length)) {
                    if (ranges.sq2.m42) {
                        ranges.sq3.m42 = true;
                        ranges.sq2.m42 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            if (ranges.sq2.x3 <= u.x && u.x < ranges.sq2.x4) {
                if (ranges.sq2.y1 <= u.y && u.y < ranges.sq2.y2) {
                    if (ranges.sq2.m13) {
                        ranges.sq3.m43 = true;
                        ranges.sq2.m13 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y2 <= u.y && u.y < ranges.sq2.y3) {
                    if (ranges.sq2.m23) {
                        ranges.sq3.m44 = true;
                        ranges.sq2.m23 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y3 <= u.y && u.y < ranges.sq2.y4) {
                    if (ranges.sq2.m33) {
                        ranges.sq3.m45 = true;
                        ranges.sq2.m33 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y4 <= u.y && u.y < (ranges.sq2.y4 + ranges.length)) {
                    if (ranges.sq2.m43) {
                        ranges.sq3.m51 = true;
                        ranges.sq2.m43 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }

            if (ranges.sq2.x4 <= u.x && (u.x < ranges.sq2.x4 + ranges.breadth)) {
                if (ranges.sq2.y1 <= u.y && u.y < ranges.sq2.y2) {
                    if (ranges.sq2.m14) {
                        ranges.sq3.m52 = true;
                        ranges.sq2.m14 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y2 <= u.y && u.y < ranges.sq2.y3) {
                    if (ranges.sq2.m24) {
                        ranges.sq3.m53 = true;
                        ranges.sq2.m24 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y3 <= u.y && u.y < ranges.sq2.y4) {
                    if (ranges.sq2.m34) {
                        ranges.sq3.m54 = true;
                        ranges.sq2.m34 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
                if (ranges.sq2.y4 <= u.y && u.y < (ranges.sq2.y4 + ranges.length)) {
                    if (ranges.sq2.m44) {
                        ranges.sq3.m55 = true;
                        ranges.sq2.m44 = false;
                        ranges.sq2.area=ranges.sq2.area-1;
                        ranges.sq3.area=ranges.sq3.area+1;
                    }
                }
            }
        };
    }
    catch(err) {
        console.log(err);
    }
};


export const behavior =  {
    title: "Static Image: " + params.src,
    frameRate: 'animate',
    render: pb.render.bind(pb),
    maxUsers: 5,
    init: pb.init.bind(pb)
};
export default behavior;