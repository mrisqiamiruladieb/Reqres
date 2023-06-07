const request = require('supertest')
const baseUrl = require('../../env')

describe('Get Request List <Resource>', () => {
    it('Get List <Resource>', async () => {
        const response = request(baseUrl())
        .get('/unknown')
        console.log((await response).status)
        console.log((await response).body)
    })
})