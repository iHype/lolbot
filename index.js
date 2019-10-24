const Discord = require("discord.js");
const ms = require("ms");
let a = {}
let b = {}
var mybot = new Discord.Client();
let sentMessage = {}
mybot.on("ready", async ready =>{
  console.log("ready");
  console.log(mybot.user.username + " is online on " + mybot.guilds.array().length + " guilds:\n" + mybot.guilds.array().join("\n").toString());
})
mybot.on("message", async message => {    
 // if(message.guild.id === "282275654760660993") return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.channel.send("No DM's");
  let messageArray = message.content.split(" ");
  let cmd = messageArray['0'];
  let lol = message.guild.members.find("id", message.author.id)
  let firstmention = message.mentions.members.first();
  let args = messageArray.slice(1);
  let translateArg = args.slice(1) || messageArray.slice(2);
  let tragetLanguage = args['0'] || messageArray['1'];
  /*if(message.mentions.members.size >= 7 || message.mentions.roles.array().length >= 7 || message.mentions.users.array().length >= 7){
    // if(lol.hasPermission("KICK_MEMBERS")) return;
    console.log("Hmmm");
    let lol = message.guild.members.find('id',message.author.id);
    lol.addRole(message.guild.roles.find('name','muted').id);
    message.channel.send(message.author + ', no mass mention!').then(async t => {await t.delete(5000)})
    setTimeout( function() {lol.removeRole(message.guild.roles.find("name", "muted").id)}, 10000)
    message.delete(250);
    }*/
  /*
  if(message.content.replace(/:/g, "").length >= 20) {
    message.delete(500);
    let lol = message.guild.members.find("id", message.author.id);
    let xd = message.guild.roles.find("name", "muted").id
    lol.addRole(xd);
    setTimeout( function() {lol.removeRole(xd)},10000)
    message.channel.send("No emoji spam").then(async a => {await a.delete(2500)})
    }*/
  /*if(!sentMessage[message.author.id]) {
    sentMessage[message.author.id] = {
    sent: 0,
    mutedForSpam: 0
    }
  }*/
  //sentMessage[message.author.id].sent = sentMessage[message.author.id].sent + 1;
//  setTimeout(async function() {  sentMessage[message.author.id].sent = sentMessage[message.author.id].sent - 1;}, 2000)
//let userMessage = message.guild.members.find("id", message.author.id)
    /*if(message.content === "ping") {
        message.channel.send("pong");
    }*/
//let muteroleid = message.guild.roles.find("name", "muted").id;
 /* if(sentMessage[message.author.id].sent === 4) {
    if(lol.hasPermission("BAN_MEMBERS") || lol.hasPermission("KICK_MEMBERS") || message.channel.id === "496680193591869441" || message.channel.id === "334870578748063745" || message.author.id === "525029843583238144") return;
    sentMessage[message.author.id].mutedForSpam = sentMessage[message.author.id].mutedForSpam + 1;
    await message.channel.bulkDelete(4)
    let cyber = message.guild.members.find("id", "299495028756054016")
    let hyper = message.guild.members.find("id", "430447525800181762")
    let ibrahim = message.guild.members.find("id", "453970692266786816")
    let embedTimeout1p = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Someone was timed out for spamming!")
    .setDescription("Go and investigate immediately\n 1 point")
    .addField("User", message.author + "\n(" + userMessage.displayName + ")")
    .addField("Channel", message.channel)
    .addField("Discord server", message.guild.name);
    let embedTimeout2p = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Someone was timed out for spamming!")
    .setDescription("Go and investigate immediately\n2 points")
    .addField("User", message.author + "\n(" + userMessage.displayName + ")")
    .addField("Channel", message.channel)
    .addField("Discord server", message.guild.name);
    let embedTimeout3p = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Someone was timed out for spamming!")
    .setDescription("Go and investigate immediately\n3 POINTS!!!! MIGHT BE A RAIDER")
    .addField("User", message.author + "\n(" + userMessage.displayName + ")")
    .addField("Channel", message.channel)
    .addField("Discord server", message.guild.name);
    // 1 point(normal mute): 10 sec mute, point expires after 1 hour
    // 2 points(medium mute): 30 min mute, point expires after 3 hours
    // 3 points(raiders): indefinite mute(resets points)
    if(sentMessage[message.author.id].mutedForSpam === 1){
        function p1time() {userMessage.addRole(muteroleid);
        cyber.send(embedTimeout1p);
        hyper.send(embedTimeout1p);
        ibrahim.send(embedTimeout1p);
        message.channel.startTyping(100000);
        setTimeout( function() {message.channel.stopTyping(true);}, 5000)
        setTimeout( async function() {sentMessage[message.author.id].mutedForSpam = 0}, ms("1h"))
        message.channel.send("***" + userMessage.displayName + " has been muted for spamming.***").then(msg => {
          setTimeout( function() {
            msg.edit("***" + userMessage.displayName + " has been unmuted.***").then(t => {
              t.delete(5000)
            })
          }, 10000)
        })
        setTimeout( function() {
          userMessage.removeRole(muteroleid);
        }, 10000)}
      p1time()
      }
      if(sentMessage[message.author.id].mutedForSpam === 2){
        userMessage.addRole(muteroleid);
        cyber.send(embedTimeout2p);
        hyper.send(embedTimeout2p);
        ibrahim.send(embedTimeout2p);
        message.channel.send(message.author + " has been muted for spamming..").then(async a => {await a.delete(5000)})
        setTimeout( async function() {userMessage.removeRole(muteroleid)}, ms("30m"))
        setTimeout( async function() {sentMessage[message.author.id].mutedForSpam = 0}, ms("6h"))
      }
      if(sentMessage[message.author.id].mutedForSpam === 3){
        userMessage.addRole(muteroleid);
        cyber.send(embedTimeout3p);
        hyper.send(embedTimeout3p);
        ibrahim.send(embedTimeout3p);
        message.channel.send(message.author + " has been muted for possible raiding...").then(async b => {await b.delete(5000)})
        sentMessage[message.author.id].mutedForSpam = 0;
      }
      } */
/*   if(message.content.startsWith("-name")){
    mybot.user.setUsername(args.join(" ").toString());
  } */
  if(message.channel.id === "524302149014781952"){
if(message.member.hasPermission("KICK_MEMBERS")) return

 
 if(!a[message.author.id]){
 a[message.author.id] = {
 suggested: 1
   }
   setTimeout(async function(){a[message.author.id].suggested = 0}, ms('24h'));
   return
 }
   if(a[message.author.id].suggested === 1) {
      message.delete(500);
      return //message.author.send("Please only send a suggestion every 24 hours")
    }
 }
  
    if(message.channel.id === "524621634598862869"){
if(message.member.hasPermission("KICK_MEMBERS")) return

 
 if(!b[message.author.id]){
 b[message.author.id] = {
 suggested: 1
   }
   setTimeout(async function(){b[message.author.id].suggested = 0}, ms('24h'));
   return
 }
 /*  if(b[message.author.id].suggested === 1) {
      message.delete(500);
      return message.author.send("Please only send a suggestion every 24 hours")
    }
 }*/
  
 /* if(message.content.startsWith("-test")) {
  message.channel.send(sentMessage[message.author.id].sent);
  }*/
  /*if(cmd === "-fetch") {
    if(!args) return;
    const fetch = message.channel.fetchMessages(args.join(" ").toString())
    message.channel.send(fetch + "_ _")
  } */
/*  if(cmd === "-resetpoints" || cmd === "-resetpoint"){
    if(message.author.id === "430447525800181762" || message.author.id === "299495028756054016" || lol.hasPermission("KICK_MEMBERS") || message.author.id === "453970692266786816") {
    let xd = message.mentions.members.first() 
    xd.removeRole(muteroleid)
    sentMessage[xd.id].mutedForSpam = 0
    await message.delete(250)
    message.author.send("Successfuly reset points of " + xd).then(async c => {await c.delete(ms("10s"))})
  }}
  if(cmd === "-messagedelete") { 
    if(message.author.id === "299495028756054016" || message.author.id === "430447525800181762" || lol.hasPermission("KICK_MEMBERS") || message.author.id === "453970692266786816"){
    message.channel.fetchMessage(args[0]).then(async d => {await d.delete()})
  }}
  if(cmd === "-purge") {
      if(message.author.id === "299495028756054016" || message.author.id === "430447525800181762" || lol.hasPermission("KICK_MEMBERS") || message.author.id === "453970692266786816"){
        message.channel.bulkDelete(args[0])
  }}*/
  /*  if(cmd === "-addpoint" && args[0]) {
      if(message.author.id === "299495028756054016" || message.author.id === "430447525800181762" || lol.hasPermission("KICK_MEMBERS") || message.author.id === "453970692266786816"){
      async function lmao() {
        await message.delete(100);
        sentMessage[firstmention.id].mutedForSpam = sentMessage[firstmention.id].mutedForSpam + 1
        message.author.send("You have successfully added 1 point to " + message.channel.guild.members.find("id", firstmention.id).displayName + " mute points. This person has a total of " + sentMessage[firstmention.id].mutedForSpam + " mute points.")
        if(sentMessage[firstmention.id].mutedForSpam === 1) {
          firstmention.addRole(muteroleid);
          setTimeout(async function() {
          firstmention.removeRole(muteroleid);
        }, 10000)
          setTimeout( async function() {sentMessage[firstmention.id].mutedForSpam = 0}, ms("1h"))
        }
           if(sentMessage[firstmention.id].mutedForSpam === 2) {
                firstmention.addRole(muteroleid);
                  setTimeout( async function() {firstmention.removeRole(muteroleid)}, ms("30m"))
                  setTimeout( async function() {sentMessage[firstmention.id].mutedForSpam = 0}, ms("6h"))
           }
            if(sentMessage[firstmention.id].mutedForSpam === 3) {
                firstmention.addRole(muteroleid);
                sentMessage[firstmention.id].mutedForSpam = 0;
              message.author.send("Note: the person that you just added a point to got muted `indefinitely` AND his points reset, this means addpoint doesn't make sense here.")
            }
        }
     lmao(); }*/
      
  }
});
mybot.login(process.env.lolbottoken); //Z+6
