import { Client, GatewayIntentBits, Routes } from 'discord.js';
import 'dotenv/config';
import { REST } from '@discordjs/rest';


const CLIENT_ID = process.env.CLIENT_ID;
const TOKEN = process.env.BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
import eventHandler from './handlers/eventHandler.js'


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] 
});

 
eventHandler(client);

client.login(TOKEN);