const { Client, Intents } = require("discord.js");

const client = new Client({intents: new Intents(32767)});

client.login("MTA4MTYwMTU2NzI5NzM5MjY4Mw.GdKQjA.JH6prpIBOhvcBBNeVJNnsWlBy4jdfDCPmErLU8");

client.on("ready", () => {
    client.user.setActivity(
        "WaveClient",
        {
            type: "PLAYING"
        }
    )

    console.log(`Logged as ${client.user.tag}`);
})
