const express = require('express');
const chalk = require('chalk');

const app = express();

app.set('port', process.env.PORT || 3008);

app.listen(app.get('port'), function (err) {
    if (err) {
         console.log(err)
         } else {

         console.log(chalk.green('server started on port'));
         }
})
