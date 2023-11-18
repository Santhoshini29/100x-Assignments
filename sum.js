function printContent(error, data) {
	console.log(data);
}

fs.read("file.txt", printContent) // Callback Version
fs.read("file.txt").then(printContent) // Promise Version