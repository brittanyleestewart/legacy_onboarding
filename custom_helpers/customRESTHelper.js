const REST = require('../node_modules/codeceptjs/lib/helper/REST');
const url = require('url');
/*
 * custom REST methods based off of CodeceptJS's REST Helper
 */
class CustomRESTHelper extends REST {
    constructor(config) {
        super(config);
    };

    /*async sendGetRequest(requestUrl, headers = {}) {
        const request = {
            baseURL: this._url(requestUrl),
            method: 'GET',
            headers,
            maxRedirects: 0,
        };

        return this._executeRequest(request);*/
}