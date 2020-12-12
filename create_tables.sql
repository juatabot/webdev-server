CREATE TABLE IF NOT EXISTS user (
  iduser INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR(45) UNIQUE,
  pwd VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS portfolio (
  idportfolio INTEGER PRIMARY KEY AUTOINCREMENT,
  userId VARCHAR(45),
  portfolioName VARCHAR(45),
  portfolioDescription VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS stock (
  idstock INTEGER PRIMARY KEY AUTOINCREMENT,
  userId VARCHAR(45),
  stockSymbol VARCHAR(45),
  currentPrice VARCHAR(45),
  sharesAmt VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS trade (
  idtrade INTEGER PRIMARY KEY AUTOINCREMENT,
  userId VARCHAR(45),
  portfolioId VARCHAR(45),
  stockID VARCHAR(45),
  tradeDate VARCHAR(45),
  platformType VARCHAR(45),
  transactionType VARCHAR(45)
);