let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. where is the text?\n\nexample:\n${usedPrefix + command} menu`
    if (!ar1.includes(text)) return m.reply(`'${text}' not found!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(require('fs').readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true

module.exports = handler
