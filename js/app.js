
$(document).ready(function() {
	for (var i =1;i<101;i++){


		if(i%3==0 && i%5==0){
			var p = document.createElement("p");
			p.innerHTML=("fizz buzz");
			$(".container").append(p);
			
		}
		else if(i%3==0){
				var p = document.createElement("p");
				p.innerHTML=("fizz");
				$(".container").append(p);
		}

		else if (i%5==0){
			
			var p = document.createElement("p");
				p.innerHTML=("buzz");
				$(".container").append(p);
		}
		

		else{
			
			var p = document.createElement("p");
				p.innerHTML=i;
				$(".container").append(p);
		}



	};

});