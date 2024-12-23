function fibs(num) {
	if (num <= 0) return undefined;
	if (num === 1) return [0];
	if (num === 2) return [0, 1];

	let sequence = [0, 1];
	for (let i = 2; i < num; i++) {
		sequence.push(sequence[i - 2] + sequence[i - 1]);
	}
	return sequence;
}

function fibsRec(goalLength, currentIndex = 2, sequence = [0,1]) {
	console.log("This was printed recursively");

	if (goalLength <= 0) return undefined;
	if (goalLength === 1) return [0];
	if (goalLength === 2) return [0, 1];

	if (currentIndex < goalLength) {
        let nextValueInSequence = sequence[currentIndex - 2] + sequence[currentIndex - 1];
		return fibsRec(goalLength, currentIndex + 1, sequence.concat(nextValueInSequence));
	}
	return sequence;
}

let testNum = 8;
console.log("fibs", fibs(testNum));
console.log("fibsRec", fibsRec(testNum));
