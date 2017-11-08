function Pixel(r,g,b){

    //declare red
    //declare green
    //declare blue
this.red = r;
this.blue = b;
this.green = g;



    this.addRed = function(n){
        //new = old then math
        this.red = this.red +n;
        if (this.red>255){
          this.red=255;
        }
        if (this.red<0){
          this.red=0;
        }
    };

    this.addGreen = function(n){
        this.green = this.green +n;
    if (this.green>255){
      this.green=255;
    }
    if (this.green<0){
      this.green=0;
    }
};

    this.addBlue = function(n){
        this.blue = this.blue +n;
    if (this.blue>255){
      this.blue=255;
    }
    if (this.blue<0){
      this.blue=0;
    }
    };
    this.brighten = function(n){
        this.red=this.red*(1+n);
        if (this.red>255){
          this.red=255;
        }
        if (this.red<0){
          this.red=0;
        }
        this.blue=this.blue*(1+n);
        if (this.blue>255){
          this.blue=255;
        }
        if (this.blue<0){
          this.blue=0;
        }
        this.green=this.green*(1+n);
        if (this.green>255){
          this.green=255;
        }
        if (this.green<0){
          this.green=0;
        }

    };

    this.complement = function(n){
      let complement = new Pixel(255-this.red,255-this.blue,255-this.green);
      return complement;
    };

    this.grayScale = function(){
      return (this.red+this.green+this.blue)/3

    };


}

function report(mypixel){
    //reduces redundancy of code.
    console.log("My red is :"+mypixel.red);
    console.log("My green is :"+mypixel.green);
    console.log("My blue is :"+mypixel.blue);
}

//declares a main method to test the code.
function main(){

    //creates a Pixel-object
    let rectangle = new Pixel(200,100,120);

    //use a report to test each function
    report(rectangle);

    rectangle.addRed(60);
    rectangle.addGreen(60);
    rectangle.addBlue(60);

    console.log("------Added 60 to each value above------");
    report(rectangle);

    rectangle.brighten(-0.40);
    console.log("------Reduced brightness by 40%------");
    report(rectangle);


    console.log("------Complement to the previous color------");
    report(rectangle.complement());


    console.log("------Averages the 3 values from the brighten example------");
    console.log(rectangle.grayScale());


}

//runs the code
main();
