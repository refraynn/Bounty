import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] 
});
// say hi to sarah 2
 
client.on('ready', () => {
    console.log(`RGPB is online.`);
  });

client.on('messageCreate', (message) => {
    console.log(message.content);
})
client.login(process.env.BOT_TOKEN);