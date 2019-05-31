import 'reflect-metadata';
import express from 'express'
import mqtt from 'mqtt';
import { useContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { SignalsReceiverService } from './services/signals-receiver.service';


useContainer(Container)

const app: express.Application = express()
const brokerUrl = process.env.BROKER_URL || 'mqtt://localhost:1883';
const username = process.env.USERNAME || '';
const password = process.env.PASSWORD || ''
const topic = process.env.TOPIC || 'general';
const port = process.env.PORT || 3000;

createConnection()
.then(async connection => {
    console.log("Database connection started successfully");

    const client = mqtt.connect(brokerUrl, {
        username: username,
        password: password,
        protocol: "mqtt"
    })
    client.on('connect', () => {
        console.log("Connection to MQTT broker established.")
        client.subscribe(topic);
        console.log("Subscribed to topic " + topic)
    })

    const receiverService = Container.get(SignalsReceiverService);

    client.on('message', (topic, message) => {
        console.log("Received MQTT message with topic " + topic.toString());
        console.log(message.toString());
        receiverService.save(message);
    })

    app.listen(port, () => {
        console.log("Signals receiver service listening on port " + port);
    })
})
.catch(error => console.log(error))