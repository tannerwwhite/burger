// Import MySQL connection.
let connection = require("../config/connection.js");


function printQuestionMarks(num) {
    let questionMarkArr = [];

    for (var i = 0; i < num; i++) {
        questionMarkArr.push("?");
    }

    return questionMarkArr.toString();
}

// Helper function for generating My SQL syntax
function objectToSql(object) {
    let objectArr = [];

    for (var key in object) {
        let value = object[key];
        objectArr.push(key + "=" + value);
    }

    // translate array of strings to a single comma-separated string
    return objectArr.toString();
}

// Object for all our SQL statement functions.
let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // Return results in callback
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            // Return results in callback
            cb(result);
        });
    },

    // Function that updates a single table entry
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            // Return results in callback
            cb(result);
        });
    },
};

// Export the orm object for the model (burger.js).
module.exports = orm;