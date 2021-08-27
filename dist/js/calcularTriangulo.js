// variables of the sides of triangle
let sideA = 0, sideB = 0, sideC = 0;



function findTriangleType() {
	sideA = parseInt(document.getElementById('sideA').value)
	sideb = parseInt(document.getElementById('sideB').value)
	sideC = parseInt(document.getElementById('sideC').value)

	let [d, e, f] = [sideA, sideb, sideC].map(sideA => +sideA || 0).sort((sideA,sideb) => sideA-sideb);
	let resultText = d + e <= f     ? "invalido"
           : d === f        ? "equilatero"
           : d < e && e < f ? "escaleno"
                            : "isosceles";

    var imgLink = "";                  
    if(resultText == "equilatero"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106529.png'
    }else if(resultText == "escaleno"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106665.png'
    }else if(resultText == "isosceles"){
    	imgLink = 'https://image.flaticon.com/icons/png/512/2106/2106544.png';
    }else{
    	imgLink = 'https://image.flaticon.com/icons/png/512/675/675564.png';
    }

    document.getElementById('sideA').value = '';
    document.getElementById('sideB').value = '';
    document.getElementById('sideC').value = '';

    document.getElementById('triangleImg').src = imgLink;
    document.getElementById('triangleType').innerHTML = resultText;
}
