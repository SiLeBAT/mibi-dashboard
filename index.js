const express = require('express');
const app = express();
const ParseDashboard = require('parse-dashboard');


const SERVER_URL = "";
const APP_ID = "";
const MASTER_KEY = "";
const APP_NAME = "";

const dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: SERVER_URL,
      appId: APP_ID,
      masterKey: MASTER_KEY,
      appName: APP_NAME,
    }
  ]
});

app.use('/', dashboard);


app.listen(process.env.port || 3003);
console.log('Web Server is listening at port ' + (process.env.port || 3000));