let handler = async (m, { conn, text }) => {
    m.reply('Wait a moment, the process of getting file session.json')
   // let seso = await fs.readFileSync('./index.js.data.json') // klo lu run di panel
    let sesi = await fs.readFileSync('./session.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'session.json' }, { quoted: m })
}
handler.help = ['getsessi']
handler.tags = ['host']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

module.exports = handler