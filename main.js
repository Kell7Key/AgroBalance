function enviar(){

let agua =
Number(
document
.getElementById("agua")
.value
);

let mata =
Number(
document
.getElementById("mata")
.value
);

let energia =
document
.getElementById("energia")
.value;

let pontos = 100;

if(agua > 5000){
pontos -= 30;
}

if(mata < 20){
pontos -= 25;
}

if(energia === "nao"){
pontos -= 20;
}

let resultado = "";

if(pontos >= 80){

resultado =
"🌱 Produção sustentável";

}

else if(pontos >= 50){

resultado =
"⚠️ Equilíbrio moderado";

}

else{

resultado =
"🔥 Alto impacto ambiental";

}

document
.getElementById("resultado")
.innerHTML =

`
<h2>${resultado}</h2>
<p>Pontuação: ${pontos}</p>
`;

}
