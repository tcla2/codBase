var eventoControlado = false;
var msg = ''; 
var operaciones = ""; 

window.onload = function() { document.onkeypress = mostrarInformacionCaracter;
document.onkeyup = mostrarInformacionTecla; }
function mostrarInformacionCaracter(evObject) {                
				var elCaracter = String.fromCharCode(evObject.which);								
				var numero= display.innerHTML;
				numero= numero.length;												
				if(isNaN(elCaracter)==false && numero <=7 || elCaracter=="." ){
                if (evObject.which!=0 && evObject.which!=13) {
                msg =  elCaracter;				
				if(display.innerHTML==0 && elCaracter!="."){
					display.innerHTML='';
					}					
                display.innerHTML += msg }                
                eventoControlado=true;
}
 if(elCaracter=="+" || elCaracter=="-" || elCaracter=="*" || elCaracter=="/" ){	 	
	operaciones += display.innerHTML + elCaracter;
	display.innerHTML='0'
	
	}
	
	
	if(elCaracter==' ')
	{
		resultado();
		}

function numero_por_clic (t){
		
	var numero= display.innerHTML;
  	 numero= numero.length;
	 if(display.innerHTML==0){
	 display.innerHTML='';
		}
	 if(numero <=7 ){
		 display.innerHTML += t;  
	 }    
	
	}


document.getElementById("1").addEventListener("click", function(){ 
 numero_por_clic (1);
});

document.getElementById("2").addEventListener("click", function(){
 numero_por_clic (2);
    
});
document.getElementById("3").addEventListener("click", function(){
 numero_por_clic (3);
    
});
document.getElementById("4").addEventListener("click", function(){
 numero_por_clic (4);
    
});
document.getElementById("5").addEventListener("click", function(){
 numero_por_clic (5);
    
});
document.getElementById("6").addEventListener("click", function(){
 numero_por_clic (6);
    
});
document.getElementById("7").addEventListener("click", function(){
numero_por_clic (7);
    
});
document.getElementById("8").addEventListener("click", function(){
 numero_por_clic (8);
    
});

document.getElementById("9").addEventListener("click", function(){
numero_por_clic (9);
    
});

document.getElementById("on").addEventListener("click", function(){
display.innerHTML = 0; 
    
});
document.getElementById("0").addEventListener("click", function(){
display.innerHTML = 0; 
    
});


document.getElementById("sign").addEventListener("click", function(){	
	 Numer=parseInt(display.innerHTML);	 
	 if(display.innerHTML!=0 && Numer > 0)
     display.innerHTML = "-" + display.innerHTML; 
if(Numer < 0) {	
	    var numero = display.innerHTML; 
		 cont= numero.length;			 
		 Numer = numero.substring(1, cont);
		 display.innerHTML = Numer;
		 }    
});

document.getElementById("mas").addEventListener("click", function(){	
	n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '+';	
		}		
display.innerHTML = 0;     
});

document.getElementById("igual").addEventListener("click", function(){	
	
	resultado();		
    
});

document.getElementById("menos").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '-';	
		}		
display.innerHTML = 0;     
});

document.getElementById("por").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '*';	
		}		
display.innerHTML = 0;     
});

document.getElementById("dividido").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '/';	
		}		
display.innerHTML = 0;     
});



 function resultado (){
	 		 
	 if(display.innerHTML!='0')
	{
	operaciones += display.innerHTML
	}	
	operaciones=eval(operaciones)	
	display.innerHTML=operaciones;	
	msg = ''; 
    operaciones = ""; 
		
		}		
		
	 
	 }