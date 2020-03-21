const express = require('express');
const log4js = require('log4js');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const cookieParser = require('cookie-parser');


// set logger 
const logger = log4js.getLogger();
logger.level = 'all';


const app = express();
app.use(cookieParser());

app.use(helmet());
app.use(xss());
app.use(cors());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);
app.use(hpp());





const PORT =  process.env.PORT || 5000;
const server = app.listen(
  PORT,
  logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)