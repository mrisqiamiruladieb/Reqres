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
      },
      "VALID_GET_LIST_USERS_SCHEMA":
      {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "page": {
            "type": "number"
          },
          "per_page": {
            "type": "number"
          },
          "total": {
            "type": "number"
          },
          "total_pages": {
            "type": "number"
          },
          "data": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "email": {
                  "type": "string"
                },
                "first_name": {
                  "type": "string"
                },
                "last_name": {
                  "type": "string"
                },
                "avatar": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "email",
                "first_name",
                "last_name",
                "avatar"
              ]
            }
          },
          "support": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "text": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "text"
            ]
          }
        },
        "required": [
          "page",
          "per_page",
          "total",
          "total_pages",
          "data",
          "support"
        ]
      },
      "VALID_LOGIN_SCHEMA":
      {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "token": {
            "type": "string"
          }
        },
        "required": [
          "token"
        ]
      },
      "INVALID_LOGIN_SCHEMA":
      {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Generated schema for Root",
        "type": "object",
        "properties": {
          "error": {
            "type": "string"
          }
        },
        "required": [
          "error"
        ]
      }
}