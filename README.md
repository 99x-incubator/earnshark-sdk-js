# earnshark-sdk-js

[![Join the chat at https://gitter.im/99xt/earnshark-sdk-js](https://badges.gitter.im/99xt/earnshark-sdk-js.svg)](https://gitter.im/99xt/earnshark-sdk-js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![npm version](https://badge.fury.io/js/earnshark-sdk.svg)](https://badge.fury.io/js/earnshark-sdk)
[![license](https://img.shields.io/npm/l/earnshark-sdk.svg)](https://www.npmjs.com/package/earnshark-sdk)
 
This is a JavaScript SDK to call https://app.earnshark.com API. Contains methods to call the EarnShark API making the application integration fast. 

## This Plugin Requires
* NodeJS Runtime Environment

## Installation

`npm install earnshark-sdk`

Then you will be able to access the EarnShark API through your code.

After installation require the EarnShark npm through: `var earnsharknpm = require('earnshark-sdk');`

## Available Methods
* getAccountInformation - Retrieve information on a particular account/subscription
* getLicenseInformation - Retrieve information on a particular license
* addNewSubscription - Add a new subscription to a product
* getPaymentURL - Returns the payment portal URL for a subscription(linked to PayPal)


##Usage Sample

To Switch between Debug and Live modes use the following function,

`earnsharknpm.isTest(true);`

Initialize the ID's needed

```
var earnsharknpm = require('earnshark-sdk');

var key = 'YOUR KEY FROM EarnShark Dashboard';

var account_id = 'ACCOUNT_ID';

var product_id = 'PRODUCT_ID;` // integer
```
###To retrieve the account information###
```
earnsharknpm.getAccountInformation(product_id,key,account_id).then(function(data){
    console.log(data)
},function(err){
    console.log(err)
});

var license_id = 'ID'; // integer

var license_token = 'YOUR LICENSE TOKEN'
```
###To get the information related to a license###
```
earnsharknpm.getLicenseInformation(product_id, license_token, license_id).then(function(data) {
    console.log(data)

}, function(err) {
    console.log(err)
});
```
###To create a new user account###
```
var body = {
            "account":{
                    "name":"Account Name",
                    "email":"Account@example.com",
                    "accountID":"123456",
                    "start_date":"01/01/2016"
                },
                "license_id":0,
                "enableNotifications" : false,
                "sendInvoiceNow" : true
            }

earnsharknpm.addNewSubscription(product_id, key, body).then(function(data) {
    console.log(data)

}, function(err) {
    console.log(err)
})

```



 
