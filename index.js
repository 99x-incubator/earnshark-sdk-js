var http = require('http');
const https = require('https');
var request = require('request');

 
exports.addNewSubscription = function(product_id, key, body) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/addsubscriptionfromapi?key='+ key;
    console.log(url);
    // Set the headers
    var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/json'
    }
    
    // Configure the request
    var options = {
        url: url,
        method: 'POST',
        headers: headers,
        json: body
    }
    
    console.log("Options..............");
    console.log(options);
    
    // Start the request
    request(options, function (error, response, body) {
        console.log(response)
        // if (!error && response.statusCode == 200) {
        //     // Print out the response body
        //     console.log(body)
        // }
    })

}

exports.getAccountInformation = function(product_id, key, account_id) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/subscriptioninfo/' + account_id+ '?key='+ key;
    
    https.get(url, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}

exports.getLicenseInformation = function(product_id, key, license_id) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/license/' + license_id+ '/getlicensefromapi?key='+ key;
    
    https.get(url, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);

        res.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
}