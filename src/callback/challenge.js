let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

const getData = (urlAPI, callback) => {
	let xhttp = new XMLHttpRequest();

	xhttp.open('GET',urlAPI, true); // Third value active the asynchronism

	xhttp.onreadystatechange = (event) => {
		if(xhttp.readyState === 4) { // 4 : is completed
			if(xhttp.status === 200) {
				callback(null, JSON.parse(xhttp.responseText))
			} else {
				const error = new Error('Error: ' + urlAPI);
				return callback(error, null);
			}
		}
	};

	xhttp.send();
};

getData(API, (error1,data1) => {
	if(error1) return console.error(error1);

	getData(API + data1.results[0].id, (error2,data2) => {
		if(error2) return console.error(error2);

		getData(data2.origin.url, (error3,data3) => {
			if(error3) return console.error(error3);

			console.log(data1.info.count);
			console.log(data2.name);
			console.log(data3.dimension);

			// ... CALLBACK HELL ... //
			// ...
			// ...
			// ...

		});
	});
});