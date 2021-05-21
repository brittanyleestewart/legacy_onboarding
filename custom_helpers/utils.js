require('dotenv').config();
const sql = require('mssql');
const assert = require('chai').assert;

const legacyDBConfig = {
    user: process.env.LEGACYDB_USER,
    password: process.env.LEGACYDB_PASSWORD,
    server: 'DevDbAws.legacy.com',
    database: process.env.LEGACYDB_SCHEMA,
    connectionTimeout: 60000,
    requestTimeout: 60000,

    options: {
        encrypt: false,
        port: process.env.LEGACYDB_PORT,
        instanceName: 'QA',
        enableArithAbort: true,
    },
};

/**
 * Retrieves a single result from the Queryset
 * @function getSingleResultFromQueryset
 * @param {Object} result response from the database
 * @returns {Object} first record from the result object
 */
function getSingleResultFromQueryset(result) {
    let obituary = {};

    if (result.recordset) {
        if (result.recordset.length > 0) {
            obituary = result.recordset[0];
        }
    }
    return obituary;
}

/**
 * Retrieves information from the Legacy Database
 * @function retrieveFromLegacyDB
 * @param {String} query - select statement that queries the database
 * @returns {Object} database record
 */
async function retrieveFromLegacyDB(query) {
    let pool;

    try {
        pool = await sql.connect(legacyDBConfig);
        const result = await pool.request().query(query);

        if (typeof result == 'undefined') {
            assert.fail('No recordset returned');
        }
        return result;
    } catch (err) {
        assert.fail(`Database query failed! \n ${JSON.stringify(err)}`);
    } finally {
        if (typeof pool !== 'undefined') {
            pool.close();
        }
        if (typeof sql !== 'undefined') {
            sql.close();
        }
    }
}

module.exports.retrieveFromLegacyDB = retrieveFromLegacyDB;
module.exports.getSingleResultFromQueryset = getSingleResultFromQueryset;