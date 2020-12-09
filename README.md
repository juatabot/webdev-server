Exposes the following endpoints

Portfolio
GET `/api/portfolios`
Returns all portfolios

GET `/api/users/:uid/portfolio`
Returns portfolio for given user id

POST `/api/users/:uid/portfolio'
Body:     {
        "id": "1",
        "userId": "1",
        "portfolioName": "name",
        "description": "description",
        "listOfTrades": [
            1,
            2,
            3
        ]
    }
Updates portfolio with given user id and portfolio id.
