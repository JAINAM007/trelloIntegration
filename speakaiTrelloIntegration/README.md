# TrelloIntegration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Features

- Authentication with Trello using OAuth 
- Fetching and displaying Trello cards for a specific user
- Rendering a separate component dynamically
- Token validation on the server-side
- Error handling and error messages
- Angular frontend and Express backend

## Project Architecture

This project follows a client-server architecture, allowing users to authenticate with Trello and perform various actions related to Trello cards.

-User Login: The user starts by logging in through Trello authentication. This process involves communication between the Angular application and the Node.js server. The Angular application initiates the authentication process by making a request to the server. The server redirects the user to the Trello authentication page.

-Trello Authentication: After the user is redirected to the Trello authentication page, they provide their Trello credentials and grant permission for the application to access their Trello account. Upon successful authentication, Trello sends a callback to the server with an access token.

-Card Details Display: With the access token received from Trello, the server validates the token's authenticity. If the token is valid, the server retrieves the card details from Trello's API. The server then sends the card details back to the Angular application, which displays them to the user.

-Token Validation: Token validation is a crucial step to ensure the security and validity of user access. The server makes a request to Trello's API to validate the received token. If the token is valid, the server proceeds with retrieving the card details. Otherwise, an error response is returned.

-Card Entry: If the token is valid, the user can interact with the displayed card details and make entries. The Angular application provides a user-friendly interface to create entries for the Trello cards. These actions are communicated to the server, which then interacts with Trello's API to perform the requested operations.

## Database Schema
This project utilizes MongoDB as the database to store information related to Trello cards. 

-name: Represents the name of the Trello card.

-description: Provides a description of the Trello card.

-creationDate: Stores the date and time when the card was created.

## API Endpoints

This project provides the following API endpoints to interact with the Trello card data:

-GET /api/cards

-Retrieves all Trello cards from the database.
-Returns an array of card objects.

-POST /api/cards

-Creates a new Trello card in the database.
-Requires a JSON object in the request body with the following properties:
-name: The name of the card (string).
-description: The description of the card (string).
-creationDate: The creation date of the card (string, formatted as ISO 8601).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
