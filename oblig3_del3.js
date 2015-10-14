

	
			
			function sirkel(x,y, width, farge, life) {
				var ctx = document.getElementById("hangdraw").getContext("2d");
			// --- initial circle	
				
			if (life === 1){	
				ctx.beginPath();
				ctx.arc( x, y-20 , 40, 0, Math.PI*2);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
			}
				
		if (life === 2){
			// --- EYE ONE	
				ctx.beginPath();
				ctx.arc( x-15, y-35 , 5, 0, Math.PI*2);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
			// ----- EYE TWO
				ctx.beginPath();
				ctx.arc( x+15, y-35 , 5, 0, Math.PI*2);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
		}	
			
				
		if (life === 3){
			// ---- MOUTH 
				ctx.beginPath();
				ctx.arc( x, y-10 , 20, 0, Math.PI);
				ctx.lineWidth = 5;
				ctx.strokeStyle = farge;
				ctx.stroke();
		}		
				
				
		if (life === 4){
			//------ BODY
				ctx.beginPath();
				ctx.lineWidth = width-1;
				ctx.strokestyle = farge;
				ctx.moveTo(x,y+20);
				ctx.lineTo(x, parseInt(y)+130);
				ctx.stroke();
		}
				
		if (life === 5){
			// ------ ARMER
				ctx.beginPath();
				ctx.rect(x, y+35, 80, 1);
				ctx.lineWidth = width-4;
				ctx.strokeStyle = farge;
				ctx.stroke();
				
			// ------- ARM 2
				ctx.beginPath();
				ctx.rect(x-80, y+35, 80, 1);
				ctx.lineWidth = width-4;
				ctx.strokeStyle = farge;
				ctx.stroke();
		}
			// ----- HANGEQUIPMENT!!!!
			
		if (life === 6){
			// --- BASE	
				ctx.beginPath();
				ctx.rect(x-250, y+200, 500, 20);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
		}
		

		if (life === 7){
			// ----- SUPPORT
				ctx.beginPath();
				ctx.rect(x-130, y-150, 25, 350);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
				
			// ------ SUPPORT 2
				ctx.beginPath();
				ctx.rect(x-175, y-140, 325, 15);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
		}
		
		
		if (life === 8){
			// ----- SUPPORT 3
				ctx.beginPath();
				ctx.rotate(-50*Math.PI/180);
				ctx.fillRect(x-475, y+25, 115, 10);
				ctx.lineWidth = width;
				ctx.strokeStyle = farge;
				ctx.stroke();
				
			// -------- LEGS
				ctx.beginPath();
				ctx.fillRect(x-600, y+250, 65, 4);
				ctx.lineWidth = width-4;
				ctx.strokeStyle = farge;
				ctx.stroke();
			// ------LEGS 2
				ctx.beginPath();
				ctx.rotate(100*Math.PI/180);
				ctx.fillRect(x+248, y-365, 65, 4);
				ctx.lineWidth = width-4;
				ctx.strokeStyle = farge;
				ctx.stroke();
			// --------- CHOKEROPE
				ctx.rotate(-50*Math.PI/180);
				ctx.lineWidth = width-3;
				ctx.strokestyle = farge;
				ctx.moveTo(x,y-125);
				ctx.lineTo(x, y-58 );
				ctx.stroke(); 
			}

    }
