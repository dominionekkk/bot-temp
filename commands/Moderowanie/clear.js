module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Nie Mozesz wykonac tej czynnosci!").then(m => m.delete(5000));
        }

        let deleteAmount;



        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Usunalem \`${deleted.size}\` Wiadomosci.`))
            .catch(err => message.reply(`Cos poszlo nie tak... ${err}`));
    }
}