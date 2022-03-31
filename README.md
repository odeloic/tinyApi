# TinyApi
Minimal API for user management.

## Set up
- Clone the repository
- Navigate to the repository on your local machine
- Install all the npm packages
- Create an `.env` file in the root of the project and user the template from `.env.example` to fill in the values
- `yarn serve` to start the local server
- Use any REST client to try out different endpoints

## Routes
- `POST` /users => Creates a new user in the system
- `GET` /users => Returns all the users in the system
- `GET` /users/:id => Returns information about a user with the given `id`
- `PUT` /users/:id => Updates the user information with the given `id`
- `DELETE` /users/:id => Removes the user with the given `id` from the system


## TODO

- [x] Set up the initial Application Repository
- [x] Make the README
- [x] Set up server
- [ ] Add initial CRUD routes
- [ ] Add REST API Documentation (Swagger or APIDoc)
- [ ] Response handler
- [ ] Error handlers for each routes
- [ ] Add a db support
- [ ] User Authentication