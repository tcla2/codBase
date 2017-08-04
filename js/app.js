var eventoControlado = false;
var msg = ''; 
var operaciones = ""; 


function bigImg(x) {
    x.style.height = "60px";
    x.style.width = "60px";

}

function normalImg(x) {
    x.style.height = "62.91";
    x.style.width = "22%";
	
}

window.onload = function() { document.onkeypress = mostrarInformacionCaracter;
document.onkeyup = mostrarInformacionTecla; }
function mostrarInformacionCaracter(evObject) {                
				var elCaracter = String.fromCharCode(evObject.which);								
				var numero= display.innerHTML;
				numero= numero.length;	
				if(evObject.which==46){
		         boton_press("punto");
				 display.innerHTML +=".";
		        }															
				if(isNaN(elCaracter)==false && numero <=7 || elCaracter==46 ){
                if (evObject.which!=0 && evObject.which!=13) {
                msg =  elCaracter;				
				if(display.innerHTML==0 && elCaracter!="."){
					display.innerHTML='';			
									
					}
					 boton_press(elCaracter);
										
                display.innerHTML += msg }                
                eventoControlado=true;
				
				
}
 if(elCaracter=="+" || elCaracter=="-" || elCaracter=="*" || elCaracter=="/" ){	 	
	operaciones += display.innerHTML + elCaracter;
	display.innerHTML='0'
		 	
	}
	
	tipo_caracter(elCaracter);
			
	
	if(evObject.which==13)
	{
		resultado();
		boton_press("igual");
		}
		
	
		
	
		
}

function tipo_caracter(elCaracter){
	
	
	if(elCaracter=="+")
	{ 
	boton_press("mas");
	}		
	if(elCaracter=="-")
	{ 
	boton_press("menos");
	}		
	if(elCaracter=="/")
	{ 
	boton_press("dividido");
	}
	if(elCaracter=="*")
	{ 
	boton_press("por");
	}
	if(elCaracter=="on")
	{ 
	boton_press("on");
	}
	if(elCaracter=="sign")
	{ 
	boton_press("sign");
	}
	if(elCaracter==13)
	{ 
	boton_press("igual");
	}	
	if(elCaracter==".")
	{ 	
	boton_press("punto");
	}
	
	
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
	 if(t !="."){
	 boton_press(t);
	 	
	 }
	
	}

  function boton_press(t){
	  
	    
	   document.getElementById(t).style.transform="scale(0.9)";
 setTimeout(function(){ document.getElementById(t).style.transform="scale(1)"; }, 200);
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
msg = ''; 
operaciones = ""; 

tipo_caracter("on");
    
});
document.getElementById("0").addEventListener("click", function(){
numero_por_clic ('0');  
    
});
document.getElementById("punto").addEventListener("click", function(){
numero_por_clic (".");   
tipo_caracter(".");
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
		 tipo_caracter("sign") 
		  
});

document.getElementById("mas").addEventListener("click", function(){	
	n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '+';	
		}		
display.innerHTML = 0;  
 tipo_caracter("+")    
});

document.getElementById("igual").addEventListener("click", function(){	
	
	resultado();	
	 tipo_caracter(13) 	
    
});

document.getElementById("menos").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '-';	
		}		
display.innerHTML = 0;  
 tipo_caracter("-")    
});

document.getElementById("por").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '*';	
		}		
display.innerHTML = 0; 
 tipo_caracter("*")     
});

document.getElementById("dividido").addEventListener("click", function(){	
n = parseFloat(display.innerHTML);	
	if(n>0)	
	{		  	
	operaciones += display.innerHTML +  '/';	
		}		
display.innerHTML = 0; 
 tipo_caracter("/")  
    
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
		
	 
	 