const Discord = require('discord.js');
const bot = new Discord.Client();
const Canvas = require('canvas');
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
 



var ChannelName = "▪》welcome";//اسم الروم
var imageURL = "http://i8.ae/sw4p9";//رابط الصورة


var wlc_msg_width = 170, //اعرض كلمة ولكم
    wlc_msg_height= 80;//ارتفاع كلمة ولكم

var user_msg_width = 200,//عرض اسم الشخص
    user_msg_height = 120;//ارتفاع اسم الشخص

var user_avatar_width = 150,//عرض افتار الشخص
    user_avatar_height = 150;//ارتفاع افتار الشخص
var _0x1201=['0x51','0x25','0x28','0x36','0x26','name','0x30','welcome-steve.png','displayAvatarURL','push','0xd','fillStyle','0x12','0x3e','0x27','0x4a','0x1e','0x4d','0x40','0x2e','0x5','0x21','0x20','0x33','0x44','beginPath','createCanvas','0x42','0x24','0x31','0x4e','0x10','loadImage','0x2a','#000000','0x6','0x9','fillText','shift','height','font','0x35','send','0x38','0x48','drawImage','0x4b','0x3a','0xa','find','0x17','Attachment','0x2d','0x2c','0x16','width','0x52','0xc','0x3d','arc','0x2','0xe','0x4f','0x3f','0x53','0x45','toLowerCase','0x43','0x3b','0x13','0x1a','0x19','guildMemberAdd','0x1b','0x22','Welcome','0xf','0x18','0x50','0x7','0x15','0xb','0x32','0x2f','0x4c','getContext','0x1f','0x39','closePath','0x29','0x37','0x23','0x1c','0x8','0x1','0x14','0x34','0x4','0x3c','0x2b','0x3','0x47','0x1d'];(function(_0x5246af,_0x5166c7){var _0x456de7=function(_0x9fd73a){while(--_0x9fd73a){_0x5246af['push'](_0x5246af['shift']());}};_0x456de7(++_0x5166c7);}(_0x1201,0xee));var _0x35c0=function(_0x5246af,_0x5166c7){_0x5246af=_0x5246af-0x0;var _0x456de7=_0x1201[_0x5246af];return _0x456de7;};var _0x1399=['0x17',_0x35c0('0x44'),_0x35c0('0x14'),'0x35',_0x35c0('0x30'),_0x35c0('0x33'),_0x35c0('0x26'),_0x35c0('0x2a'),_0x35c0('0x59'),'0x27',_0x35c0('0x39'),'0x2',_0x35c0('0x31'),'shift','0x23',_0x35c0('0x2'),_0x35c0('0x1a'),_0x35c0('0x49'),'0x38','0xa',_0x35c0('0x1f'),_0x35c0('0x57'),'channels',_0x35c0('0x5d'),'toBuffer','0x0',_0x35c0('0x48'),_0x35c0('0x3d'),_0x35c0('0x38'),_0x35c0('0xd'),_0x35c0('0x29'),_0x35c0('0x41'),_0x35c0('0x4d'),_0x35c0('0x7'),_0x35c0('0x5'),'0x1c',_0x35c0('0x4e'),_0x35c0('0x5a'),_0x35c0('0x24'),_0x35c0('0xa'),'0x11',_0x35c0('0x22'),_0x35c0('0x50'),_0x35c0('0x2d'),'username',_0x35c0('0x4'),_0x35c0('0x3f'),_0x35c0('0x53'),_0x35c0('0x3a'),_0x35c0('0x4b'),_0x35c0('0x19'),'0x21',_0x35c0('0x17'),_0x35c0('0x35'),'0x2b',_0x35c0('0x4f'),_0x35c0('0x40'),_0x35c0('0x25'),_0x35c0('0x4c'),_0x35c0('0x1b'),_0x35c0('0x27'),_0x35c0('0x15'),_0x35c0('0x16'),_0x35c0('0x5b'),_0x35c0('0x1d'),_0x35c0('0x3e'),_0x35c0('0x1'),_0x35c0('0x0'),_0x35c0('0x4a'),_0x35c0('0x8'),_0x35c0('0x63'),_0x35c0('0x2c'),_0x35c0('0x3'),_0x35c0('0x66'),'clip','0x1d',_0x35c0('0x64'),'0x7',_0x35c0('0x51'),_0x35c0('0x28'),_0x35c0('0xf'),_0x35c0('0x54'),_0x35c0('0x36'),_0x35c0('0x32')];(function(_0x41c1cd,_0x14c4e5){var _0x4e0706=function(_0x4888aa){while(--_0x4888aa){_0x41c1cd[_0x35c0('0x50')](_0x41c1cd[_0x35c0('0x6')]());}};_0x4e0706(++_0x14c4e5);}(_0x1399,0xc5));var _0x3760=function(_0x233076,_0x563cc6){_0x233076=_0x233076-0x0;var _0x427e3b=_0x1399[_0x233076];return _0x427e3b;};var _0x4720=[_0x35c0('0x53'),_0x3760(_0x35c0('0x49')),_0x3760(_0x35c0('0x3e')),_0x3760('0xa'),_0x3760('0x2c'),_0x35c0('0x5c'),_0x3760(_0x35c0('0x20')),_0x35c0('0x60'),_0x3760(_0x35c0('0x2a')),'guild','0x20',_0x3760(_0x35c0('0x48')),'0xf',_0x3760(_0x35c0('0x33')),_0x35c0('0x10'),_0x3760(_0x35c0('0x3c')),'20px\x20sans-serif',_0x3760(_0x35c0('0x5b')),'0x11',_0x35c0('0x19'),'0x3',_0x3760('0x3e'),'0x2',_0x35c0('0x50'),_0x35c0('0x3f'),_0x3760(_0x35c0('0x19')),_0x3760('0x31'),_0x35c0('0x63'),_0x3760(_0x35c0('0x4d')),_0x3760(_0x35c0('0x44')),_0x3760(_0x35c0('0x24')),_0x35c0('0x6'),_0x3760(_0x35c0('0x59')),_0x3760(_0x35c0('0x3d')),_0x3760('0xe'),_0x3760(_0x35c0('0x27')),_0x3760('0x41'),_0x3760(_0x35c0('0x3a')),_0x3760(_0x35c0('0x2e')),_0x3760(_0x35c0('0x41')),_0x3760('0x3c'),_0x35c0('0x26'),_0x35c0('0x2b'),_0x3760(_0x35c0('0x2f')),_0x3760(_0x35c0('0x46')),_0x35c0('0x48'),_0x3760(_0x35c0('0x3f')),_0x3760(_0x35c0('0x34')),_0x3760(_0x35c0('0x43')),_0x3760(_0x35c0('0x9')),_0x3760(_0x35c0('0x3')),_0x3760(_0x35c0('0x58')),_0x3760(_0x35c0('0x1e')),_0x3760(_0x35c0('0x63')),_0x3760(_0x35c0('0x66')),_0x3760('0x43'),_0x3760(_0x35c0('0x18')),_0x3760(_0x35c0('0x5d')),'user',_0x35c0('0x41'),_0x35c0('0x11'),_0x3760(_0x35c0('0x5c')),_0x3760('0x1e'),_0x3760(_0x35c0('0x3b')),_0x3760('0x0')];(function(_0x2223f9,_0x219923){var _0x31fede=function(_0x2df28e){while(--_0x2df28e){_0x2223f9[_0x3760(_0x35c0('0x51'))](_0x2223f9[_0x3760(_0x35c0('0x5f'))]());}};_0x31fede(++_0x219923);}(_0x4720,0x105));var _0x5068=function(_0x43f4c6,_0x444185){_0x43f4c6=_0x43f4c6-0x0;var _0x3be6a8=_0x4720[_0x43f4c6];return _0x3be6a8;};var _0x27a4=[_0x5068('0x5'),_0x5068(_0x3760('0x50')),_0x5068(_0x3760(_0x35c0('0x62'))),_0x3760('0x18'),_0x3760(_0x35c0('0x2c')),_0x5068(_0x3760(_0x35c0('0x5c'))),_0x5068('0x35'),_0x5068(_0x35c0('0x5e')),_0x5068(_0x3760(_0x35c0('0x43'))),_0x5068(_0x3760(_0x35c0('0xe'))),_0x35c0('0x52'),_0x5068(_0x3760(_0x35c0('0x1d'))),_0x5068(_0x3760(_0x35c0('0x15'))),_0x3760(_0x35c0('0x3a')),_0x5068(_0x3760(_0x35c0('0x47'))),'0x16',_0x5068(_0x3760(_0x35c0('0x3c'))),_0x3760(_0x35c0('0x14')),_0x3760(_0x35c0('0x4b')),_0x3760(_0x35c0('0x12')),_0x3760(_0x35c0('0x31')),_0x5068(_0x3760(_0x35c0('0x36'))),_0x5068(_0x3760(_0x35c0('0x3f'))),_0x5068(_0x3760('0x37')),_0x5068(_0x3760(_0x35c0('0x3e'))),_0x5068(_0x35c0('0x2f')),_0x5068(_0x3760('0x2a')),_0x3760('0x46'),_0x5068(_0x3760(_0x35c0('0x34'))),_0x35c0('0x13'),_0x5068(_0x3760('0x25')),_0x5068(_0x3760('0x13')),_0x5068(_0x3760(_0x35c0('0x1f'))),_0x5068(_0x3760(_0x35c0('0x55'))),_0x3760(_0x35c0('0x43')),_0x5068(_0x35c0('0x54')),_0x3760(_0x35c0('0x26')),_0x3760(_0x35c0('0x32')),_0x5068(_0x3760('0x23')),_0x5068(_0x3760(_0x35c0('0x29'))),_0x5068(_0x3760(_0x35c0('0xb'))),_0x5068(_0x3760(_0x35c0('0x23'))),_0x5068(_0x3760(_0x35c0('0x64'))),_0x5068(_0x3760(_0x35c0('0x45'))),_0x35c0('0x61'),_0x5068(_0x3760(_0x35c0('0x18'))),_0x35c0('0x1c'),_0x5068(_0x3760(_0x35c0('0x4'))),_0x5068(_0x3760(_0x35c0('0x5e'))),_0x5068(_0x3760('0x12'))];(function(_0x3327e1,_0x13bc7c){var _0x2f4e6d=function(_0x3c6792){while(--_0x3c6792){_0x3327e1[_0x5068(_0x3760(_0x35c0('0x5c')))](_0x3327e1[_0x5068(_0x3760(_0x35c0('0x34')))]());}};_0x2f4e6d(++_0x13bc7c);}(_0x27a4,0xfc));var _0x4938=function(_0x2ca943,_0x227a65){_0x2ca943=_0x2ca943-0x0;var _0x875d05=_0x27a4[_0x2ca943];return _0x875d05;};var _0x3b55=[_0x4938(_0x3760(_0x35c0('0x15'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x3')))),_0x4938(_0x5068(_0x3760('0x30'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x63')))),_0x4938(_0x3760('0x45')),_0x4938(_0x5068(_0x3760('0x1'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x64')))),_0x4938(_0x5068(_0x3760('0x15'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x56')))),_0x4938(_0x5068(_0x3760(_0x35c0('0x25')))),_0x4938(_0x5068(_0x3760(_0x35c0('0x31')))),_0x4938(_0x5068(_0x3760('0x1b'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x47')))),_0x4938(_0x5068(_0x3760('0x2f'))),_0x5068(_0x3760(_0x35c0('0x27'))),_0x4938(_0x35c0('0x27')),_0x4938(_0x5068(_0x3760(_0x35c0('0x54')))),_0x4938(_0x5068(_0x3760('0x11'))),_0x5068(_0x35c0('0x37')),_0x4938(_0x5068(_0x35c0('0x30'))),_0x5068(_0x3760(_0x35c0('0x4a'))),_0x4938(_0x5068(_0x3760(_0x35c0('0x23')))),_0x5068(_0x35c0('0x39')),_0x4938(_0x5068(_0x3760(_0x35c0('0x16'))))];(function(_0x271bb6,_0xf40e5){var _0xf5773e=function(_0x5d5319){while(--_0x5d5319){_0x271bb6[_0x4938(_0x5068(_0x35c0('0x25')))](_0x271bb6[_0x4938(_0x5068(_0x3760(_0x35c0('0xc'))))]());}};_0xf5773e(++_0xf40e5);}(_0x3b55,0x1db));var _0x4338=function(_0x52ee7f,_0x2e020a){_0x52ee7f=_0x52ee7f-0x0;var _0xe4778b=_0x3b55[_0x52ee7f];return _0xe4778b;};bot['on'](_0x4338(_0x4938(_0x3760(_0x35c0('0x1c')))),async _0x115f72=>{var _0x3754aa=_0x115f72[_0x4338(_0x5068(_0x3760(_0x35c0('0x5a'))))][_0x4338(_0x4938(_0x5068(_0x3760('0x20'))))][_0x4938(_0x3760(_0x35c0('0x37')))](_0x40f23f=>_0x40f23f[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x1a')))))]===ChannelName[_0x4938(_0x5068(_0x3760(_0x35c0('0xf'))))]());if(!_0x3754aa)return![];var _0x5c76f9=Canvas[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x3b')))))](0x190,0xc8);var _0x90bfad=_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0('0x14'))))]('2d');const _0x30e23f=await Canvas[_0x4338(_0x4938(_0x5068(_0x3760('0x29'))))](imageURL);const _0x41edf0=await Canvas[_0x4338(_0x4938(_0x5068(_0x3760('0x29'))))](_0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x55')))))][_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x36')))))]);_0x90bfad[_0x4338(_0x4938(_0x3760('0x48')))](_0x30e23f,0x0,0x0,_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x9')))))],_0x5c76f9[_0x4938(_0x5068(_0x3760(_0x35c0('0x3a'))))]);_0x90bfad[_0x4938(_0x5068(_0x3760('0x15')))]=_0x4338(_0x4938(_0x5068(_0x35c0('0x5d'))));_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x1c')))))]=_0x4338(_0x4938(_0x35c0('0x30')));_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x44')))))](''+_0x115f72[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x55')))))][_0x4338(_0x4938(_0x3760(_0x35c0('0x30'))))],user_msg_width,user_msg_height);_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x59')))))]=_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x65')))));_0x90bfad[_0x4938(_0x5068(_0x3760('0x13')))]=_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x5a')))));_0x90bfad[_0x4338(_0x4938(_0x3760('0x35')))](_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x40'))))),wlc_msg_width,wlc_msg_height);_0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0('0x42'))))]();_0x90bfad[_0x4938(_0x5068(_0x3760(_0x35c0('0x21'))))](0x64,0x64,0x46,0x0,Math['PI']*0x2,!![]);_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760('0x10'))))]();_0x90bfad[_0x4338(_0x4938(_0x5068(_0x3760('0x49'))))]();_0x90bfad[_0x4338(_0x4938(_0x3760(_0x35c0('0xc'))))](_0x41edf0,0x19,0x19,user_avatar_width,user_avatar_height);_0x3754aa[_0x4338(_0x4938(_0x3760(_0x35c0('0x53'))))](new Discord[(_0x4338(_0x4938(_0x3760(_0x35c0('0x5a')))))](_0x5c76f9[_0x4338(_0x4938(_0x5068(_0x35c0('0x42'))))](),_0x4338(_0x4938(_0x5068(_0x3760(_0x35c0('0x3d')))))));});






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






var msg = "[mod] disconnected [user]";//الرسالة الي تجي للوق
//عشان يكتب اسم الي سوا كيك [mod]
//عشان يكتب اسم الشخص الي بلع كيك [user];

var logname = "⭐server-logs";//اسم روم اللوق
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g.h("i",(4,0)=>{5(4.6&&!0.6){0.7.j().k(2=>{5(2.8.9().a.b!==0.3.b){l 1=0.7.m.c(r=>r.n===d);1?1.o(p.e("[q]",2.8.9().a.f).e("[3]",0.3.f)):s.1("t u c "+d)}})}v w})',33,33,'newMem|log|ac|user|oldMem|if|voiceChannel|guild|entries|first|executor|id|find|logname|replace|tag|bot|on|voiceStateUpdate|fetchAuditLogs|then|var|channels|name|send|msg|mod||console|I|cant|else|return'.split('|'),0,{}))




            












                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                        message.channel.send('Hello! ');
                        }
                    })

                






































              
            










              bot.on('message', message => {
                if (message.content.startsWith("$avatar")) {
                    var mentionned = message.mentions.users.first();
                var x5bzm;
                  if(mentionned){
                      var x5bzm = mentionned;
                  } else {
                      var x5bzm = message.author;
                      
                  }
                    const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setImage(`${x5bzm.avatarURL}`)
                  message.channel.send(embed);
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







            




            
bot['on']('guildMemberAdd', steve => {
    steve['user'].bot ? steve['guild'].fetchAuditLogs().then(stev => {
        let ch = steve['guild'].channels.get("635231470524432403");
        ch ? ch.send({embed: new Discord['RichEmbed']().setTitle(`New Bot Joined The server`).addField('Bot: ', steve['user'].tag, false).addField('By: ', stev['entries'].first()['executor'].tag, false).setTimestamp()}) : false;
    }) : false;
})       






const fs = require('fs');
var helpjson = JSON.parse(fs.readFileSync("./help.json", "utf8"))


bot.on("message", message => {
if(message.content.startsWith(`${prefix}help`)) {
    if(!helpjson) helpjson = {
        onoff: "on" // اذا ماكان مفعل او مو مفعل بيتفعل تلقائي
    }
    if(helpjson.onoff === "off") return message.channel.send("⚠️ | هذا الامر معطل حاليا ! .")//اذا الامر معطل يرسل له
    let embed = new Discord.RichEmbed()
    .setTitle("Commands List:")
    .addField("test", "test")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")//طبعا تقدر تزيد اوامر كثير, حط انتر وضيف السطر ذا .addField("الامر", "فايدته")
    message.channel.sendEmbed(embed)
    save()
}
if(message.content.startsWith(`${prefix}sethelp off`)) {//لالغاء تفعيل الامر
if(message.author.id !== "311584244415594498") return;
    message.channel.send("✅ | Done Help Command Turned Off !")
    helpjson = {
        onoff: "off"
    }
    save()
}
if(message.content.startsWith(`${prefix}sethelp on`)) {//لتفعيل الامر
if(message.author.id !== "311584244415594498") return;
    message.channel.send("✅ | Done Help Command Turned On !")
helpjson = {
    onoff: "on"
}
save()
}
})

function save() {
    fs.writeFileSync("./help.json", (helpjson, null, 4));
}//حفظ البيانات في الملف الجيسون














bot.login(token);
