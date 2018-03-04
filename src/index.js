module.exports = function getZerosCount(number, base) {
  // your implementation
var arr=[];
for (var i=0; i<256; i++) {
arr[i]=i;
}

var arrD=[];
for (var i=2; i<arr.length; i++) {
	if (base%arr[i]===0) {
	arrD.push(arr[i]);
	}
}

var arrF=[];
for (var i=2; i<arr.length; i++) {
	while (base%arr[i]==0) {
		base=base/arr[i];
		arrF.push(arr[i]);
	}
}

var arrN=[];
 function prime(num) {
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

for(var i = 0; i < arrD.length; i++){
	if(prime(arrD[i]))
	arrN.push(arrD[i]);
}

var c=0;
var c1=0;
var c2=0;
for (var i=0; i<arrF.length; i++) {
	for (var j=0; j<arrN.length; j++) {
		if (arrF[i]==arrN[0]) {
			c=c+1;
			break;
			} else if (arrF[i]==arrN[1]) {
				c1=c1+1;
				break;
				} else if (arrF[i]==arrN[2]) {
					c2=c2+1;
					break;
					}
	}
}

function zeros(number,prime,exponent) {
	var zer=0;
	var numb=number;
	while (numb>=prime) {
		numb=Math.floor(numb/prime);
		zer=zer+numb;
		var zerEnd=Math.floor(zer/exponent);
	} 
	return zerEnd;
}

var z=zeros(number,arrN[0],c);
var z1=zeros(number,arrN[1],c1);
var z2=zeros(number,arrN[2],c2);

var arrZ=[];
if (z!=undefined) {
	arrZ.push(z);
	} if (z1!=undefined) {
		arrZ.push(z1);
		} if (z2!=undefined) {
			arrZ.push(z2);
			}

function compareFunction(a, b) {
return a - b;
} 
arrZ.sort(compareFunction);

return arrZ[0];
}