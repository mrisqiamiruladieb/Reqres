const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Single User', () => {
    it('Get Single User', async () => {
        const response = request(baseUrl())
        .get('/users/2')
        //.get('/users/23') //Single user not found
        console.log((await response).status)
        console.log((await response).body)
    })
})