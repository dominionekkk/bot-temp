module.exports = {
  name: "zabierz",
  commands: ['removerole', 'delrole', 'deleterole'],
  minArgs: 2,
  expectedArgs: "<Target user's @> <The role name>",
  permissions: 'ADMINISTRATOR',
  run: async (client, message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Oznacz kogos do nadania rangi.')
      return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`Nie ma takiej rangi "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role)
      message.reply(`Ranga ${roleName} zostala zabrana `)
    } else {
      message.reply(`Uzytkownik nie posiada takiej roli ${roleName} `)
    }
  },
}