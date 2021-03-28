const fs = require('fs');
const axios = require('axios');

function handleOutput(path) {
	fs.readFile(path, 'utf8', (err, data) => {
		if (err) {
			console.error(`Error reading ${path}: ${err}`);
		} else {
			let urls = data.split('\n');
			getURLs(urls);
		}
	});
}

async function getURLs(urlArray) {
	for (let i = 0; i < urlArray.length; i++) {
		try {
			let res = await axios.get(urlArray[i]);
			let url = extractURLFileName(urlArray[i]);
			write(url, res.data);
		} catch (err) {
			console.error(`Couldn't download ${urlArray[i]}: ${err}`);
		}
	}
}

function write(outTo, data) {
	fs.writeFile(outTo, data, 'utf8', (err) => {
		if (err) {
			console.log(`Error writing to ${outTo} : ${err}`);
		}
		console.log(`Wrote to ${outTo}`);
	});
}

function extractURLFileName(url) {
	let start = url.indexOf(':') + 3;
	let end;
	if (url.indexOf('.com') !== -1) {
		end = url.indexOf('.com') + 4;
	} else {
		end = url.indexOf('.org') + 4;
	}
	return url.slice(start, end);
}

handleOutput(process.argv[2]);
