let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/ytcomment?apikey=5e0b5cf41125348368c4f017&username=name&comment=teks&img=pp')
let json = await res.json()
let media = await m.quoted.download()
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let { registered } = global.db.data.users[m.sender]
let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender) 
let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
conn.reply(m.chat, json.url, m)
}
handler.help = ['ytc <teks>']
handler.tags = ['sticker']

handler.command = /^ytc$/i

module.exports = handler