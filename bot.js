const Discord = require('discord.js');
const bot = new Discord.Client();
const moment = require('moment');
const Canvas = require('canvas');
const { readFile, readFileSync } = require('fs-nextra');
const { get } = require('snekfetch');
const jimp = require('jimp');
const ms = require("ms");
const weather = require('weather-js');
const fs = require('fs');
const prefix = "$"
const token = 'mfa.Q0C2i613HhLTqqUClgSH8eagWLIlr_zgJjhkybu6mJxb39ZsKwCGDmbeG59VIchn2nf3OzewhUU38xLzYK0';
bot.on('ready', () => {
  console.log('I\'m online')
})
   
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور اضافيه
   var s = ['483055660209012736','480169573530861578','483055655800930315'];  // صور  الي بتشتغل
    setInterval(function (){//Toxic Codes // n3k4a is one  
    bot.user.setPresence({//Toxic Codes // n3k4a is one
 game: { //Toxic Codes // n3k4a is one
    type: 1,//Toxic Codes // n3k4a is one
     url: 'https://www.twitch.tv/Robot',//Toxic Codes // n3k4a is one
    name: 'im try banned ',  // الكلام الي في التوتش//Toxic Codes // n3k4a is one
    application_id: '477187715658547201', // ايدي البوت او ايدي الحساب حقك //Toxic Codes // n3k4a is one
     assets: {//Toxic Codes // n3k4a is one
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,//Toxic Codes // n3k4a is one
 
    }//Toxic Codes // n3k4a is one
  }//Toxic Codes // n3k4a is one
    });//Toxic Codes // n3k4a is one
    }, 5000);//سرعه تغير الصور  // n3k4a is one
//Toxic Codes // n3k4a is one

 bot.login(token);
