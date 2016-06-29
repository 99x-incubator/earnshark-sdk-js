var http = require('http'),
    https = require('https'),
    request = require('request'),
    BbPromise = require('bluebird');

exports.addNewSubscription = function (product_id, key, body) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/addsubscriptionfromapi?key=' + key;

    var headers = {
            'User-Agent': 'Super Agent/0.0.1',
            'Content-Type': 'application/json'
        },
        options = {
            url: url,
            method: 'POST',
            headers: headers,
            json: body
        };

    return new BbPromise(function (resolve) {
        request(options, function (error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log("Subscription Added : " + response);
            }
        });
    });

    request(options, function (error, response, body) {
        console.log(response);
    });
};

exports.getAccountInformation = function (product_id, key, account_id) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/subscriptioninfo/' + account_id + '?key=' + key;

    https.get(url, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    }).on('error', (e) => {
        console.error(e);
    });
};

exports.getLicenseInformation = function (product_id, key, license_id) {
    var url = 'https://app.earnshark.com/prod/product/' + product_id + '/license/' + license_id + '/getlicensefromapi?key=' + key;

    https.get(url, (res) => {
        console.log('statusCode: ', res.statusCode);
        console.log('headers: ', res.headers);
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    }).on('error', (e) => {
        console.error(e);
    });
};
