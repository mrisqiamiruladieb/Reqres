module.exports = {
    "LOGIN_USER_DATA":
    {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    },
    "CREATE_USER_DATA":
    {
        "name": "morpheus",
        "job": "leader"
    },
    "VALID_CREATE_USER_SCHEMA":
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "job": {
            "type": "string"
          },
          "id": {
            "type": "string"
          },
          "createdAt": {
            "type": "string"
          }
        },
        "required": [
          "name",
          "job",
          "id",
          "createdAt"
        ]
      }
}