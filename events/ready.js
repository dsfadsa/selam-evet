const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = [
"p!yardım | www.seadingmodbot.ml",
"Zaytron-Hosting.ml",
"Botumuzun Sitesi Açıldı!",
    "www.seadingmodbot.ml"
 ];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'PLAYING' ,  url: 'https://www.twitch.tv/mbasreaper' })
}, 5000);
    console.log(`Asreaper başarıyla giriş yaptı.`);
}