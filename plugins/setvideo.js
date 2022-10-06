let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `reply video with command *${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
let media = await m.quoted.download()
fs.writeFileSync(`./KakashiMedia/menu.mp4`, media)
fs.writeFileSync(`./KakashiMedia/kakashi.mp4`, media)
let send = `${global.wait}`
}
await conn.reply(m.chat, m, send)
}
handler.help = ['setvideo','setmenuvideo']
handler.tags = ['owner']
handler.command = /^(setvideo|setmenuvideo)$/i

module.exports = handler