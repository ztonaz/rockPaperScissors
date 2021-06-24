var ready = 0;
p1fin = "";
p2fin = "";

var startQ = 0;


tempScoreP1 = 0;
tempScoreP2 = 0; 

temp1Choosed = "";
temp2Choosed = "";   


document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred
	document.getElementById("s1").disabled = true;
	document.getElementById("s2").disabled = true;
	
	
	
	
})

function startAgain(clicked){
	if (clicked == "s1"){
		document.getElementById("s1").classList.remove("classAnimateStartAgain");
		document.getElementById(clicked).disabled = true;
		document.getElementById(clicked).innerText = "Waiting for " + document.getElementById("name2").innerText + " to hit Start";
		
	}
	if (clicked == "s2"){
		document.getElementById("s2").classList.remove("classAnimateStartAgain");
		document.getElementById(clicked).disabled = true;
		document.getElementById(clicked).innerText = "Waiting for " + document.getElementById("name1").innerText + " to hit Start";
		
	}
	
	++startQ;
	
	if (startQ==2){
		//add animated startagain button
		document.getElementById("s1").classList.add("classAnimateStartAgain");
		document.getElementById("s2").classList.add("classAnimateStartAgain");
		
		document.getElementById("p1Piedra").style.opacity = "100"; 
		document.getElementById("p1Papel").style.opacity = "100";
		document.getElementById("p1Tijera").style.opacity = "100";
		
		document.getElementById("p2Piedra").style.opacity = "100"; 
		document.getElementById("p2Papel").style.opacity = "100";
		document.getElementById("p2Tijera").style.opacity = "100";
		
		document.getElementById("p1ChoiceS").style.opacity = 0;
		document.getElementById("p2ChoiceS").style.opacity = 0;
		document.getElementById("winner").style.opacity = 0;
		document.getElementById("winner").innerText = "";
		
		
		//make objects clickabale again
		document.getElementById("p1Piedra").style.pointerEvents = "";
		document.getElementById("p1Papel").style.pointerEvents = "";
		document.getElementById("p1Tijera").style.pointerEvents = "";
		document.getElementById("p2Piedra").style.pointerEvents = "";
		document.getElementById("p2Papel").style.pointerEvents = "";
		document.getElementById("p2Tijera").style.pointerEvents = "";
		
		
		document.getElementById("s1").disabled = true;
		document.getElementById("s2").disabled = true;
		document.getElementById("s1").innerText = "Start again";
		document.getElementById("s2").innerText = "Start again";
		document.getElementById("s2").style.opacity = "0";
		document.getElementById("s1").style.opacity = "0";
		startQ=0;
		ready = 0;
	}
	
	
	
	
	
	
	
	
	
}





function theWinner(p1, p2){
	
	if (p1=="Piedra" && p2=="Piedra"){
		document.getElementById("winner").innerText = "Draw";
		document.getElementById("winner").style.opacity = 100;
		
		document.getElementById("winner").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
		
		
		temp1Choosed = "";
		temp2Choosed = "";
		
		document.getElementById("p1Piedra").style.opacity = "0";
		document.getElementById("p1Papel").style.opacity = "0";
		document.getElementById("p1Tijera").style.opacity = "0";
		document.getElementById("p2Piedra").style.opacity = "0";
		document.getElementById("p2Papel").style.opacity = "0";
		document.getElementById("p2Tijera").style.opacity = "0";
		
	}
	else if (p1=="Papel" && p2=="Papel"){
		document.getElementById("winner").innerText = "Draw";
		document.getElementById("winner").style.opacity = 100;
		
		document.getElementById("winner").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
		
		
		temp1Choosed = "";
		temp2Choosed = "";
		
		document.getElementById("p1Piedra").style.opacity = "0";
		document.getElementById("p1Papel").style.opacity = "0";
		document.getElementById("p1Tijera").style.opacity = "0";
		document.getElementById("p2Piedra").style.opacity = "0";
		document.getElementById("p2Papel").style.opacity = "0";
		document.getElementById("p2Tijera").style.opacity = "0";
	}
	else if (p1=="Tijera" && p2=="Tijera"){
		document.getElementById("winner").innerText = "Draw";
		document.getElementById("winner").style.opacity = 100;
		
		document.getElementById("winner").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
		
		temp1Choosed = "";
		temp2Choosed = "";
		
		document.getElementById("p1Piedra").style.opacity = "0";
		document.getElementById("p1Papel").style.opacity = "0";
		document.getElementById("p1Tijera").style.opacity = "0";
		document.getElementById("p2Piedra").style.opacity = "0";
		document.getElementById("p2Papel").style.opacity = "0";
		document.getElementById("p2Tijera").style.opacity = "0";
	}
	
	
	else if (p1=="Piedra" && p2=="Papel"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name2").innerText;
		temp2Choosed = "p2Papel";
		temp1Choosed = "";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP2;
				
		document.getElementById("scoreP2").innerText = tempScoreP2;
		document.getElementById("scoreP2").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
	}
	else if (p1=="Piedra" && p2=="Tijera"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name1").innerText;
		temp1Choosed = "p1Piedra";
		temp2Choosed = "";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP1;
		document.getElementById("scoreP1").innerText = tempScoreP1;
		document.getElementById("scoreP1").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
		
	}
    // Created by ztonaz Twitter: @jonpatu 2021 June, Madrid Rock Paper scissors Piedra Papel Tijera
	else if (p1=="Papel" && p2=="Piedra"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name1").innerText;
		temp1Choosed = "p1Papel";
		temp2Choosed = "";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP1;
		document.getElementById("scoreP1").innerText = tempScoreP1;
		document.getElementById("scoreP1").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
	}
	else if (p1=="Papel" && p2=="Tijera"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name2").innerText;
		temp1Choosed = "";
		temp2Choosed = "p2Tijera";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP2;
		document.getElementById("scoreP2").innerText = tempScoreP2;
		document.getElementById("scoreP2").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
	}
	else if (p1=="Tijera" && p2=="Piedra"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name2").innerText;
		temp1Choosed = "";
		temp2Choosed = "p2Piedra";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP2;
		document.getElementById("scoreP2").innerText = tempScoreP2;
		document.getElementById("scoreP2").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
	}
	else if (p1=="Tijera" && p2=="Papel"){
		document.getElementById("winner").innerText = "The winner is " + document.getElementById("name1").innerText;
		temp1Choosed = "p1Tijera";
		temp2Choosed = "";
		
		document.getElementById("winner").style.opacity = 100;
		++tempScoreP1;
		document.getElementById("scoreP1").innerText = tempScoreP1;
		document.getElementById("scoreP1").animate([
		  // keyframes
		  { opacity: '0', transform: 'scale(1)' },
		  { opacity: '100', 	transform: 'scale(2)' }
		], {
		  // timing options
		  duration: 500,
		});
	
	}
	
}



function p1Piedraa(clicked){
	
		
	
	p1fin = clicked;
	if(p1fin == "p1Piedra"){
		p1fin = "Piedra";
	}
	else if (p1fin == "p1Papel"){
		p1fin = "Papel";
	}
	else if(p1fin == "p1Tijera"){
		p1fin = "Tijera";
	}
	
	
	document.getElementById("p1Piedra").style.opacity = "0"; 
	document.getElementById("p1Papel").style.opacity = "0";
	document.getElementById("p1Tijera").style.opacity = "0";
	document.getElementById("p1ChoiceS").style.opacity = "100";
	
	
	++ready;
	
	if (ready == 2){
		theWinner(p1fin, p2fin);
		document.getElementById("s2").style.opacity = "100";
		document.getElementById("s1").style.opacity = "100";
		document.getElementById("s1").disabled = false;
		document.getElementById("s2").disabled = false;
		document.getElementById("p1ChoiceS").style.opacity = "0";
		document.getElementById("p2ChoiceS").style.opacity = "0";
		
	
		
		
		
		if (temp1Choosed == "p1Piedra" || temp1Choosed == "p1Papel" || temp1Choosed == "p1Tijera"){
			document.getElementById(temp1Choosed).disabled = true;
			
			
			document.getElementById(temp1Choosed).animate([
		  // keyframes
		  { opacity: '0', transform: 'translateY(0px)' },
		  { opacity: '100', 	transform: 'translateY(300px)' }
		], {
		  // timing options
		  duration: 1500,
		});
			
			
			document.getElementById("p1Piedra").style.pointerEvents = "none";
			document.getElementById("p1Papel").style.pointerEvents = "none";
			document.getElementById("p1Tijera").style.pointerEvents = "none";
			document.getElementById("p2Piedra").style.pointerEvents = "none";
			document.getElementById("p2Papel").style.pointerEvents = "none";
			document.getElementById("p2Tijera").style.pointerEvents = "none";
			
		}
		else if (temp2Choosed == "p2Piedra" || temp2Choosed == "p2Papel" || temp2Choosed == "p2Tijera"){
			document.getElementById(temp2Choosed).disabled = true;
			
			document.getElementById(temp2Choosed).animate([
		  // keyframes
		  { opacity: '0', transform: 'translateY(0px)' },
		  { opacity: '100', 	transform: 'translateY(-300px)' }
		], {
		  // timing options
		  duration: 1500,
		});
			
			document.getElementById("p1Piedra").style.pointerEvents = "none";
			document.getElementById("p1Papel").style.pointerEvents = "none";
			document.getElementById("p1Tijera").style.pointerEvents = "none";
			document.getElementById("p2Piedra").style.pointerEvents = "none";
			document.getElementById("p2Papel").style.pointerEvents = "none";
			document.getElementById("p2Tijera").style.pointerEvents = "none";
			
		}
		
		
	}
	
	
	
}

function p2Piedraa(clicked){
	p2fin = clicked;
	if(p2fin == "p2Piedra"){
		p2fin = "Piedra";
	}
	else if (p2fin == "p2Papel"){
		p2fin = "Papel";
	}
	else if(p2fin == "p2Tijera"){
		p2fin = "Tijera";
	}
	
	
	
	document.getElementById("p2Piedra").style.opacity = "0"; 
	document.getElementById("p2Papel").style.opacity = "0";
	document.getElementById("p2Tijera").style.opacity = "0";
	document.getElementById("p2ChoiceS").style.opacity = "100";
	
	++ready;
	
	if (ready == 2){
		theWinner(p1fin, p2fin);
		document.getElementById("s2").style.opacity = "100";
		document.getElementById("s1").style.opacity = "100";
		document.getElementById("s2").disabled = false;
		document.getElementById("s1").disabled = false;
		document.getElementById("p1ChoiceS").style.opacity = "0";
		document.getElementById("p2ChoiceS").style.opacity = "0";
		
		
		
		
		
		if (temp1Choosed == "p1Piedra" || temp1Choosed == "p1Papel" || temp1Choosed == "p1Tijera"){
			document.getElementById(temp1Choosed).disabled = true;
			
			document.getElementById(temp1Choosed).animate([
		  // keyframes
		  { opacity: '0', transform: 'translateY(0px)' },
		  { opacity: '100', 	transform: 'translateY(300px)' }
		], {
		  // timing options
		  duration: 1500,
		});
			
			
			document.getElementById("p1Piedra").style.pointerEvents = "none";
			document.getElementById("p1Papel").style.pointerEvents = "none";
			document.getElementById("p1Tijera").style.pointerEvents = "none";
			document.getElementById("p2Piedra").style.pointerEvents = "none";
			document.getElementById("p2Papel").style.pointerEvents = "none";
			document.getElementById("p2Tijera").style.pointerEvents = "none";
			
		}
		else if (temp2Choosed == "p2Piedra" || temp2Choosed == "p2Papel" || temp2Choosed == "p2Tijera"){
			
			document.getElementById(temp2Choosed).disabled = true;
			
			document.getElementById(temp2Choosed).animate([
		  // keyframes
		  { opacity: '0', transform: 'translateY(0px)' },
		  { opacity: '100', 	transform: 'translateY(-300px)' }
		], {
		  // timing options
		  duration: 1500,
		});
			
			document.getElementById("p1Piedra").style.pointerEvents = "none";
			document.getElementById("p1Papel").style.pointerEvents = "none";
			document.getElementById("p1Tijera").style.pointerEvents = "none";
			document.getElementById("p2Piedra").style.pointerEvents = "none";
			document.getElementById("p2Papel").style.pointerEvents = "none";
			document.getElementById("p2Tijera").style.pointerEvents = "none";
		}
				
		
	}
	
	
}


function changeName(clicked){
	if (clicked=="change1"){
		document.getElementById("i1").style.display = "";
		document.getElementById("name1").style.display = "none";
		document.getElementById("change1").style.display = "none";
		document.getElementById("ok1").style.display = "";
		
	}
	else if (clicked=="change2"){
		document.getElementById("i2").style.display = "";
		document.getElementById("name2").style.display = "none";
		document.getElementById("change2").style.display = "none";
		document.getElementById("ok2").style.display = "";
		
	}
}

function ok(clicked){
	if(clicked == "ok1"){
		newName = document.getElementById("i1").value;
		document.getElementById("i1").innerText = " ";
		document.getElementById("i1").style.display = "none";
		document.getElementById("name1").innerText = newName;
		document.getElementById("name1").style.display = "";
		document.getElementById("change1").style.display = "";
		document.getElementById("ok1").style.display = "none";
	}
	else if(clicked == "ok2"){
		newName = document.getElementById("i2").value;
		document.getElementById("i2").innerText = " ";
		document.getElementById("i2").style.display = "none";
		document.getElementById("name2").innerText = newName;
		document.getElementById("name2").style.display = "";
		document.getElementById("change2").style.display = "";
		document.getElementById("ok2").style.display = "none";
	}
}



