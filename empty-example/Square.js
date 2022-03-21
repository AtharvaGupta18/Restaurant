class Square{
    constructor(a, b, c, d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        

        fill("white");
        noStroke();
        this.body = square(this.a, this.b, this.c, this.d);
    }
    removeSquare(){
        this.body.remove()
    }
}