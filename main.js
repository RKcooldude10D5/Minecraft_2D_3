var canvas=new fabric.Canvas('myCanvas');
var dudex=10;
var dudey=10;
var blockwidth=30;
var blockheight=30;
var dudeobject="";
var blockobject="";
function dudeupdate(){
fabric.Image.fromURL("minecraftdude.png",function(Img){
    dudeobject=Img;
    dudeobject.scaleToWidth(150);
    dudeobject.scaleToHeight(140);
    dudeobject.set({
        top:dudey,left:dudex
    });
    canvas.add(dudeobject);
});

}
function newimage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:dudey,left:dudex
        });
        canvas.add(blockobject);
    });
    
    }
    window.addEventListener("keydown", mykeydown);
    function up(){
        if(dudey>=0){
            dudey=dudey-blockheight;
            console.log("blockheight="+blockheight);
            console.log("When up arrow key is pressed, x="+dudex+",y="+dudey);
            canvas.remove(dudeobject);
            dudeupdate();
        }

    }
    function down(){
        if(dudey<=850){
            dudey=dudey+blockheight;
            console.log("blockheight="+blockheight);
            console.log("When down arrow key is pressed, x="+dudex+",y="+dudey);
            canvas.remove(dudeobject);
            dudeupdate();
        }

    }
    function left(){
        if(dudex>=0){
            dudex=dudex-blockwidth;
            console.log("blockwidth="+blockwidth);
            console.log("When left arrow key is pressed, x="+dudex+",y="+dudey);
            canvas.remove(dudeobject);
            dudeupdate();
        }

    }
    function right(){
        if(dudex<=850){
            dudex=dudex+blockwidth;
            console.log("blockwidth="+blockwidth);
            console.log("When right arrow key is pressed, x="+dudex+",y="+dudey);
            canvas.remove(dudeobject);
            dudeupdate();
        }

    }

    function mykeydown(e){
        keypressed=e.keyCode;
        console.log(keypressed);
        if(e.shiftKey==true && keypressed=='80'){
            console.log("Shift key & P key is pressed");
            blockwidth=blockwidth+10;
            blockheight=blockheight+10;
            document.getElementById("widthofblock").innerHTML=blockwidth;
            document.getElementById("heightofblock").innerHTML=blockheight;
        }
        if(e.shiftKey==true && keypressed=='77'){
            console.log("Shift key & M key is pressed");
            blockwidth=blockwidth-10;
            blockheight=blockheight-10;
            document.getElementById("widthofblock").innerHTML=blockwidth;
            document.getElementById("heightofblock").innerHTML=blockheight;
        }
        if(keypressed=='37'){
            left();
            console.log("Minecraft dude went left");
        }
        if(keypressed=='38'){
            up();
            console.log("Minecraft dude went up");
        }
        if(keypressed=='39'){
            right();
            console.log("Minecraft dude went right");
        }
        if(keypressed=='40'){
            down();
            console.log("Minecraft dude went down");
        }
        if(keypressed=='67'){
            newimage('cloud.jpg');
            console.log("Minecraft dude layed a cloud");
        }
        if(keypressed=='68'){
            newimage('dark_green.png');
            console.log("Minecraft dude layed a darker piece of grass");
        }
        if(keypressed=='71'){
            newimage('ground.png');
            console.log("Minecraft dude layed a piece of ground");
        }
        if(keypressed=='76'){
            newimage('light_green.png');
            console.log("Minecraft dude layed a lighter piece of grass");
        }
        if(keypressed=='82'){
            newimage('roof.jpg');
            console.log("Minecraft dude layed a roof");
        }
        if(keypressed=='84'){
            newimage('trunk.jpg');
            console.log("Minecraft dude layed a piece of tree trunk");
            }
            if(keypressed=='85'){
                newimage('unique.png');
                console.log("Minecraft dude layed a piece of unique");
            }
            if(keypressed=='87'){
                newimage('wall.jpg');
                console.log("Minecraft dude layed a wall");
            }
            if(keypressed=='89'){
                newimage('yellow_wall.png');
                console.log("Minecraft dude layed a yellow wall");
            }
    }