To run  
`apt install sqlite3` (?)  
`npm install`  
`node server.js`  

Front end  
`ng serve --open`  
`ng serve`


API documentation is outdated.


**Login/Register**
* POST `/api/login`  
  Body:   `{
        "username": "name",
        "pwd": "my_password",
    }`  
 Login and return user if exists

* POST `/api/register`  
  Body:   `{
        "username": "name",
        "pwd": "my_password",
    }`  
 Register new user

* POST `/api/currentUser`
 Return current user

* POST `/api/logout`
 Logout

**Portfolio**

* GET `/api/portfolios`  
 Returns all portfolios

* GET `/api/users/:uid/portfolios`  
 Returns portfolio for given user id

* POST `/api/portfolios/:pid`  
	Body:     `{
        "portfolioName": "name",
        "description": "description",
    }`  
Updates portfolio with given user id and portfolio id with request body

* PUT `/api/users/:uid/portfolios`  
 Create portfolio for given user id
 
 * DELETE `'api/portfolio/:pid`   
  Delete portfolio with given portfolio id
  
**Trade**

* GET `/api/users/:uid/trades`  
Find trades for given user id

* PUT `/api/users/:uid/trades`   
  Creates trade for given user

* POST `/api/trades/:tid`
  Body `    {
            portfolioId: "1",
            stockId: "1",
            tradeDate: "2020-1-02",
            platformType: "??",
            transactionType: "BUY"
    }`   
  Update trade with given trade id and body
  
* DELETE `/api/trades/:tid`  
  Deletes trade for given trade id

**Stocks**

* GET `/api/users/:uid/stocks`  
  Finds stocks for given user id

* PUT `/api/users/:uid/stocks`    
  Create stock for given user id

* POST `/api/users/:uid/stocks`  
  Body `    {
        "stockSymbol": "s3",
        "currentPrice": 3,
        "sharesAmt": 3
    }`  
 Updates stock for given stock id with request body

* DELETE `/api/stocks/:sid`  
  Delete stock with given stock id

