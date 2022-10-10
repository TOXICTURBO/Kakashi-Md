let fetch = require('node-fetch')
const { yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Exmple:\n${usedPrefix + command} url`
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  buf = await getBuffer(media.thumb)
  conn.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:media.title,
                body:"Kakashi Md",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `https://youtu.be/` }}}, {quoted:m})
        }
     }
  })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler