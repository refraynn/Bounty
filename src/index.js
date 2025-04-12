import { Client, GatewayIntentBits, Routes } from 'discord.js';
import 'dotenv/config';
import { REST } from '@discordjs/rest';

const CLIENT_ID = process.env.CLIENT_ID;
const TOKEN = process.env.BOT_TOKEN;
const GUILD_ID = process.env.GUILD_ID;


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ] 
});

const rest = new REST({ version: '10' }).setToken(TOKEN)
 
client.on('ready', () => {
    console.log(`RGPB is online.`);
  });

client.on('interactionCreate', (interaction) => {
    if (interaction.isChatInputCommand()) {
        console.log('Hello world')
        interaction.reply({ content: 'Hello!'})
    }
})

async function main() {
    const commands = [
        {
            name: 'blahblahblah',
            description: 'blahblahblah'
        },
    ];

    try {
        console.log('Started refreshing slash commands.');
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
            body: commands,
        })
        
    } catch (err) {
        console.log(err)
    }
}

main();
client.login(TOKEN);