const Discord = require('discord.js');
exports.run = async(client, msg, args, lang) => {
	if (!msg.channel.nsfw) return msg.channel.send(lang.pornsearch_nsfw);
	if (!args.slice().length === 0) return msg.channel.send(lang.pornsearch_type);
	if (args.slice() > 1) return msg.channel.send(lang.pornsearch_error);
	const Pornsearch = require('pornsearch').default;

	try {
		const Searcher = new Pornsearch(args.slice().join(" "), driver = 'sex');
		var gifs = await Searcher.gifs();

		var result = Math.floor(Math.random() * gifs.length);

		var url = gifs[result - 1].url;
	
		const embed = new Discord.RichEmbed()
			.setImage(url)
			.setColor('#ff0000')
			.setFooter(url)
			.setAuthor(msg.author.tag);
	
		msg.channel.send({
			embed
		});
	} catch (error) {
		return msg.reply(lang.pornhubgif_couldfindnothing);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	userpermissions: []
};
exports.help = {
	name: 'sexgif',
	description: 'Searches for Sex gifs',
	usage: 'sexgif {query}',
	example: ['sexgif ass', 'sexgif tits'],
	category: 'nsfw',
	botpermissions: ['SEND_MESSAGES']
};
