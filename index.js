var http = require('http'),
    https = require('https'),
    request = require('request'),
    BbPromise = require('bluebird');

var debug = false;

var baseURL = 'https://app.earnshark.com/prod/product/';

// var appDir = 'http://earnsharkbeta.com.s3-website-eu-west-1.amazonaws.com/';
//var appDir = 'http://app.earnshark.com/';


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

// Renew/Update a Subscription
exports.renewSubscription = function(product_id, key, subscription_id,new_license_id) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('{ "Date":"01/01/2016", "Cost":{ "value":"100", "currency":"USD" }, "Name":"5 Users Plan", "Product_ID":1, "Customer_ID":1, "Customer_Name":"Customer Name", "Account_ID":"123456", "Metadata":"{\"users\":\"10 users\"}", "Subscription_ID":1, "Tags":[ "10users" ], "License_ID":1, "Invalid":false, "Expired":false, "Billing_Cycle":{ "value":1, "type":"Monthly" }, "Description":"10 Users per month / 100", "Tenant_ID":"eu-west-1:00000000-0000-0000-0000-000000000000" }')
        });
    } else {

        var url = baseURL + product_id + '/subscription/' + subscription_id +'/apiRenewSubscription/'+ new_license_id +'?key=' + key;

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


// Get Information about a single license
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

// Get All the Licenses for a Product
exports.getAllLicensesOfProduct = function(product_id, key) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('[{"Name":"License Name","Cost":{"value":"10","currency":"USD"},"Tags":["free","test","trial"],"License_ID":1,"Product_ID":1,"Description":"Test","Billing_Cycle":{"value":1,"type":"Monthly"},"Metadata":"{}"}]')
        });
    } else {

        var url = baseURL + product_id + '/license/all?key=' + key;
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


// Retrieve All Payment Transactions for an Account
exports.getAccountPayments = function(product_id, account_id ,key) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('[ { "Amount":"100", "Created_At":"1474872974062", "Currency":"USD", "Product_ID":1, "PayPal_Transaction":"PAY-11111111111", "Updated_At":"1474872974062", "Account_ID":"local", "PayPal_Payer_ID":"111111", "Subscription_ID":1, "Payment_Processed":true, "Payout_ID":"12345", "Payment_Sent":true, "PayPal_Payment_ID":"PAY-11111111111" } ]')
        });
    } else {

        var url = baseURL + product_id + '/account/'+account_id+'/transactions?key=' + key;
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

//Get license transaction secure token
exports.getPaymentURL = function(product_id, key, account_id, redirect) {
    if (debug) {
        return new BbPromise(function(resolve, reject) {
            resolve('{ "status":"success", "message":"Subscription created without notifications and without invoice" }')
        });
    } else {
        var body = {
                "redirect" : redirect,
                "account_id": account_id,
                "product_id": product_id,
                "key": key
            }

        var url = 'https://app.earnshark.com/prod/payments/getTransactionID';
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
                    resolve(response.body);
                }
            });
        });
    }
};