process.loadEnvFile()
import Discord, { Events } from "discord.js"
import config from './config.json' with { type: 'json' }

dotenv.config()

const client = new Discord.Client({ intents: ["Guilds", "GuildMessages"] })

client.once(Events.ClientReady, _ => {
	console.log('Client is ready...')

	const channels = config.channels

	const today = new Date
	const day = today.getDate()
	const month = today.getMonth()

	let isPlural = false
	const birthdays = getBirthdays(day, month + 1)
	const pre = prenotify(day)

	if (birthdays[0] === undefined) return
	if (birthdays[1] !== undefined) isPlural = true

	channels.forEach((chanName) => {
		const chan = client.channels.cache.get(chanName)

		chan.send(replaceVariables(birthdays, isPlural)).catch((e) => console.log(e))

		if (!pre) return
		pre.forEach((val) => {
			chan.send(pre).catch((e) => console.log(e))
		})
	})
})

const getBirthdays = (day, month) => {
	const people = config.birthdays

	return people.filter(person => person.month === month && person.day === day).map(person => {
		return person.name
	})
}

const prenotify = (day) => {
	let isPlural = true

	const prenotify = config.prenotify_days
	const dat = new Date() 
	const birthdays = []

	prenotify.forEach((val) => {
		dat.setDate(day + val)
		const people = getBirthdays(dat.getDate(), dat.getMonth() + 1)
		if (people[0] === undefined) return
		if (people[1] === undefined) isPlural = false

		birthdays.push(replacePrenotify(people, isPlural, val))
	})

	if (birthdays[0] === undefined) return false
	return birthdays
}

const replaceVariables = (names, isPlural) => {
	const replacements = {
		roles: rolesToString(config.roles),
		names: getOrderedNames(names)
	}

	if (isPlural) {
		return config.plural.replace(/%(\w+)%/g, (match, key) => replacements[key] || match)
	}

	return config.singular.replace(/%(\w+)%/g, (match, key) => replacements[key] || match)
}

const replacePrenotify = (names, isPlural, day) => {
	const replacements = {
		roles: rolesToString(config.roles),
		names: getOrderedNames(names),
		days: day
	}

	if (isPlural) {
		return config.prenotify_plural.replace(/%(\w+)%/g, (match, key) => replacements[key] || match)
	}

	return config.prenotify_singular.replace(/%(\w+)%/g, (match, key) => replacements[key] || match)
}

const rolesToString = (roles) => {
	let result = ''
	roles.forEach((role) => {
		result += `<@&${role}>`
	})

	return result
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
