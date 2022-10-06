let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `reply video with command *${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
let media = await m.quoted.download()
fs.writeFileSync(`./KakashiMedia/menu.mp4`, media)
fs.writeFileSync(`./KakashiMedia/kakashi.mp4`, media)
let setsend = `${global.wait}`
let out = Buffer.alloc(0)
}
await conn.sendFile(m.chat, out, 'out.png', setsend, '', m, false, { thumbnail: out })
}
handler.help = ['setvideo','setmenuvideo']
handler.tags = ['owner']
handler.command = /^(setvideo|setmenuvideo)$/i

module.exports = handler