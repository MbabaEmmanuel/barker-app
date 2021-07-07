import axios from 'axios';

const instance = axios.create({
    baseURL:'https://barker.api.hscc.bdpa.org/v1',
    headers: {
        'key': 'playkey6-161a-4fe5-8151-06030e900820',
    },
});

export default {
    getAllBarks: () => 
    instance({
        'method':'GET',
        'url':'/barks',
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            console.log('Transforming data... ' + json);
            return json;
        }],
    }),
    getInfo: () =>
    instance({
        'method':'GET',
        'url':'/info',
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            console.log('Transforming data... ' + json);
            return json;
        }],
    }),
    getBark: (barkId) => 
    instance({
        'method':'GET',
        'url':'/barks/' + barkId,
        transformResponse: [function (data) {
            const json = JSON.parse(data);
            console.log('Transforming data... ' + json);
            return json;
        }],
    }),
}