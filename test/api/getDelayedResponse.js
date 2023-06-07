const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request Delayed Response', () => {
    it('Get Delayed response', async () => {
        const response = request(baseUrl())
        .get('/users?delay=3')
        console.log((await response).status)
        console.log((await response).body)
    })
})