const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Register', () => {
    it('Register - Successful', async () => {
        const response = request(baseUrl())
        .post('/register')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Register - Unsuccessful', async () => {
        const response = request(baseUrl())
        .post('/register')
        .send({
            "email": "sydney@fife"
        })
        console.log((await response).status)
        console.log((await response).body)
    })

})