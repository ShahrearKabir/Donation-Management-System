
# Assignment

Donation management system

## Requirements
* node <= 20.3.0
* postgres sql


## Backend Modules
* **Auth**
* **User**
* **Role**
* **Fund**
* **Donation**

## Frontend Routes
* /login
* /signup
* /admin
* /donate
* /

## Technologies Used
* **Backend**: [Nestjs]()
* **Database**: [Postgres]()
* **Frontend**: [Nextjs](), [tailwind]()



## Installation

Clone repository
```bash
https://github.com/ShahrearKabir/Donation-Management-System.git
```
Install with npm

```bash
# go to project dir server(backend) & client(frontend)

$ cp .env.example .env
$ npm install

# set all .env variables
```
Setup application .env file Backend
```bash
#Backend
NAME=donation
RUN_TIME=local
PORT=4300

POSTGRES_DB_HOST=localhost
POSTGRES_DB_NAME=
POSTGRES_DB_USER=postgres
POSTGRES_DB_PASSWORD=
POSTGRES_DB_PORT=5432

JWT_SECRET=
STRIPE_SECRET_KEY=
STRIPE_PUBLIC_KEY=

#Frontend
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=

```

## Running the app

```bash
# Database import from Backup
/server/src/database/backup

# Backend: cd ./server
$ npm run start:debug

# Frontend cd ./client
$ npm run dev
```
    

## API Reference

#### Swagger API documentation url

```http
  http://localhost:4300/api
```
