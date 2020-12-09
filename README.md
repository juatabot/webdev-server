
**Portfolio**

* GET `/api/portfolios`  
 Returns all portfolios

* GET `/api/users/:uid/portfolio`  
 Returns portfolio for given user id

* POST `/api/users/:uid/portfolio`  
	Body:     `{
        "id": "1",
        "userId": "1",
        "portfolioName": "name",
        "description": "description",
        "listOfTrades": [
            1,
            2,
            3
        ]
    }`  
Updates portfolio with given user id and portfolio id with request body

* POST `/api/users/:uid/portfolio`   
	Body:     `{
        "id": "1",
        "userId": "1",
        "portfolioName": "name",
        "description": "description",
        "listOfTrades": [
            1,
            2,
            3
        ]
    }`   
 Create portfolio for given user id with given portfolio
 
 * DELETE `'api/users/:uid/portfolio:pid`   
  Delete portfolio with given user id and portfolio id
  
**Trade**

* GET `/api/users/:uid/portfolio/:id/trades`  
Find trades for given user id in given portfolio id

* POST `'/api/users/:uid/portfolio/:pid/trades/:tid`
Body: `    {
        "id": "1",
        "userId": "1",
        "portfolioId": "1",
        "assetId": 1,
        "numShares": 10,
        "unitPrice": 1,
        "Date": "2020-12-3",
        "PLATFORM_TYPE": 0,
        "TRANSACTION_TYPE": "BUY"
    }`  
  Updates trade for given trade id for given user id in given portfolio id with request body
  
* DELETE `/api/users/:uid/portfolio/:pid/trades/:tid`
Deletes trade for given trade id for given user id in given portfolio id

**Stocks**

* GET `/api/users/:uid/stocks`  
Finds stocks for given user id

* POST `/api/users/:uid/stocks`  
Body `    {
		"id": "1",
        "userId": "1",
        "stockSymbol": "s1",
        "currentPrice": 1,
        "sharesAmt": 1
    }`  
Create stock for given user id

* POST `/api/users/:uid/stocks`  
Body `    {
        "id": "1",
        "userId": "3",
        "stockSymbol": "s3",
        "currentPrice": 3,
        "sharesAmt": 3
    }`  
 Updates stock for given user id with request body

* DELETE `/api/users/:uid/stocks/:sid`  
Delete stock for given user with given stock id

