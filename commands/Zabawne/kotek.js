const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "kotek",
    category: "fun",
    aliases: ["kot"],
    description: "Sends an epic meme",
    run: async (client, message, args) => {
        const subReddits = ["catpictures", "KittyPupperLove"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Wziete z /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
            .setAuthor( message.author.tag, message.author.displayAvatarURL ({ dyanmic: true }))
            .setTimestamp()
        message.channel.send(embed);
    }
}