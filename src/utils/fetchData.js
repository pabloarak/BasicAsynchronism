let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (urlAPI) => {

    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET',urlAPI, true);

        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) { 
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', urlAPI));
            }
        });

        xhttp.send();
    })
};

module.exports = fetchData;