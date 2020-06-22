var area = document.getElementById("area");

var conhecimentos = document.getElementById("conhecimentos");

var areas = document.querySelectorAll("option");

var maxAdm = 8000
var maxTi = 20000
var maxVendas = 10000
var maxMkt = 10000

var botaoCalc = document.getElementById("enviaForm");

botaoCalc.addEventListener("click", function() {
    
    var validaCalc = true;

    var inputSal = document.getElementById("inputSal").value;
    if(area.options[area.selectedIndex].id =="adm" && inputSal > maxAdm) { //eu usaria o 'this' aqui, certo (se inputSal fosse declarada fora)? ==> this.inputSal <== mas não funcionou tho :/
        alert("Valor máximo ultrapassado. Reconsidere.");
        validaCalc = false;
    }
    if(area.options[area.selectedIndex].id =="ti" && inputSal > maxTi) {
        alert("Valor máximo ultrapassado. Reconsidere.");
        validaCalc = false;
    } else if(area.options[area.selectedIndex].id =="vendas" && inputSal > maxVendas) {
        alert("Valor máximo ultrapassado. Reconsidere.");
        validaCalc = false;
    } else if(area.options[area.selectedIndex].id =="mkt" && inputSal > maxMkt) {
        alert("Valor máximo ultrapassado. Reconsidere.");
        validaCalc = false;
    } 
    
    if(validaCalc === true) {
       
        var salarioCalc = document.getElementById("inputSal").value;

        salarioCalc = parseInt(salarioCalc);
        
        var calculo = (salarioCalc * 0.76);
        
        document.getElementById("salarioCalc").value = calculo;
    };
});

function showcamp() {
    
    if(area.options[area.selectedIndex].value == "yes") {
        conhecimentos.style.display = "block";      
    } else { 
        conhecimentos.style.display = "none";
    }
}

var botaoLimpa = document.getElementById("limpaForm")
botaoLimpa.addEventListener("click", function() {
    var form = document.getElementById("form");
    form.reset();
});


/* Essa função eu fiz quando não tinha criado as variáveis "maxAdm/Ti/Vendas/Mkt"

document.getElementById("inputSal").addEventListener("click", function() {
    if(document.querySelector("option") == "#adm") {
        
        if(document.getElementById("inputSal") > 8000) {
            alert("Valor máximo ultrapassado. Reconsidere.");
            console.log("Ae trouxa");
        } 

    } else if(document.querySelector("option") == "#ti") {
            
        if(document.getElementById("inputSal") > 20000) {
                alert("Valor máximo ultrapassado. Reconsidere.");
                console.log("Tá funfando");
        }
        
    }
});*/ 

/* Função pra validar o salário inserido quando existia no HTML o botão "calcular"

if(validaCalc.value == true) {
    botaoCalc.addEventListener("click", function calculaLiq() {
    
    var salarioCalc = document.getElementById("inputSal").value;

    salarioCalc = parseInt(salarioCalc);
    
    var calculo = (salarioCalc * 0.76);
    
    document.getElementById("salarioCalc").value = calculo;
    
    alert("oie");
})}*/
