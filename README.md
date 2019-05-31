# Signals Storage Service

Service for receiving and saving in database MQTT signals.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
nodeJS
postgres
```

### Installing

1. Install npm project dependecies

```
npm install
```

## Deployment

1. Install PostgreSQL and configure it

2. Install npm project dependecies

```
npm install
```
3. Set environments variables
```
BROKER_URL // the url of the mqtt broker
USERNAME // the username register in the mqtt broker
PASSWORD // the password register in the mqtt broker
TOPIC // the topic in which you listen
PORT // the micro-service port
TYPEORM_CONNECTION = postgres
TYPEORM_DATABASE = signals
TYPEORM_ENTITIES = build/entities/**/**.js
TYPEORM_HOST = // host of database
TYPEORM_PASSWORD = // password of database
TYPEORM_PORT = // port of database
TYPEORM_SYNCHRONIZE = true
TYPEORM_USERNAME = // username of database
```
4. Compile Typescript
```
npm run tsc
```
5. Run micro-service
```
node build/app.js
```

## Built With

* [NodeJS](https://nodejs.org/it/)
* [Express](https://expressjs.com/it/)
* [TypeScript](https://github.com/microsoft/TypeScript)

## License

This project is licensed under the GNU License - see the [LICENSE.md](LICENSE.md) file for details