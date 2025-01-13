
# Contact Manager App

A Contact Manager app (Backend) developed using ExpressJS, MongoDB and JWT for authentication of the users. This app can perform all the CRUD operations on the database.


## Installation

First clone the app locally and install the dependencies using npm.

```bash
  cd BackendProject
  npm install 
  npm start
```
    
## API Reference

#### Get all contacts

```http
  GET /api/contacts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Name` | `string` | **Required**. Name of the user
| `Phone`  |   `Integer`     | **Required**. Phone Number 
  `Email`  |  `string`       | **Required** Email Address


#### Get a single contact

```http
  GET /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |

### Create contact

```http
  POST /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |

### Delete contact

```http
  DELETE /api/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |


## Features

- Authentication with JWT
- Fast CRUD operations
- Use of Middlewares
- MongoDB for database

