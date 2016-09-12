var http = require('http'),
    https = require('https'),
    request = require('request'),
    BbPromise = require('bluebird');

var debug = false;

var baseURL = 'https://app.earnshark.com/prod/product/';

var appDir = 'http://earnsharkbeta.com.s3-website-eu-west-1.amazonaws.com/';

exports.isTest = function(newdebug) {
    debug = newdebug;
};

// Adding new Subscription 
exports.addNewSubscription = function(product_id, key, body) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('{ "status":"success", "message":"Subscription created without notifications and without invoice" }')
        });
    } else {

        var url = baseURL + product_id + '/addsubscriptionfromapi?key=' + key;

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

        return new BbPromise(function(resolve, reject) {
            request(options, function(error, response, body) {
                if (error) {
                    reject(error)
                } else {
                    resolve(response.body)
                }
            });
        });

    }

};


// Get User account Information 
exports.getAccountInformation = function(product_id, key, account_id) {

    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('[ { "Date":"01/01/2016", "Cost":{ "value":"100", "currency":"USD" }, "Name":"5 Users Plan", "Product_ID":1, "Customer_ID":1, "Customer_Name":"Customer Name", "Account_ID":"123456", "Metadata":"{\"users\":\"10 users\"}", "Subscription_ID":1, "Tags":[ "10users" ], "License_ID":1, "Invalid":false, "Expired":false, "Billing_Cycle":{ "value":1, "type":"Monthly" }, "Description":"10 Users per month / 100", "Tenant_ID":"eu-west-1:00000000-0000-0000-0000-000000000000" } ]')
        });
    } else {

        var url = baseURL + product_id + '/subscriptioninfo/' + account_id + '?key=' + key;

        var headers = {
                'User-Agent': 'Super Agent/0.0.1',
                'Content-Type': 'application/json'
            },
            options = {
                url: url,
                method: 'GET',
                headers: headers
            };

        return new BbPromise(function(resolve, reject) {
            request(options, function(error, response, body) {
                if (error) {
                    reject(error)
                } else {
                    resolve(response.body)
                }
            });
        });

    }
};


exports.getLicenseInformation = function(product_id, key, license_id) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('{ "Name":"License Name", "Cost":{ "value":"100", "currency":"USD" }, "Tags":[ "10 User Package" ], "License_ID":1, "Product_ID":1, "Description":"10 Users per month / 100", "Billing_Cycle":{ "value":1, "type":"Monthly" }, "Metadata":"{\"users\":\"10\"}" }')
        });
    } else {

        var url = baseURL + product_id + '/license/' + license_id + '/getlicensefromapi?key=' + key;
        var headers = {
                'User-Agent': 'Super Agent/0.0.1',
                'Content-Type': 'application/json'
            },
            options = {
                url: url,
                method: 'GET',
                headers: headers
            };

        return new BbPromise(function(resolve, reject) {
            request(options, function(error, response, body) {
                if (error) {
                    reject(error)
                } else {
                    resolve(response.body)
                }
            });
        });
    }
};

// Generate the payment url for license payments
exports.getPaymentURL = function(product_id, key, account_id, redirect) {
    return appDir + 'payment.html?redirect=' + redirect + '&productID=' + product_id + '&accountID=' + account_id + '&key=' + key;
};