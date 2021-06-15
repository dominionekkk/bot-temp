module.exports = {
    name: 'kick',
    description: 'kickujesz chuja',

    run: async ( client, message, args ) => {

      if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.reply("Nie Mozesz wykonac tej czynnosci!").then(m => m.delete(5000));
    }

            const { member, mentions } = message
        
            const tag = `<@${member.id}>`
        
            if (
              member.hasPermission('ADMINISTRATOR') ||
              member.hasPermission('KICK_MEMBERS')
            ) {
              const target = mentions.users.first()
              if (target) {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                message.channel.send(`${tag} Dostal kicka`)
              } else {
                message.channel.send(`${tag} Oznacz kogos.`)
              }
            } else {
              message.channel.send(
                `${tag} Nie posiadasz permisji.`
              )
            }
        }}
        

    
