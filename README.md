Application that authorizes a transaction for a specific account following a set of predefined rules

---

## Install dependeces

Run `yarn` or `npm install` to add project dependeces

## Run Application as development


Run `yarn dev` or `npm run dev`

Provide a `json` lines as input in the `stdin`, and receive
a `json` line output for each one.

### Sample usage

```
$ cat operations
{ "account": { "activeCard": true, "availableLimit": 100 } }
{ "transaction": { "merchant": "Burger King", "amount": 20, "time": "2019-02-13T10:00:00.000Z" } }
{ "transaction": { "merchant": "Habbib's", "amount": 90, "time": "2019-02-13T11:00:00.000Z" } }

$ authorize < operations

{ "account": { "activeCard": true, "availableLimit": 100 }, "violations": [] }
{ "account": { "activeCard": true, "availableLimit": 80 }, "violations": [] }
{ "account": { "activeCard": true, "availableLimit": 80 }, "violations": [ "insufficient-limit" ] }

```

### Violations rules

-  Once created, the account should not be updated or recreated: `account-already-initialized`.

-  The transaction amount should not exceed available limit: `insufficient-limit`

-  No transaction should be accepted when the card is not active: `card-not-active`

-  There should not be more than 3 transactions on a 2 minute interval: `high-frequency-small-interval`

-  There should not be more than 2 similar transactions (same amount and merchant) in a 2 minutes interval: `doubled-transaction`

## Run as production

Run `yarn build` or `npm run build`

## Run tests Application

Run `yarn test` or `npm run test` to code test

## Stack Used

* Node.js - To develop the application
* Sucrase/Babel - To compile
* Nodemon - To auto reload application
* ESlint / Prettier - To identifying, reporting and auto fix on patterns in JavaScript
* Jest - To test the code
