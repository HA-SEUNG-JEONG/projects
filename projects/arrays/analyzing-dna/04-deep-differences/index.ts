// Write your deepDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function deepDifferences(a: string[][], b: string[][]) {
	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) return undefined;

		if (a[i].length === b[i].length) {
			// If a[i] and b[i] have the same length, an array where, for each index:
			// If a[i] and b[i] have the same element at that index: that element
			// If a[i] and b[i] have different elements at that index, undefined
			for (let j = 0; j < a[i].length; j++) {
				if (a[i][j] === b[i][j]) return a[i][j];
				return undefined;
			}
		}
	}
}
