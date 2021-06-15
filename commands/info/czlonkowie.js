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
        .addField("Współzałożyciele Ekipy " , "『►』Majki221 \n 『►』oo_ll_ee_kk  \n 『►』xjachux_",  true) 
        .addField("Mistrz", "『►』ShrekNotFound_  \n 『►』000DamianeQ  \n 『►』ziomek07ok  \n Krzywy_Bolczyk",  true )
        .addField("Zaufany", "『►』Mikiox  \n 『►』metteu  \n 『►』fifi " , true) 
        .addField("Czlonkowie Ekipy ", "『►』litanytpolska \n 『►』K3wi \n 『►』Kruchy1213 \n 『►』MrZombiaczekkk \n『►』Napewno_Nie \n『►』Blaszkus \n『►』Qeski \n『►』pogromca_60_tek \n『►』STOPRO99 \n 『►』kawolxd \n 『►』XxKapixX \n『►』000Zyciee \n 『►』yyex \n 『►』Kuchcio12 \n 『►』 \n『►』Paczub \n 『►』Trolek3451254 \n 『►』natureq \n 『►』krakenikk, \n 『►』sivusek \n 『►』000Kubusiek_", true)
        .addField("Technik Bota" , "『►』mixerek", true)  
        .setTimestamp()
        message.channel.send(embed);

    }
}
