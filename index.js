"use strict";
const winston = require('winston');
const kb300 = 300000;
const fs = require('fs');

const logsFolder = './logs';
if (!fs.existsSync(logsFolder)){
    fs.mkdirSync(logsFolder);
}

module.exports = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)({ level: 'debug' }),
            new (winston.transports.File)({
                name: "file#debug",
                filename: `${logsFolder}/debug.log`,
                maxsize: kb300,
                maxFiles: 3,
                level: 'debug'
            }),
            new (winston.transports.File)({
                name: "file#error",
                filename: `${logsFolder}/error.log`,
                maxsize: kb300,
                maxFiles: 3,
                level: 'error'
            })
        ]  
    }); 

