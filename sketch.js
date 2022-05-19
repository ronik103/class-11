var weight = [35,38,42,45,43,34,36,41,48,32];

function setup() {
  createCanvas(400,400);
  var sum = 0
  var avg_weight;
for(var i = 0; i < weight.length; i = i+1) {
   sum = sum + weight[i]   
}
avg_weight = sum/weight.length;
console.log(avg_weight);
}



function draw() 
{
  background(30);
}

 

