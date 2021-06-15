const { description } = require("../Zabawne/randomgif");

module.exports = {
    name: 'ban',
    description: 'wypierdalaj głupia tempa pizdo i naucz się kultury',

    run: async (client, message, args) => {

      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("Nie Mozesz wykonac tej czynnosci!").then(m => m.delete(5000));
    }

        command(client, 'ban', (message) => {
            const { member, mentions } = message
        
            const tag = `<@${member.id}>`
        
            if (
              member.hasPermission('ADMINISTRATOR') ||
              member.hasPermission('BAN_MEMBERS')
            ) {
              const target = mentions.users.first()
              if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                message.channel.send(`${tag} Zostal zbanowany!`)
              } else {
                message.channel.send(`${tag} otaguj osobe`)
              }
            } else {
              message.channel.send(
                `${tag} Nie posiadasz permisji.`
              )
            }
          })

    }
}
