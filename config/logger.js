import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, json } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json()
  ),
  transports: [
    new transports.File({ filename: 'app.log' }),
    new transports.Console()
  ]
});

export default logger;