const { MessageEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "mem",
    category: "fun",
    description: "Sends an epic meme",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
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