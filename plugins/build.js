let { MessageType } = require('@adiwajshing/baileys')

//Harga Build

let hospital = 5827

let fortress = 7373

let camptroops = 9278

let agriculture = 7288

let mining = 6278

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {

let type = (args[0] || '').toLowerCase()

let upgrade = (args[0] || '').toLowerCase()

let user = global.db.data.users[m.sender]

let caption = `*🚜 List Construction For kingdoms facility*

*List facility | 🛒Construction price*

🏥Hospital :    ${hospital}

🌾Pertanian:    ${agriculture}

🏕️camptroop:    ${camptroops}

⚒️Pertambangan: ${mining}

🏯Benteng: ${fortress}`

        try {

               if (/build|bangun/i.test(command)) {

               	const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)          switch (type) {

                	       case 'fortress': case 'fortress':

                if ( global.db.data.users[m.sender].batu > benteng * count ) {

                

               	global.db.data.users[m.sender].batu >= benteng * count

                	global.db.data.users[m.sender].fortress += count * 1

                    global.db.data.users[m.sender].kayu -= benteng * count

                    global.db.data.users[m.sender].batu -= benteng * count

                       m.reply(`berhasil membangun benteng`)

                       } else m.reply(`Your sda is not enough to build a fort worth ${benteng * count }Wood ${benteng * count}batu`)

                          break

                           case 'agriculture':

                           if ( user.batu > pertanian * count ) {

                	user.batu >= pertanian * count

                	user.pertanian += count * 1

                    user.kayu -= pertanian * count

                    user.batu -= pertanian * count

                       } else m.reply(`Your sda is not enough to build a fort worth ${benteng * count }Wood ${benteng * count}batu`)

                      break

                        case 'camptroops':

                        case 'camptroop':

                   if ( user.batu > camptroops * count ) {

                    user.batu >= camptroops * count

                    user.camptroops += count * 1

                    user.kayu -= camptroops * count

                    user.batu -= camptroops * count

                    } else m.reply(`Your sda is not enough to build a fort worth ${benteng * count }Wood ${benteng * count}batu`)

                      

                      break

                    case 'mining':

                    if ( user.tambang > pertambangan * count ) {

                   user.batu >= pertambangan * count

                    user.tambang += count * 1

                    user.kayu -= pertambangan * count

                    user.batu -= pertambangan * count 

                    } else m.reply(`Your sda is not enough to build a fort worth ${benteng * count }Wood ${benteng * count}batu`)

                      

                       break

                    case 'rumahsakit': 

                    case 'hospital':

                    if ( user.rumahsakit > rumahsakit * count ) {

                    user.rumahsakit += count * 1

                    user.kayu -= rumahsakit * count

                    user.batu -= rumahsakit * count

                    } else m.reply(`Your sda is not enough to build a fort worth ${benteng * count }Wood ${benteng * count}batu`)

                       break

                       default:

                        return conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/ba477e7f4401549578f7b.jpg', caption, `⌨️Typing to build

${usedPrefix}build <type>

⌨️Typing to upgrade:

${usedPrefix}upgrade <type> [ FEATURES NOT AVAILABLE ]

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)

                }

        }

    } catch (e) {

        conn.sendButtonLoc(m.chat, 'https://telegra.ph/file/ba477e7f4401549578f7b.jpg', caption, `⌨️Typing to build

${usedPrefix}build <type>

⌨️Typing to upgrade:

${usedPrefix}upgrade <type> [ FEATURES NOT AVAILABLE ]

Official By @${'0'.split('@')[0]}`, 'Rules', '.rules', m)

        console.log(e)

        if (DevMode) {

            for (let jid of global.owner.map + '@s.whatsapp.net'.filter(v => v != conn.user.jid)) {

                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)

            }

        }

    }

}

handler.help = ['build <args>', 'upgrade <sell|buy> <args>']

handler.tags = ['rpg']

handler.owner = false

handler.command = /^(build|bangun|upgrade|upgd)$/i

module.exports = handler
