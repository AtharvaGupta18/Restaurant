var wrap
var a,b,c,d,e,f,g,h,i,j,k,l
function setup() {
  createCanvas(screen.width - 20, 1000)
  line(1, 101, 255, 101)
  line(1, 151, 255, 151)
  line(1, 201, 255, 201)
  line(1, 251, 255, 251)
  line(1, 301, 255, 301)
  line(1, 351, 255, 351)
  line(1, 401, 255, 401)
  line(1, 451, 255, 451)
  line(1, 501, 255, 501)
  line(1, 551, 255, 551)
  line(1, 601, 255, 601)
  line(1, 651, 255, 651)
  line(1, 701, 255, 701)
  line(1, 780, 255, 780)

  vwrap = createButton("Veg Wraps")
  nwrap = createButton("Non-Veg Wraps")
  vB = createButton("Veg Burgers")
  nB = createButton("Non-Veg Burgers")
  vpizzas = createButton("Veg Pizzas")
  npizzas = createButton("Non-Veg Pizzas")
  vstart = createButton("Veg Starters")
  nstart = createButton("Non-Veg Starters")
  coffee = createButton("Coffee & Shakes")
  vcombo = createButton("Veg Combos")
  ncombo = createButton("Non-Veg Combos")
  extras = createButton("Extras")
  cd = createButton("Cold Drinks")
  
  vwrap.position(5, 50)
  nwrap.position(5, 100)
  vB.position(5, 150)
  nB.position(5, 200)
  vpizzas.position(5, 250)
  npizzas.position(5, 300)
  vstart.position(5, 350)
  nstart.position(5, 400)
  coffee.position(5, 450)
  vcombo.position(5, 500)
  ncombo.position(5, 550)
  extras.position(5, 600)
  cd.position(5, 650)

  vwrap.size(250, 50)
  nwrap.size(250, 50)
  vB.size(250, 50)
  nB.size(250, 50)
  vpizzas.size(250, 50)
  npizzas.size(250, 50)
  vstart.size(250, 50)
  nstart.size(250, 50)
  coffee.size(250, 50)
  vcombo.size(250, 50)
  ncombo.size(250, 50)
  extras.size(250, 50)
  cd.size(250, 50)
  
  vwrap.style('font-size', '22px')
  nwrap.style('font-size', '22px')
  vB.style('font-size', '22px')
  nB.style('font-size', '22px')
  vpizzas.style('font-size', '22px')
  npizzas.style('font-size', '22px')
  vstart.style('font-size', '22px')
  nstart.style('font-size', '22px')
  coffee.style('font-size', '22px')
  vcombo.style('font-size', '22px')
  ncombo.style('font-size', '22px')
  extras.style('font-size', '22px')
  cd.style('font-size', '22px')

  vwrap.mousePressed(vegwrap);
  nwrap.mousePressed(nvegwrap);
  
}

function draw() {
  background('#ffd66e')
  line(255, 1, 255, screen.height - 155)
  
  textSize(32);
  text("Food Items", 50, 35)
  fill('DarkBlue');
  line(1, 50, 255, 50)

  strokeWeight(3);
  line(3, 3, 3, screen.height - 155)

  drawSprites()

}


function vegwrap(){
  fill("white")
  a=new Square(350, 20, 200, 40);
  b=new Square(650, 20, 200, 40);
  c=new Square(950, 20, 200, 40);
  d=new Square(1250, 20, 200, 40);
  e=new Square(350, 250, 200, 40);
  f=new Square(650, 250, 200, 40);
  g=new Square(950, 250, 200, 40);
  h=new Square(1250, 250, 200, 40);
  i=new Square(350, 480, 200, 40);
  j=new Square(650, 480, 200, 40);
  k=new Square(950, 480, 200, 40);
  l=new Square(1250, 480, 200, 40);
}

function nvegwrap(){
}