require('dotenv').config();

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

module.exports.getLegacyDbConfig = getLegacyDbConfig;