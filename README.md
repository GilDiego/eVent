# eVent

Events platform where promoters publish activities and users browse, filter, review and manage them. Built by a 7-person team as the final project of the Henry full-stack bootcamp, 2021.

## Features

- Event catalog with filters by tag, age rating and weekday, plus search by name
- Event detail with ratings and comments
- Separate sign-up and login for users and promoters, including Google and Facebook sign-in
- Promoter profile with a ratings chart and event management (create, edit, delete)
- Image uploads through Cloudinary

## Stack

| Layer    | Technology                                                    |
| -------- | ------------------------------------------------------------- |
| Client   | React 17, Redux, React Router, Chart.js, Create React App     |
| Server   | Node.js, Express, Sequelize                                   |
| Database | PostgreSQL                                                    |
| Tests    | Jest, Supertest, React Testing Library                        |

## Getting started

Requirements: Node.js 16 and a PostgreSQL database.

```bash
cd server
cp .env.example .env
npm install
npm start
```

```bash
cd client
cp .env.example .env
npm install
npm start
```

The API listens on `http://localhost:3001` and the client on `http://localhost:3000`. Fill in `server/.env` with the database URL and the Cloudinary credentials.

## Scripts

| Where    | Command        | What it does                  |
| -------- | -------------- | ----------------------------- |
| `server` | `npm test`     | Runs the API tests            |
| `server` | `npm run lint` | Lints the API                 |
| `client` | `npm test`     | Runs the client tests         |
| `client` | `npm run build`| Builds the client             |

## Structure

```
client/src
  actions, reducers, store    Redux state
  components                  One folder per screen or widget
  config.js                   API base URL
server
  routes, controllers         HTTP layer
  database                    Sequelize models and relations
  tests                       API tests with mocked models
documentation/DB              Data model diagrams
```

## Known limitations

- Passwords are stored and compared as plain text. Hash them before using this beyond a demo.
- The API has no authentication on its write endpoints.

## Team

- Abigailcruz1202
- Audvis
- cesca2092
- GilDiego
- IAZDafne
- leofer1995
- l-s-b
