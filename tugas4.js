var tinggiBadan1 = 185
var tinggiBadan2 = 155
var tinggiBadan3 = 170

console.log("Tinggi Badan 1 adalah ", tinggiBadan1)
console.log("Tinggi Badan 2 adalah ", tinggiBadan2)
console.log("Tinggi Badan 3 adalah ", tinggiBadan3)

console.log("Urutan dari tertinggi ke terendah")

if(tinggiBadan1 > tinggiBadan2){
	if(tinggiBadan1 > tinggiBadan3){
		console.log("Paling tinggi adalah ", tinggiBadan1)
		if(tinggiBadan3 > tinggiBadan2){
			console.log("Urutan Tinggi adalah ", tinggiBadan1, ", ", tinggiBadan2, ", ", tinggiBadan3)
		}		
	}else{
		console.log("Paling tinggi adalah ", tinggiBadan3)
		console.log("Urutan Tinggi adalah ", tinggiBadan3, ", ", tinggiBadan1, ", ", tinggiBadan2)
	}
}else{
	if(tinggiBadan2>tinggiBadan3){
		console.log("Paling tinggi adalah ", tinggiBadan2)
		if(tinggiBadan3>tinggiBadan1){
			console.log("Urutan Tinggi adalah ", tinggiBadan2, ", ", tinggiBadan3, ", ", tinggiBadan1)	
		}else{
			console.log("Urutan Tinggi adalah ", tinggiBadan2, ", ", tinggiBadan1, ", ", tinggiBadan3)
		}
	}else{
		console.log("Paling tinggi adalah ", tinggiBadan3)
		console.log("Urutan Tinggi adalah ", tinggiBadan3, ", ", tinggiBadan2, ", ", tinggiBadan1)
	}
}