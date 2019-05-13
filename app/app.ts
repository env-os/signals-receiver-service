import 'reflect-metadata';
import express from 'express'
import mqtt from 'mqtt';
import { useContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';


useContainer(Container)

const app: express.Application = express()
const brokerUrl = process.env.BROKER_URL || 'mqtt://localhost';
const topic = process.env.TOPIC || 'general';
const port = process.env.PORT || 3000;

createConnection()
.then(async connection => {
    console.log("Database connection started successfully")

    const client = mqtt.connect(brokerUrl)
    client.on('connect', () => {
        client.subscribe(topic);
    })

    client.on('message', (topic, message) => {
        console.log(message);
    })

    app.listen(port, () => {
        console.log("Signal receiver service listening on port " + port)
    })
})
.catch(error => console.log(error))