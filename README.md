Español: [README_es.md](https://github.com/GomezMig03/natalis-bot/blob/main/README_es.md)

# Natalis Bot

Natalis Bot is a Discord bot designed to send birthday notifications for members of your server. It’s optimized for deployment via GitHub Actions but can also be hosted elsewhere.


## Features

- Detects and posts birthday notifications on your server.
- Configurable channels and roles for birthday announcements.
- Customizable notification timing through GitHub Actions.

## Deploying the bot

### Prerequisites

1. **Create the Discord Bot:** Head over to the [Discord Developer Portal](https://discord.com/developers) to create your bot, then invite it to your Discord server. Ensure the bot has permissions to:
    - Send messages in the desired channel.
    - Mention the roles for birthday notifications.

2. **Fork the Repository:**
    - Click the "Fork" button on the top-right corner of this repository to get your copy
    - If you want the fork to be private, you'll have to download the repo clicking on code then Download zip or using git and pasting the following in your terminal while being on the desired directory
      ```
      git clone https://github.com/GomezMig03/natalis-bot.git
      ```

3. **Set Up GitHub Actions:**
    - Activate GitHub Actions on your fork.
    - Add your bot token as a GitHub Secret, the name must be DISCORD_TOKEN.
    - (Optional) Adjust the action schedule in the workflow file if you want to customize the time for birthday checks.

### Configuration

1. **Edit config.json:** Customize the bot settings according to your server’s needs.
    - Channels: Add the ID(s) of the channel(s) where you want birthday messages to appear.
    - Roles: Specify the ID(s) of the role(s) to be mentioned in the birthday notifications.
    - Birthdays: List member names and birthdays following the provided format to ensure accurate notifications.

#### Example of a config.json
```
{
  "channels": ["676404642664428570", "5054535634091872758"],
  "roles": ["1054891617226572869", "1317612856744531210"],
  "birthdays": [
    {"name": "Miguel", "month": 7, "day": 12},
    {"name": "Linus", "month": 12, "day": 28},
    {"name": "Richard", "month": 3, "day": 16}
  ],
  "lastSeparator": "and",
  "singular": "%roles% It's %names%'s birtday today! Give them some love!",
  "plural": "%roles% Today is a great day for %names%. It's their birthday! Go and show them some love!"
}
```

2. **Deploy the Bot:** With GitHub Actions active, the bot will automatically run as per the schedule set in the workflow. If hosting elsewhere, simply deploy according to the platform's guidelines.

## Notes

- For troubleshooting, consult the GitHub Actions logs and ensure all permissions are correctly set in Discord.
- If you find a bug, please post an issue in this repo.
- Note that at least Node.js 18.20 is required, by default the github action use Node.js 20.
- Remember that any changes to the code must be distributed under the MPL 2.0 license. For more details, refer to the [MPL 2.0 license section](https://github.com/GomezMig03/natalis-bot?tab=MPL-2.0-1-ov-file) or [LICENSE file](https://github.com/GomezMig03/natalis-bot/blob/main/LICENSE) in this repository.
- Changing only config.json and not index.mjs or other source files does not require you to redistribute your modifications under the MPL 2.0 license.
