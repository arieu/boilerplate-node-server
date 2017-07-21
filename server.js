const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const chalk = require('chalk');

const app = express();

app.set('port', process.env.PORT || 3008);
app.use(logger('dev'));

app.use('/', express.static(__dirname + '/public'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.sendFile('index.html');
})

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log(err)
     } else {
       console.log(chalk.green.bgBlack(`✓ Server Started on Port ${app.get('port') + ' in ' + app.get('env')}`));
     }
})
