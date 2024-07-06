const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Login', () => {
    it('Login - Successful', async () => {
        const response = request(baseUrl())
        .post('/login')
        .send(DATA.LOGIN_USER_DATA)

        // parsing request body
        // console.log("Data email: " + DATA.CREATE_USER_DATA.email)
        
        console.log((await response).status)
        console.log((await response).body)
    })

    it('Login - unsuccessful', async () => {
        const response = request(baseUrl())
        .post('/login')
        .send({
            "email": "peter@klaven"
        })
        console.log((await response).status)
        console.log((await response).body)
    })

})