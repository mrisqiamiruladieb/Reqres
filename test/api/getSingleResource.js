const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Single <Resource>', () => {
    it('Get Single <Resource>', async () => {
        const response = request(baseUrl())
        .get('/unknown/2')
        //.get('/unknown/23') //Single user not found
        console.log((await response).status)
        console.log((await response).body)
    })
})