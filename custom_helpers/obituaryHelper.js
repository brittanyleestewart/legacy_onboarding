const {
    retrieveFromLegacyDB,
    getSingleResultFromQueryset
} = require('./utils');

class ObituaryHelper extends Helper {

    async getJanusPersonRecord() {
        const query = `SELECT TOP 1 * FROM 
        tblPerson (NOLOCK) 
        WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 
        'columbustelegram', 'fremonttribune')`;

        const result = await retrieveFromLegacyDB(query);

        return getSingleResultFromQueryset(result);
    }
}
module.exports = ObituaryHelper;