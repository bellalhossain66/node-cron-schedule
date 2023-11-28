const express = require('express');
const app = express();
const cron = require('node-cron');

cron.schedule('* * * * * *',() => {
    console.log('cron is ready for each second');
})

app.listen(8080, () => {
    console.log('server is listening on port 8080');
})