
const mysql = require('mysql');
const env = process.env.NODE_ENV || 'development';
let config = require('./config.json')[env];
if (!config) {
    config = process.env.DATABASE_URL;
}
const connection = mysql.createConnection(config);


connection.connect((err) => {
    if (err) {
        console.error("ERROR Connection to Database: " + err.stack);
        return;
    }
    console.log("SUCCESS Connected to DB as Id " + connection.threadId);
});

module.exports = connection;