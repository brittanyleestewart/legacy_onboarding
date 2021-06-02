require('dotenv').config();

const {
    getLegacyDbApiKey,
    getLegacyDbApiUrl,
} = require('../legacy/environment.js');

/**
 * Returns the environment name based on `TEST_ENV`.
 *
 * @returns {string} The name of the environment
 */


function getLegacyDbConfig() {

    const legacyDBConfig = {
        user: 'AFLTechReader',
        password: 'Ar23$@#',
        server: 'DevDbAws',
        database: 'legacy',
        connectionTimeout: 60000,
        requestTimeout: 60000,

        options: {
            encrypt: false,
            port: '1433',
            instanceName: 'QA',
            enableArithAbort: true,
        },
    };

    return legacyDBConfig
}

//module.exports.getLegacyDbConfig = getLegacyDbConfig;
module.exports = {
    getLegacyDbConfig,
    getLegacyDbApiKey() {
        if (getEnvironment().startsWith('qa')) {
            return process.env.LEGACYDBAPI_QA_API_KEY;
        } else if (getEnvironment().startsWith('dev')) {
            return process.env.LEGACYDBAPI_DEV_API_KEY;
        } else if (getEnvironment().startsWith('prod')) {
            return process.env.LEGACYDBAPI_PROD_API_KEY;
        }
        throw 'Not Implemented!';
    }

}



