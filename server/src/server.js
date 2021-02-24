const express = require('express');
const server = express();
const Database = require('./database');
const bodyParser = require('body-parser');
const ConversationModel = require('../models/conversation.model');

server.use(bodyParser.json());


server.post('/', async (req, res) => {
    const {
        sender,
        receiver
    } = req.body;
    let conver = await Database.instance.Conversation.createConversation(new ConversationModel(sender, receiver));
    res.send({
        conver: conver,
    })
})

server.get('/', async (req, res) => {
    let conversations = await Database.instance.Conversation.getAllConversation();
    res.send({
        message: conversations,
    })
})

server.get('/findreceiver', async (req, res) => {
    const {
        receiver
    } = req.query;
    let conversation = await Database.instance.Conversation.getOneConversation(receiver);
    res.send({
        message: conversation,
    })
})

server.put('/findupdate', async (req, res) => {
    const {
        receiver,
        message
    } = req.body;
    let conversation = await Database.instance.Conversation.updateConversation(receiver, message);
    res.send({
        message: message
    })
})





module.exports = server;