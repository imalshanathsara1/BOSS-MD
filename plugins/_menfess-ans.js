const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'REPLY MESSAGE' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Hey Lol Please send your reply message.\nType a message something then send, then the message will automatically go to the target reply message.");
	else {
		let imgr = flaaa.getRandom()
		let txt = `Hai kak @${mf.dari.split('@')[0]}, kamu menerima balasan nih.\n\nPesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
		await this.sendButton(mf.dari, bottime, txt, `${imgr + 'Menfess'}`, [['REPLY MESSAGE', '.balasmenfess']], null).then(() => {
			m.reply('Successfully Sending Reply.')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}