// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.

export type AlignmentOptions = {
	align?: "left" | "middle" | "right";
	width: number;
};

export function alignTexts(texts: string[], options: AlignmentOptions) {
	const alignTextsLines: string[][] = [];

	for (const text of texts) {
		const lines = splitLines(text, options.width);
		const aligned = alignLines(lines, options);

		alignTextsLines.push(aligned);
	}
	return alignTextsLines;
}

function splitLines(text: string, width: number) {
	const lines: string[] = [];
	let currentLine = "";

	for (const word of text.split(" ")) {
		if (currentLine === "") currentLine = word;
		else if (currentLine.length + word.length < width) currentLine += `${word}`;
		else {
			lines.push(currentLine);
			currentLine = word;
		}
	}
	lines.push(currentLine);
	return lines;
}

function alignLines(
	lines: string[],
	{ align = "left", width }: AlignmentOptions
) {
	const aligned: string[] = [];

	for (const line of lines) {
		const remainingSpaces = width - line.length;

		let newLine = line;

		if (remainingSpaces) {
			switch (align) {
				case "left":
					for (let i = 0; i < remainingSpaces; i++) newLine += " ";
					break;
				case "middle":
					const spaces = Math.floor(remainingSpaces / 2);
					for (let i = 0; i < spaces; i++) newLine += " ";
					for (let i = 0; i < remainingSpaces - spaces; i++) newLine += " ";
					break;
				case "right":
					for (let i = 0; i < remainingSpaces; i++) newLine += " ";
					break;
				default:
					break;
			}
		}
		aligned.push(newLine);
	}
	return aligned;
}
