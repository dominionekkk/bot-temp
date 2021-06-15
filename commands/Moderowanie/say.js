const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    if (!message.member.hasPermission(
      "ADMINISTRATOR")) {
        return message.reply("Nie Mozesz wykonac tej czynnosci!").then(m => m.delete(5000));
    }
   
    message.delete({ timeout: 2000 })
    const sayEmbed = new MessageEmbed()
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("RANDOM")
        .setAuthor( message.author.tag, message.author.displayAvatarURL ({ dyanmic: true }))

    message.channel.send(sayEmbed)
  },
};
