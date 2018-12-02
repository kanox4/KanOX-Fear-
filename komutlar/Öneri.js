
const Discord = require('discord.js');


exports.run = function (client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "477633389646708740";
    var channelID = "517396485923405835";

    if (!öneri) {
        return message.reply("AA Doğru kullanım: **?öneri <mesaj>**");
    } else {

        var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
    };


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["öner"],
    permLevel: 0
};

exports.help = {
    name: 'öneri',
    description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır",
    usage: 'öneri <mesaj>'
};