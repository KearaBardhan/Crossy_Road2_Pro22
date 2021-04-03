class Player{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.play=createSprite(this.x,this.y,50,50);
        this.play.shapeColor="orange";
    }
    move(xdir,ydir){
        this.play.x+=xdir*grid;
        this.play.y+=ydir*grid;
    }
}