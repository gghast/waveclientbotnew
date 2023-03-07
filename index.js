const { Client, Intents } = require("discord.js");

const client = new Client({intents: new Intents(32767)});

client.login("MTA4MTYwMTU2NzI5NzM5MjY4Mw.GRm5Wo.E_rbLapnsKV0IL1LCnr_X4wlk5Y6R11QIUV7Hs");

client.on("ready", () => {
    client.user.setActivity(
        "WaveClient",
        {
            type: "PLAYING"
        }
    )

    console.log(`Logged as ${client.user.tag}`);
})
