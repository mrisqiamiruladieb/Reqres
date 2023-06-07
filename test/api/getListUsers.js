const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request List Users', () => {
    it('Get List Users', async () => {
        const response = request(baseUrl())
        //.get('/users?page=2')
        .get('/users')
        console.log((await response).status)
        console.log((await response).body)
    })
})