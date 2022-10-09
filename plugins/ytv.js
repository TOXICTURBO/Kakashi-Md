let fetch = require('node-fetch')
const { servers } = require('../lib/y2mate')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, text, args,usedPrefix,command,isPrems, isOwner }) => {
  try{if (!text) throw `_URL Not Found_`
  let ras = `wrong url, this command to download video/shorts`
  if (!args[0].match(/(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)\/(watch|shorts)|(https|http):\/\/(www.youtube.com|www.youtube|www.youtu.be|youtube.com|youtu.be.com|youtu.be)/gi)) throw ras
  let limit
  if((isOwner || isPrems)) limit = 300
  else limit = 100
  if (!args || !args[0]) throw nolink
  try {
  let vid = await youtubedl(args[0])
  let { thumbnail, title } = vid
  let det = vid.video['480p']
  let url = await det.download()
   await conn.sendFile(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: `Kakashi Md`, 
    title: `Turbo Mods`,
    body: `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }} 
  }) 
  } catch {
  try {
  let vid = await youtubedlv2(args[0])
  let { thumbnail } = vid
  let det = vid.video['360p']
  let { fileSize } = det
  let url = await det.download()
   await conn.sendFile(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: `Kakashi Md`, 
    title: `Turbo Mods`,
    body: `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  let vid = await youtubedlv3(args[0])
  let { thumbnail } = vid
  let det = vid.video['720p']
  let { fileSize } = det
  let url = await det.download()
   await conn.sendFile(m.chat, url, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: `Kakashi Md`, 
    title: `Turbo Mods`,
    body: `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  }) 
  } catch {
  try {
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb: thumbnail, filesize } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
  if(!isLimit) await conn.sendFile(m.chat, dl_link, null, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `${args[0]}`,
    mediaType: 2,
    description: `Kakashi Md`, 
    title: `Turbo Mods`,
    body: `${fileSizeH}`,
    thumbnail: await(await fetch(thumbnail)).buffer(),
   }}
  })
  } catch {
    throw eror 
        }
      }
    }
  }
}catch(e){
  conn.reply(m.chat,`${e}`)
  conn.reply('916380260672@s.whatsapp.net',`!    
  
     : ${usedPrefix+command}
    
      :
       •    
       •  
       •  
       •    
       •    `, null, {})
}}
handler.help = ['ytv']
handler.tags = ['downloader']
handler.command = /^yt(v?(ideo)?|mpp?4|v?short)(d(oc(ument)?)?)?$/i



module.exports = handler
