//indice              [0]                 [1]                [2]                  [3]
var chocolate = ["ovo de pascoa","barra de chocolate","bolo de chocolate","sorvete de chocolate"]
console.log(chocolate);
// te permite apresentar um elemento especifico do array
console.log(chocolate[2])
// push= acrescenta novos elementos ao arrray
chocolate.push("brigadeiro");
chocolate.push("trufas");
chocolate.push("pão é de chocolate");
console.log(chocolate);
// pop remove o ultimo elemento do array
chocolate.pop();
console.log(chocolate);

// delete= exclui um elemento especifio 
//do array mais mantem o espaço no array
delete chocolate[5];
console.log(chocolate);

// sploce remove permanente um elemento especifico do array
chocolate.splice(1,1);
console.log(chocolate);
//coloca um elemento em um lugar especifico do array
chocolate[4]="Lollo";
console.log(chocolate);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);





  drawSprites();
}














