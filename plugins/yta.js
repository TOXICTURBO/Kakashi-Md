let axios = require('axios')
const fetch = require('node-fetch')
let limit = 1024354
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... where is the url?'
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize 
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
â”â”‰â”â”â”â”â”â”â”â”â”â”â”â
â”† *YOUTUBE MP3*
â”œâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆâ”ˆ
â”†â€¢ *Title:* ${title}
â”‚â€¢ *Type:* MP3
â”†â€¢ *ðŸ“¥ File Size:* ${filesizeF}
â””â
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.help = ['mp3','a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler

