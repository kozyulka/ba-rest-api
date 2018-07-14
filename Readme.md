# Users

User:

```js
{
    "id": Number,
    "firstName": String,
    "lastName": String,
    "email": String,
    "country": String
}
```

All users:

```
GET /api/users
```

One user:

```
GET /api/users/:id
```

Create user:

```
POST /api/users/
```

Change user:

```
PUT /api/users/:id
```

Delete user:

```
DELETE /api/users/:id
```

All user's pen-friends:

```
GET /api/users/:id/receivers
```

# Messages

Message:

```js
{
    "id": Number,
    "sendererId": Number,
    "receiverId": Number,
    "messageBody": String
}
```

All messages:

```
GET /api/messages
```

One message:

```
GET /api/messages/:id
```

Create message:

```
POST /api/messages/
```

Change message:

```
PUT /api/messages/:id
```

Delete message:

```
DELETE /api/messages/:id
```