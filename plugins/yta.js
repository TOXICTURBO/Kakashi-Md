let limit = 30
let fetch = require('node-fetch')
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `example:\n${usedPrefix + command} https://youtu.be/x5RQZWnSmhY`
  let chat = global.db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let sender = m.sender
    let pp = await conn.profilePictureUrl(sender, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Here Is The Audio, Enjoy`, 
    orderTitle: `Kakashi Md`,
    thumbnail: await conn.resize(await (await fetch(pp)).buffer(), 300, 300),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `File Size: ${filesizeF}\nFile size above ${limit} MB, download link: ${dl_link}` : global.wait)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
  
*YOUTUBE MP3*

*Title:* ${title}
*Type:* MP3
*File Size:* ${filesizeF}
`.trim(), ftrol, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: false, contextInfo: {
        externalAdReply: { showAdAttribution:Â true,
            title: `${title}`, 
            body: 'Now Playing...',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
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
handler.exp = 0
handler.limit = true

module.exports = handler
