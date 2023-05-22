// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(a: string[][], b: string[][]) {
	// return boolean indicating whether a and b contain the same string arrays
	// return JSON.stringify(a) === JSON.stringify(b);

	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) return false;
		if (a[i].join("") !== b[i].join("")) return false;
	}
	return true;
}
