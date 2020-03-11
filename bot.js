const Discord = require('discord.js');
const bot = new Discord.Client();
const Canvas = require('canvas');
const { readFile, readFileSync } = require('fs-nextra');
const { get } = require('snekfetch');
const jimp = require('jimp');
const fs = require('fs');
const prefix = "$"
 
const token = 'NjE5MTEwNjM5NjM3NjI2ODg3.XXDeXw.VcbmQgbjaJbUz8X8ExiHOAT3QmY';
 
bot.on('ready', () =>{
    console.log(`
   
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.
 
    `)
})
 

 

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('620735030783639554').send(`Welcome ${member.user}! Please take a look at <#621093103947874311>`); 
});

 


bot.on('guildMemberRemove', member => {
    member.guild.channels.get('663051893760720918').send(`<@${member.user.id}> has left the server`);
});
 






bot.on("message", msg => {
    if(msg.author.bot || !msg.guild) return;
    let [command, ...args] = msg.content.slice(prefix.length).split(/ +/g);
    if(command === "space") {
        if(args.shift() === "all") {
            let rooms = msg.guild.channels.filter(r=> r.name.includes("-") || r.name.includes("_"))
            rooms.forEach(r=> r.setName(r.name.replace(/-/g, " ").replace(/_/g, " ")))
             msg.channel.send("**Done i have spaced "+rooms.size+" channel ...**")
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        }
        else if(msg.mentions.channels.first()) {
            let room = msg.guild.channels.find(m=> m.name === msg.mentions.channels.first().name)
            room.setName(room.name.replace(/-/g, " ").replace(/_/g, " ")).then(sec=> msg.channel.send("**Done i have spaced "+room+" ...**"))
            .catch(err=> msg.channel.send("i have an error please check my permissons"))
        }
        else msg.channel.send("**Usage: \n > "+prefix+"space <all | mention channel>**")
    }
 
})






bot["on"]('message', message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ");
if(args[0]["toLowerCase"]() == prefix + `allbots`) {
var n = 1;
let e = new Discord.RichEmbed()
.setAuthor(message["author"]["username"],message["author"]["avatarURL"])
.setColor("BLACK")
.setDescription(`**Found ${message["guild"]["members"]["filter"](e => e["user"]["bot"])["size"] || "0"} bots in this Server**
${message["guild"]["members"]["filter"](e => e["user"]["bot"])["map"](e => `${n++} ${e.user}` || "No Bots")["join"]("\n")}`)
.setFooter(bot["user"]["username"],bot["user"]["avatarURL"])
.setTimestamp()
message["channel"]["send"](e)
}
})





bot.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "profile") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}` 
          }
          
        ]
      }) 
      )
    }
});













const { getInfoFromName } = require('myanimelists');
 
 
          bot.on('message', message => {
            let anime = message.content.split(" ").slice(1).join(" ")
            if(message.content.startsWith(prefix + 'anime')) {
                if(!anime) return message.channel.send('Please Write The Anime Name Example: !anime dragon ball')
            getInfoFromName(anime)  
                .then(result => {
                    let embed = new Discord.RichEmbed()
                .setTitle(result.title)
                .addField('Trailer:', `${result.trailer}` || `Unknown`)
                .addField('Episodes:', `${result.episodes}` || `Unknown`)
                .addField('Status:', `${result.status}` || `Unknown`)
                .addField('Studios:', `${result.studios}` || `Unknown`)
                .addField('Genres:', `${result.genres}` || `Unknown`)
                .addField('Ranked:', `${result.ranked}` || `Unknown`)
                .addField('Favorites', `${result.favorites}` || `Unknown`)
                .addField('Rating:', `${result.rating}` || `Unknown`)
                .addField('Premiered:', `${result.premiered}` || `Unknown`)
                .addField('Duration:', `${result.duration}` || `Unknown`)
                .addField('Score:', `${result.score}` || `Unknown`)
                .addField('Scored By:', `${result.scoreStats} ` || `Unknown`)
                .setDescription(`${result.synopsis || 'Unknown'}`)
                .setImage(result.picture)  
                .setColor('#0a0000')
                message.channel.sendEmbed(embed)
                })
                .catch(error => console.log(error));
            }})














bot.on("message", async m =>{
  if(m.author.bot || !m.guild) return;
  var args = m.content.split(" ");
  var command = args[0].slice(prefix.length);
  if(!m.content.startsWith(prefix)) return;
  var all = ["-"]
  switch (command) {
    case 'drake':
      if(!args[1] && !args[2]) return m.channel.send(new Discord.RichEmbed().setDescription(`<a:no:651123754558291988> Usage \`${prefix}drake <bad> <good>\``));
      if(!args[2]) return m.channel.send(new Discord.RichEmbed().setDescription("<a:no:651123754558291988> Unable to resolve the ``good`` argument."));
      let canvas = Canvas.createCanvas(299, 291);
      const applybad = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      const applygood = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/662049225944596512/667320767565922304/Drakeposting.jpg");
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
      ///////////////////////////////////bad//////////////////////////////
      ctx.font = applybad(canvas,args[1].split("-").join(" "));
      ctx.fillText(args[1].split("-").join(" "), 225, 80.8333333333);
      ////////////////////////////good///////////////////
      ctx.font = applygood(canvas,args[2].split("-").join(" "));
      ctx.fillText(args[2].split("-").join(" "), 225, 225);
      const attachment = new Discord.Attachment(canvas.toBuffer());
      m.channel.send(attachment);
      break
  }
});







    bot.on("message", (message) => {
      if (message.channel.type == "dm" && message.author.id != bot.user.id) {
        let channel = bot.channels.get("635234417656201267").send(`**💬 ${message.author.username}**: ` +   (message.content) );

      }
    });




let { createCanvas, loadImage, registerFont } = require('canvas')

  /**
  *  Log channel id
  *  @type {string}
  */
  , log = "635231470524432403"


bot.on('userUpdate', async ( oldUser, newUser ) => {

  if( oldUser.avatar === newUser.avatar) return undefined;
  
  let canvas = createCanvas( 750, 220 )
  , ctx = canvas.getContext( '2d' )

  , oldAvatar = await loadImage( oldUser.avatarURL )
  , arrows = await loadImage( "https://cdn.discordapp.com/attachments/645088710697811968/661529868239896617/Untitled-1.png" )
  , newAvatar = await loadImage( newUser.avatarURL )
  
    ctx.drawImage( oldAvatar, 0, 0, 220, 220)
  
    ctx.drawImage( arrows, 250, 0, 220, 220 )
  
    ctx.drawImage( newAvatar, 500, 0, 220, 220 )
  
  bot.channels.get( log ).send(new Discord.RichEmbed()
                                                .setAuthor( newUser.username, newUser.avatarURL)
                                                .setDescription(" **It changed ``avatar``**")
                                                .attachFiles( [{ name: "image.png", attachment: canvas.toBuffer() }] )
                                                .setImage( "attachment://image.png" )
                                                .setColor( "#00ffff") )
})










            












                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                        message.channel.send('Hello! ');
                        }
                    })

                













bot.on("guildMemberAdd", member => {
  let autorole = member.guild.roles.find(`name`, "Community");
  setTimeout(() => {
    member.addRole(autorole);
  }, 180000);
});
























              
            










bot.on("message", message => {
  if (message.content.startsWith("$getimg")) {
    var user = message.mentions.users.first();
    if (!user)
      return message.channel.send({
        files: [
          {
            name: "Knights.png",
            attachment: message.author.avatarURL
          }
        ]
      });
    if (user)
      return message.channel.send({
        files: [
          {
            name: "Knights.png",
            attachment: user.avatarURL
          }
        ]
      });
  }
});

















    bot.on('message', message => {
      if (message.author.bot) return;
      if (message.content.startsWith(prefix+ "sayx")) {
    if(message.author.id !== "311584244415594498") return;
    var args = message.content.split(" ").slice(2);
    let chan = message.mentions.channels.first()
    if (chan) {
      let text = args.join(" ")
      chan.send(text);
    } 
    }
    }); 







            

var analyrics = require("analyrics"); //npm i analyrics
var hastebin = require('hastebin-gen'); //npm i hastebin-gen
analyrics.setToken("vQC2IQZ30BSOD664jJz7LKbUEy1It_qkNBWpCYR9WexY_xYhX0Tqzh4Y91dgT8eF");

bot.on("message", async message => {
  if (message.content.startsWith("$l")) {
    let args = message.content.split(" ").slice(1).join(" ");
    if (!args[0]) return message.reply("**please enter song name to get the lyrics**");
    analyrics.getSong(args, function (song) {
      hastebin(song.title, "txt").then(r => {
        message.channel.send(`${song.title} **Lyrics in hastebin** : 
[ ${r} ]`)
      }).catch(console.error);
      let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${song.lyrics}`)
        .setFooter(`${song.title}` + " Lyrics");
      message.channel.send(embed)
    });
  }
})


            
       








bot.on('message', message => {
    if (message.content == ('$clock')) {
 
        const w = ['./file.png'];
 
        let Image = Canvas.Image,
            canvas = new Canvas.Canvas(400, 400),
            ctx = canvas.getContext('2d');
        var radius = canvas.height / 2;
        var currentTime = new Date(),
            hours = currentTime.getHours(),
            minute = currentTime.getMinutes();
        var second = currentTime.getSeconds();
        ctx.translate(radius, radius);
        radius = radius * 0.90
 
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 169);
        })
 
 
        ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
 
        })
        let user = message.mentions.users.first();
        var men = message.mentions.users.first();
        var heg;
        if (men) {
            heg = men
        } else {
            heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
        var ment = message.mentions.users.first();
        var getvalueof;
        if (ment) {
            getvalueof = ment;
        } else {
            getvalueof = message.author;
        } //ظ…ط§ ط®طµظƒ ,_,
        let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
        jimp.read(url, (err, ava) => {
            if (err) return console.log(err);
            ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                if (err) return console.log(err);
 
 
                function drawFace(ctx, radius) {
                    var grad;
                    ctx.beginPath();
                    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
                    ctx.fillStyle = 'white';
                    ctx.fill();
                    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
                    grad.addColorStop(0, '#333');
                    grad.addColorStop(0.5, 'black');
                    grad.addColorStop(1, '#333');
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = radius * 0.1;
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
                    ctx.fillStyle = '#333';
                    ctx.fill();
                }
                drawClock();
 
                function drawClock() {
                    drawFace(ctx, radius);
                    drawNumbers(ctx, radius);
                    drawTime(ctx, radius);
                }
 
                function drawNumbers(ctx, radius) {
                    var ang;
                    var num;
                    ctx.font = radius * 0.15 + "px arial";
                    ctx.textBaseline = "middle";
                    ctx.textAlign = "center";
                    for (num = 1; num < 13; num++) {
                        ang = num * Math.PI / 6;
                        ctx.rotate(ang);
                        ctx.translate(0, -radius * 0.85);
                        ctx.rotate(-ang);
                        ctx.fillText(num.toString(), 0, 0);
                        ctx.rotate(ang);
                        ctx.translate(0, radius * 0.85);
                        ctx.rotate(-ang);
                    }
                }
 
                function drawTime(ctx, radius) {
 
                    if (hours > 12) {
                        hours -= 12;
                    } else if (hours == 0) {
                        hours = "12";
                    }
                    if (minute < 10) {
                        minute = '0' + minute;
                    }
                    //hour
                    hours = hours % 12;
                    hours = (hours * Math.PI / 6) +
                        (minute * Math.PI / (6 * 60)) +
                        (second * Math.PI / (360 * 60));
                    drawHand(ctx, hours, radius * 0.5, radius * 0.07);
                    //minute
                    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
                    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
                }
 
                function drawHand(ctx, pos, length, width) {
                    ctx.beginPath();
                    ctx.lineWidth = width;
                    ctx.lineCap = "round";
                    ctx.moveTo(0, 0);
                    ctx.rotate(pos);
                    ctx.lineTo(0, -length);
                    ctx.stroke();
                    ctx.rotate(-pos);
                }
 
 
 
 
 
 
                var currentTime = new Date(),
                    hours2 = currentTime.getHours(),
                    minutes2 = currentTime.getMinutes(),
                    seconds2 = currentTime.getSeconds();
 
                if (hours2 > 12) {
                    hours2 -= 12;
                } else if (hours2 == 0) {
                    hours2 = "12";
                }
                if (minutes2 < 10) {
                    minutes2 = '0' + minutes2;
                }
 
                message.channel.send((`The time now is: **${hours2}:${minutes2}**`));
 
 
 
                message.channel.sendFile(canvas.toBuffer());
 
 
 
 
            })
        })
    }
});












bot.login(token);
