let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) throw `Exmple:\n${usedPrefix + command} url`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  conn.sendFile(m.chat, dl_link, title + '.mp3', `
â”â”‰â”â”â”â”â”â”â”â”â”â”â”â
â”† *YOUTUBE MP3*
â”œâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆ
â”†â€¢ *Title:* ${title}
â”‚â€¢ *Type:* MP3
â”†â€¢ *ðŸ“¥ File Size:* ${filesizeF}
â””â
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: false, contextInfo: {
        externalAdReply: {
            title: `${title}`, 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `https://instagram/toxic_turbo777`
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