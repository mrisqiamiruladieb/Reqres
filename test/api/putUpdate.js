const request = require('supertest')
const baseUrl = require('../../env')

describe('Put Request Update', () => {
    it('Update', async () => {
        const response = request(baseUrl())
        .put('/users/2')
        .send({
            "name": "morpheus",
            "job": "zion resident"
        })
        console.log((await response).status)
        console.log((await response).body)
    })

})