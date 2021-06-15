const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");
const Discord = require('discord.js')

const client = new Client

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.on("ready", () => {
    console.log(`Witaj, ${client.user.username} Zostal Wlaczony!`);

    client.user.setPresence({
        status: "online",
        activity: {
            name: "DRAGON-SURVIVAL.EU",
            type: "WATCHING"
        }
    });

});

client.on("message", async message => {
    const prefix = "t?";

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});


client.on('message', async(message) => {


    if(message.channel.id != '818254544239722497') return
    if(message.author.bot) return
    message.delete({ timeout: 2000 })
    const Embed = new Discord.MessageEmbed()
    .setTitle('Propozycja!')
    .setDescription(message.content)
    .setColor('RANDOM')
    .setFooter(message.author.tag,  message.author.displayAvatarURL({ dyanmic: true }))
    let msg = await message.channel.send(Embed)
    msg.react('✅')
    msg.react('❌')
    

})

client.on("message", async message => {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({ timeout: 1000 });
    await message.channel.send(
      `:x: ${message.author} **Nie mozesz wysylac linkow!**`
    );
  }
});
/* 
? advanced anti discord invite
*/
client.on("message", async message => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
    if (regex.exec(message.content)) {
      let found = false;
      let myGuild = message.guild;
      // check if the invite is from the current guild
      await myGuild.fetchInvites()
        .then(invites => {
          let code = message.content.slice(message.content.lastIndexOf('/') + 1, message.content.length);
          invites.forEach(invite => {
            console.log(invite.code, ' ', code)
            if (invite.code == code)
              found = true;
          });
        })
        .catch(err => console.log(err));
      console.log(found)
      // if not
      if (!found) {
        await message.delete({ timeout: 1000 });
        await message.channel.send(
          `:x: ${message.author} **you cannot post invite links from other servers here!**`
        );
          await message.delete({ timeout: 2000 })
      }
    }
  }
}

)

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  if (message.content.startsWith('t?ban')) {
    const user = message.mentions.users.first();
    if (user) {

      const member = message.guild.members.resolve(user);
      if (member) {

        member
          .ban({
            reason: '**Nie zastowales sie do zasad!**',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.channel.send(`**Pomyslnie zbanowano** ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('**Nie moge zbanowac tej osoby**');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.channel.send("**Nie oznaczyles osoby do zbanowania**");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('t?kick')) {

    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .kick('Sorka')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.channel.send(`**Pomyslnie wyrzucono** ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.channel.send('**Nie moge wyrzucic tej osoby**');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.channel.send("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.channel.send("**Nie oznaczyles osoby do wyrzucenia**!");
    }
  }
});


client.login(process.env.DJS_TOKEN);
