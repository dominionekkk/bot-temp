const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "randomgif",
    category: "fun",
    aliases: ["randomgifs", "gif"],
    description: "Sends an epic meme",
    run: async (client, message, args) => {
        const subReddits = ["gifs", "gif"];
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