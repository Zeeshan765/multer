var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors');
//app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, "public")));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use('/public', express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
//app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/products', productsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//MongoDb Connection
mongoose
  .connect('mongodb://localhost/multer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDb....'))
  .catch((error) => console.log(error.message));

module.exports = app;
