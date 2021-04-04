const Discord = require('discord.js');
 exports.run = (client, message, args) => {
   message.delete();
   let question = args.join(' ');
   let user = message.author.username
   if (!question) return message.channel.send(
     new Discord.MessageEmbed()
     .setColor("BLUE")
     .setDescription(` Yazı yazman gerek.`)).then(m => m.delete(5000));
     message.channel.send(
       new Discord.MessageEmbed()
       .setColor("BLUE")
       .setThumbnail(client.user.displayAvatarURL())
       .setTimestamp()
       .setFooter('', client.user.displayAvatarURL())
       .addField(`**Oylama:**`, `**${question}**`)).then(function(message) {
         message.react('<a:seadingoke:826393927652212772>');
         message.react('<a:seadingno:826394309652906004>');
       });
     };
     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['anket'],
  permLevel: 2
};
exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};