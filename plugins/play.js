process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `text?\n\nExmple:\n${usedPrefix + command} Look at me`
  let chat = global.db.data.chats[m.chat]
  conn.reply(m.chat, '*Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ...*', m, {quoted: m, thumbnail: await (await fetch('https://i.imgur.com/SKUjlZw.jpeg')).buffer(), contextInfo: { externalAdReply: {title: 'Turbo X Ajmal', sourceUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}`, body: '© Kakashi Md By Turbo And Ajmal', thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),}}})
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw '..'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
  if (yt === false) throw 'Server Error'
  if (yt2 === false) throw 'Server Error'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
    const ytplayt = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `❏ PLAY YOUTUBE`, 
    orderTitle: `▮Menu ▸`,
    thumbnail: await (await fetch('https://i.imgur.com/ihNQ9ky.jpeg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
  await conn.send3ButtonImg(m.chat, await (await fetch(thumb)).buffer(), `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAY YOUTUBE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*💌 Title:* ${title}
*🎶 Audio:* ${filesizeF}
*🎥 Video:* ${yt2.filesizeF}
*💻 Server y2mate:* ${usedServer}
`.trim(), wm2, `🎙️ Audio`, `.yta ${vid.url}`, `🎥 Video`, `.ytv ${vid.url}`, '🔎 YouTube Search', `.yts ${title}`, ytplayt, {
    contextInfo: { forwardingScore: 99999, isForwarded: true,
        externalAdReply: {
            title: ' ꕥ─────•「 Kakashi ▶︎ Md 」•─────ꕥ', 
            body: 'The Copy Ninja Kakashi 🔥',
            description: 'Turbo X Ajmal',
            mediaType: 2,
          thumbnail: await genProfile(conn, m),
         mediaUrl: `${pickRandom([`https://www.facebook.com/`,`https://instagram.com/`,`https://github.com/`,`https://youtu.be/`])}` 
        }
     }
    })
}
handler.help = ['song','video'].map(v => v + ' <text>')
handler.tags = ['downloader']
handler.command = /^(song|video)$/i

module.exports = handler
