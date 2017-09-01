var earnsharknpm = require('earnshark-sdk');
var colors = require('colors');
var async = require("async");
 
//earnsharknpm.isTest(true); /* Uncomment to enable debug mode */

/* Initialize all variables needed*/
var account_id = 'ACCOUNT ID';
var product_id = 'PRODUCT ID'; // integer
var key = 'KEY';
var subscription_id = 'SUBSCRIPTION ID'; //integer
var new_license_id = 'LICENSE ID'; //integer
var redirect = "REDIRECT LINK";
var license_id = 'LICENSE ID'; // integer
var license_token = 'LICENSE TOKEN'

async.series([ function(callback) {
    /*gets account information*/
        console.log('Calling getAccountInformation'.inverse)
        earnsharknpm.getAccountInformation(product_id, key, account_id).then(function (data) {
            console.log('Retrieved account information: SUCCESS'.green);
            console.log(data)
            callback();
        }, function (err) {
            console.log('Unable to retrieve account information: ERROR'.magenta);
            console.log(err)
            callback();
        });

    }, function(callback) {
        /*get license information*/
        console.log('Calling getLicenseInformation'.inverse)
        earnsharknpm.getLicenseInformation(product_id, license_token, license_id).then(function(data) {
            console.log("Retrieved License information: SUCCESS!".green);
            console.log(data)
            callback();
        }, function(err) {
            console.log("Unable to retrieve account information: ERROR!".red);
            console.log(err)
            callback();
        });
      
    },  function(callback) {
        //get all product licenses
        console.log('Calling getAllLicensesOfProduct'.inverse)
        earnsharknpm.getAllLicensesOfProduct(product_id, key).then(function(data) {
            console.log("Retrieved all Licenses of Product: SUCCESS".green);
            console.log(data)
            callback();
        }, function(err) {
            console.log("Unable to retrieve all Licenses of Product: ERROR".red);
            console.log(err)
            callback();
        });
    
    },  function(callback) {
        //to create new account
        console.log('Calling addNewSubscription'.inverse)
        var body = {
            "account": {
                "name": "Account Name",
                "email": "Name@example.com",
                "accountID": "123456789",
                "start_date": "01/09/2017"
            },
            "license_id": 0,
            "enableNotifications": false,
            "sendInvoiceNow": true
        }

        earnsharknpm.addNewSubscription(product_id, key, body).then(function (data) {
            console.log("Created new subscription: SUCCESS!".green);
            console.log(data)
            callback();
        }, function (err) {
            console.log("Unable to create a new subscription: ERROR!".red);
            console.log(err)
            callback();
        })

    }, function(callback) {
        console.log('Calling getPaymentURL'.inverse)
        //get all payment details
        earnsharknpm.getPaymentURL(product_id, key, account_id, redirect).then(function (data) {
            console.log("Retreiving payment URL: SUCCESS!".green);
            console.log(data);
            callback();
        }, function (err) {
            console.log("Unable to retrieve paymemnt URL: ERROR!".red);
            console.log(err);
            callback();
        })

    }, function(callback) {
        console.log('Calling getAccountPayments'.inverse)
        //Get Account Payments
        earnsharknpm.getAccountPayments(product_id, account_id,key).then(function(data) {
            console.log("Retrieved account payments: SUCCESS!".green);
            console.log(data)
            callback();
        }, function(err) {
            console.log("Unable to retrieve account payments: Error!".red);
            console.log(err)
            callback();
        });

    }, function(callback) {
        console.log('Calling renewSubscription'.inverse)
        //Renew Subscription
        earnsharknpm.renewSubscription(product_id,key,subscription_id,new_license_id).then(function(data){
            console.log("Renewed Subscription: SUCCESS!".green);
            console.log(data)
            callback();
        },function(err){
            console.log("Unable to renew subscription: Error!".red);
            console.log(err)
            callback();
        });
    }
]);
