const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "pomoc",
    description: "Pomoc",
    aliases: ["help", "Pomoc", "p", "h"],
    run: async ( client, message, args ) => {
 

        const embed = new MessageEmbed()
        
        .setTitle('Pomoc!')
        .setColor('RANDOM')
        .setDescription('KATEGORIE \n Prefix t?')
        .addField("Informacje", "czlonkowie \n pomoc \n propozycja "  )
        .addField("Zabawa", "kotek \n piesek \n mem \n gif "  )
        .setAuthor( message.author.tag, message.author.displayAvatarURL ({ dyanmic: true }))
        .setTimestamp()
        message.channel.send(embed);
    }
}
