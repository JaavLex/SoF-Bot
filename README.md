# Swiss Transport Bot

This is my very first discord bot! It gives you all the necessary informations about Swiss Transports! You have access to all the code, but please don't use it without giving me some credit ;).

Talking about that, I must thank this youtube channel for helping me in my first steps in discord.js : [https://www.youtube.com/channel/UCNXt2MrZaqfIBknamqwzeXA](https://www.youtube.com/channel/UCNXt2MrZaqfIBknamqwzeXA)

## How to use the code ?

First create a **bot token** : [https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/](https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/) and invite him into your server.

Follow this very simple tutorial in order to do that... Once you're done just copy your token and replace the YOURBOTTOKEN in the `.env_template` file, and remove the "template"!

(Important thing : You must have installed node.js in order for the bot to work)

After that open shell windows and type `node index.js`.

*That's it! The bot is online and working!*

## Commands

Here's the list of the commands the bot can execute :

*Syntax : <> = required ; [] optionnal*

| Commands              | Arguments                     | Result		|		
|-----------------------|-------------------------------|---------------|
|`++help ` 				| `[commandname]`          		|Gives you a list of the bot commands, and gives info about specific commands.			|
|`++bot-stats`          |            					|Gives you some stats about the bot.				|
|`++ping`          		|								|Gives you the latency of the bot and of the client.				|
|`++itinerary`			| `<from> <to>`					|Gives you the itinerary detail about your destination.				|
|`++next-transport`		| `<from> <to> [departurenumber]`|Shows you a list of the next departure to your next destination and gives you more info if you specify one of these departures.				|

## Recent Update

### Update 1.1.3

1. `[FIX]`      Fixed error messages (*Weren't working on some occasions*)
1. `[FIX]`      Changed a lot on how the code is written, leads to less bug possibilities
1. `[CHANGE]`   Change the format of the `++next-transport` command. A lot more clean!
1. `[ADD]`      Added departure numbers after departure times on `++next-transport`
1. `[REMOVED]`  Removed time of departure on `++next-transport` **departure info** embed.
