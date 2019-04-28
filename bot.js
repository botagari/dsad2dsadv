const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message',async message => {
  if(message.author.bot) return;
var prefix = "l-"
if(message.content.indexOf(prefix) !== 0) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === "start") {
var title = args[0].split('-').join(" ");
if(args[2]) {
  message.channel.send(` \`\`\`MD
  # Title format <word>-<word>-<word>
  < do not use spaces use - insted
   \`\`\``);
}
var time = args[1].split(":");
var sec = time[3];
var min = time[2];
var hou = time[1];
var day = time[0];
 
if((hou * 1) > 24) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < hours must be 24 or less
   \`\`\``);
}
else if((sec * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < minutes must be 60 or less
  \`\`\``);
}
else if((min * 1) > 60) {
  message.channel.send(` \`\`\`MD
  # time format <days> : <hours> : <minutes> : <secondes>
  < seconds must be 60 or less
  \`\`\``);
}
else  {
 
var upgradeTime = sec;
upgradeTime = upgradeTime * 2 / 2 + (min * 60);
upgradeTime = upgradeTime * 2 / 2 + (hou * 60 * 60);
upgradeTime = upgradeTime * 2 / 2 + (day * 24 * 60 * 60);
var seconds = upgradeTime;
var duration = (upgradeTime * 1000)
  if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **s You Dont Have Premission**');
  if(!args) return message.channel.send(`**Use : #start  <Presentse> <Time>**`);
  if(!title) return message.channel.send(`**Use : **\`#start ${args[0]} Minutes\`** <Presentse>**`);
  if(!isNaN(args[1])) return message.channel.send(':heavy_multiplication_x:| **The Time Be Nambers `` Do the Commend Agin``**');
        let giveEmbed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .setDescription(`**${title}** \nReact Whit 🎁 To Enter! \n**Ends  after   ${day} day  ${hou} hour  ${min} minute ${sec} second**`)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(' :heavy_check_mark: **Giveaway Created** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
          message.delete();
          m.react('🎁');
              var giveAwayCut = setInterval(function() {
                  var days        = Math.floor(seconds/24/60/60);
                  var hoursLeft   = Math.floor((seconds) - (days*86400));
                  var hours       = Math.floor(hoursLeft/3600);
                  var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
                  var minutes     = Math.floor(minutesLeft/60);
                  var remainingSeconds = seconds % 60;
                  if (seconds != 0) {
                    seconds--;
                  }
              let updateGiveEmbed = new Discord.RichEmbed()
              .setAuthor(message.guild.name, message.guild.iconURL)
              .setDescription(`**${title}** \nReact With 🎁 To Enter! \n**Ends  after   ${days} day  ${hours} hour  ${minutes} minute ${remainingSeconds} second**`)
              .setFooter(message.author.username, message.author.avatarURL);
              m.edit(updateGiveEmbed)
            }, 1000);
         setTimeout(() => {
          clearInterval(giveAwayCut)
           let users = m.reactions.get("🎁").users;
           let list = users.array().filter(u => u.id !== client.user.id);
           let gFilter = list[Math.floor(Math.random() * list.length) + 0]
           let endEmbed = new Discord.RichEmbed()
           endEmbed.setAuthor(message.author.username, message.author.avatarURL)
           endEmbed.setTitle(title)
           endEmbed.addField('Giveaway End !🎁',`Winners : ${gFilter}`)
         m.edit('** 🎁 GIVEAWAY ENDED 🎁**' , {embed: endEmbed});
         },duration);
       });
  }
}
});
 
 
client.login(process.env.BOT_TOKEN);
