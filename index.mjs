import dotenv from 'dotenv'
import Discord, { Events } from "discord.js"
import config from './config.json'

dotenv.config()

const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] })

client.once(Events.ClientReady, _ => {
	console.log('Client is ready...')

	const channels = config.channels
	const roles = config.roles

	const today = new Date
	const day = today.getDay()
	const month = today.getMonth()

	const birthdays = getBirthdays(day, month)

	channels.forEach((chan) => {

	})
})


const getBirthdays = (day, month) => {
	const people = config.birthdays
	return people.filter(person => person.month === month && person.day === day).map(person => {
		return person.name
	})
}

const replaceVariables = (names, isPlural) => {
	const replacements = {
		roles: rolesToString(config.roles),
		names: getOrderedNames(names)
	}

	if (isPlural) {
		return config.plural.replace(/%(\w+)%/g, (match, key) => replacements[key] || match)
	}
}

const rolesToString = (roles) => {
	let result = ''
	roles.forEach((role) => {
		result += `${role}`
	})
}

const getOrderedNames = (names) => {
	switch (names.length) {
		case 1:
			return names[0]
		case 2:
			return `${names[0]} ${config.lastSeparator} ${names[1]}`
		case 3:
			let result = ''
			names.forEach((val) => {
				switch (val) {
					case names[names.length - 1]:
						result += ` ${config.lastSeparator} ${val}`
						break;
					case names[0]:
						result += `${val}`
						break;
					default:
						result += `, ${val}`
						break;
				}
			})
			return result
	}
}

// You'll need to provide your own discord bot token
client.login(process.env.DISCORD_TOKEN)
