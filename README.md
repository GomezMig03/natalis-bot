# Natalis Bot

Natalis Bot is a Discord bot designed to send birthday notifications for members of your server. It’s optimized for deployment via GitHub Actions but can also be hosted elsewhere.
## Features

    Detects and posts birthday notifications on your server.
    Configurable channels and roles for birthday announcements.
    Customizable notification timing through GitHub Actions.

## Getting Started
### Prerequisites

    Create the Discord Bot: Head over to the Discord Developer Portal to create your bot, then invite it to your Discord server. Ensure the bot has permissions to:
        Send messages in the desired channel.
        Mention the roles for birthday notifications.

    Fork the Repository: Click the "Fork" button on the top-right corner of this repository to get your copy.

    Set Up GitHub Actions:
        Activate GitHub Actions on your fork.
        Add your bot token as a GitHub Secret, the name must be DISCORD_TOKEN.
        (Optional) Adjust the action schedule in the workflow file if you want to customize the time for birthday checks.

### Configuration

    Edit config.json: Customize the bot settings according to your server’s needs.
        Channels: Add the ID(s) of the channel(s) where you want birthday messages to appear.
        Roles: Specify the ID(s) of the role(s) to be mentioned in the birthday notifications.
        Birthdays: List member names and birthdays following the provided format to ensure accurate notifications.

    Deploy the Bot: With GitHub Actions active, the bot will automatically run as per the schedule set in the workflow. If hosting elsewhere, simply deploy according to the platform's guidelines.

### Notes

    For additional customization or troubleshooting, consult the GitHub Actions logs and ensure all permissions are correctly set in Discord.
    If you find a bug, please post an issue in this repo.
