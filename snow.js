class Snow{
    constructor(x,y){
        var options = {
                restitution : 0.2,
                isStatic : false,
                friction  : 0,
        }
        this.image = loadImage("snow4.webp")
        this.body = Bodies.circle(x,y,this.r,options)
        this.r = 2
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.r)
        pop()
    }
}