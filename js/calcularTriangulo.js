// variables of the sides of triangle
let sideA = 0, sideB = 0, sideC = 0;

function findTriangleType() {
	sideA = parseInt(document.getElementById('sideA').value)
	sideb = parseInt(document.getElementById('sideB').value)
	sideC = parseInt(document.getElementById('sideC').value)

	let [d, e, f] = [sideA, sideb, sideC].map(sideA => +sideA || 0).sort((sideA,sideb) => sideA-sideb);
	let result = d + e <= f     ? "invalid"
           : d === f        ? "equilateral"
           : d < e && e < f ? "scalene"
                            : "isosceles";
    console.log(result)                

}
