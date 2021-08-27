// variables of the sides of triangle
let a = 0, b = 0, c = 0;


function findTriangleType() {

	// will get the elements and parse them to INT 
	a = parseInt(document.getElementById('sideA').value)
	b = parseInt(document.getElementById('sideB').value)
	c = parseInt(document.getElementById('sideC').value)

	//Always will reset the animation values to the default value.
	animationSet();

	//we call the method getTriangleType  and will get  a string value
    let resultText = getTriangleType();                      

                     
    //Depending  on the return value of getTriangleType()
    //we will set the corresponding img to display the user
    var imgLink = "";                  
    if(resultText == "equilatero"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106529.png'
    }else if(resultText == "escaleno"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106665.png'
    }else if(resultText == "isosceles"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106544.png';
    }else{
    	resultText = 'Los datos son invalidos!'
    	imgLink = 'https://image.flaticon.com/icons/png/512/675/675564.png';
    }

    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';

    document.getElementById('triangleImg').src = imgLink;
    document.getElementById('triangleType').innerHTML = resultText;
    document.getElementById('cardId').className  = 'card shadow p-3 mb-5 bg-white rounded animate__animated animate__tada ';
    
}


/*This method will validate if the user enter correct values 
and will return the type  of triangle*/
function getTriangleType() {

	if (a + b <= c || b + c <= a || c + a <= b || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || a == "" || b == "" || c == ""){
  		return "invalido";
	}
	else if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
  		return "equilatero";
	}
	else if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
  		return "isosceles";
	}
	else {
 		return "escaleno";
	}  
}


/*This is another method  to know wich type of triangle 
we got, but this method is not call at the moment
is just for validate purposses. 
*/
function getTriangleTypeMethodTwo() {
	let [a, b, c] = [sideA, sideb, sideC].map(sideA => +sideA || 0).sort((sideA,sideb) => sideA-sideb);

	let resultText = a + b <= c     ? "invalido"
           : a === c        ? "equilatero"
           : a < b && b < c ? "escaleno"
                            : "isosceles";
    return resultText;
}




function animationSet() {
	let animation = document.getElementById('cardId');
	animation.style.animation = 'none';
	animation.offsetHeight;
	animation.style.animation = null;

}

