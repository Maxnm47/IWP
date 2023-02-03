var balls = {
    rightnut_size : null,
    leftnut_size : null
}

var myballs = Object.create(balls)
//myballs.rightnut_size = 10;
//myballs.leftnut_size = 10;


myballs["rightnut_size"] = 10;
myballs["leftnut_size"] = 10;
//myballs["hairy"] = "yes";
myballs.hairy = "true";
console.log(myballs)
