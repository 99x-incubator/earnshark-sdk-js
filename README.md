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
* getAllLicensesOfProduct - Retrieve all the license data for a particular product
* addNewSubscription - Add a new subscription to a product
* getPaymentURL - Returns the payment portal URL for a subscription(linked to PayPal)
* getAccountPayments - Returns all the payment transactions associated with the account


##Usage Sample

To Switch between Debug and Live modes use the following function,

`earnsharknpm.isTest(true);`

Initialize the ID's needed

```javascript
var earnsharknpm = require('earnshark-sdk');

var key = 'YOUR KEY FROM EarnShark Dashboard';

var account_id = 'ACCOUNT_ID';

var product_id = 'PRODUCT_ID'; // integer
```
###To retrieve the account information###
```javascript
earnsharknpm.getAccountInformation(product_id,key,account_id).then(function(data){
    console.log(data)
},function(err){
    console.log(err)
});

```
###To get the information related to a license###
```javascript
var license_id = 'ID'; // integer

var license_token = 'YOUR LICENSE TOKEN'

earnsharknpm.getLicenseInformation(product_id, license_token, license_id).then(function(data) {
    console.log(data)

}, function(err) {
    console.log(err)
});
```
###To get all the product licenses###
```javascript
earnsharknpm.getAllLicensesOfProduct(product_id, key).then(function(data) {
    console.log(data)
    
}, function(err) {
    console.log(err)
});
```
###To create a new user account###
```javascript
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
###Generate Payment URL for an Account###
```javascript
earnsharknpm.getPaymentURL(product_id, key,  data.account_id, data.redirect)
```
###To retrieve All Payment Transactions for an Account###
```javascript
earnsharknpm.getAccountPayments(product_id, account_id,key).then(function(data) {
    console.log(data)
}, function(err) {
    console.log(err)
});
```



 
