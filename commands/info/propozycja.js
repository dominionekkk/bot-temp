const Discord = require("discord.js");
module.exports = {
  name: "propozycja",
  description: "Create a simple yes or no poll",
  category: "fun",
  aliases: ["propozycje"],
  run: async (bot, message, args) => {

    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0])
    if (!channel) {
      return message.channel.send('Oznacz kanal!');
    }
    let question = args.slice(1).join(" ")
      .split('Propozycja ${channel}')
      args.slice(2).join("")
    if (!question)
      return message.channel.send('Nie wyslales pytania!')
      message.delete({ timeout: 2000 })
    const Embed = new Discord.MessageEmbed()
      .setTitle('Glosuj!')
      .setDescription(`${question}`)
      .setFooter(message.author.tag,  message.author.displayAvatarURL({ dyanmic: true }), "Utowrzyl Propozycje")
      .setColor('RANDOM');
    let msg = await bot.channels.cache.get(channel.id).send(Embed)
    await msg.react("✅");
    await msg.react("❌");
  },
};
