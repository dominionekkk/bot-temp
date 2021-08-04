const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "czlonkowie",
    category: "info",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle('Czlonkowie!')
        .setColor('RANDOM')
        .setDescription('CZLONKOWIE NASZEJ EKIPY TEMP')
        .addField("Założyciel Ekipy " , "『►』 dominionekkk", true)
        .addField("Współzałożyciele Ekipy " , "『►』Majki221 \n 『►』000DamianeQ \n 『►』xjachux_",  true) 
        .addField("Mistrz", "『►』metteu \n ,  true )
        .addField("Zaufany", "『►』Mikiox  \n 『►』ziomek07ok  \n  , true) 
        .addField("Czlonkowie Ekipy ", "『►』litanytpolska \n 『►』K3wi \n 『►』Kruchy1213 \n 『►』peak \n 『►』kawolxd \n  『►』Kuchcio12 \n 『►』 \n 『►』Trolek3451254 \n  , \n   『►』000Kubusiek_", true)
        .addField("Technik Bota" , "『►』mixerek", true)  
        .setTimestamp()
        message.channel.send(embed);

    }
}
