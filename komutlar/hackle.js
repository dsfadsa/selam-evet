//###CodeMareFi tarafından hazırlanmıştır - - - Ekleyen //###Sadista

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('**Sunucu hacklenmeye başlıyor!**').then(message => {
            message.edit(`**Sunucu patlatılıyor %0**`);
            message.edit(`**Sunucu patlatılıyor %2**`);
            message.edit(`**Sunucu patlatılıyor %5**`);
            message.edit(`**Sunucu patlatılıyor %12**`);
            message.edit(`**Sunucu patlatılıyor %18**`);
            message.edit(`**Sunucu patlatılıyor %23**`);
            message.edit(`**Sunucu patlatılıyor %26**`);
            message.edit(`**Sunucu patlatılıyor %32**`);
            message.edit(`**Sunucu patlatılıyor %39**`);
            message.edit(`**Sunucu patlatılıyor %44**`);
            message.edit(`**Sunucu patlatılıyor %49**`);
            message.edit(`**Sunucu patlatılıyor %52**`);
            message.edit(`**Sunucu patlatılıyor %56**`);
            message.edit(`**Sunucu patlatılıyor %63**`);
            message.edit(`**Sunucu patlatılıyor %69**`);
            message.edit(`**Sunucu patlatılıyor %73**`);
            message.edit(`**Sunucu patlatılıyor %75**`);
            message.edit(`**Sunucu patlatılıyor %82**`);
            message.edit(`**Sunucu patlatılıyor %87**`);
            message.edit(`**Sunucu patlatılıyor %93**`);
            message.edit(`**Sunucu patlatılıyor %97**`);
            message.edit(`**Sunucu patlatılıyor %100**`);
            message.edit(`**Sunucu başarıyla patlatıldı! İyi günler.**a:seadingtik:824918246305038356>`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hackle'],
  permLevel: 0
};

exports.help = {
  name: 'Hackler',
  description: 'Hacklemek Yapar',
  usage: 'hackle'
};