# SoF-Bot

**S**pecial **o**perations **F**orces-Bot is a bot for modern military themed RolePlay on discord. It has various commands for weapon management, shooting mechanics, rolls (rolling dice), health system, etc...

The point of this bot is to have a bot that not only rolls dices, but has a very complete system for military themed roleplay ! It can enhance a lot the way you can RolePlay on discord!

## How to use the code ?

Create a file called `.env`, and write inside of it : `TOKEN=YOURDISCORDTOKENHERE`. In order to get you discord token you need to create a bot on the [developer portal](https://discordapp.com/developers/applications/ "Discord developer portal"). You can then get your token on the "Bot" tab and "Generate Token".

To get your bot running go into your terminal and type `npm i`, It will install all the necessary modules to get your bot running.

And finally to get your bot on you need to type into the console : `node index.js`

There you go! You're finished!

Misc : The bot needs to be online to create a blank field in the .JSON for a new player.

## Commands

Here's the list of the commands the bot can execute :

*Syntax : <> = required ; [] optionnal*

| Commands              | Arguments                     | 																	Result																    |		
|-----------------------|-------------------------------|-----------------------------------------------------------------------------|
|`~help ` 				      | `[commandname]`          		  |Gives you a list of the bot commands, and gives info about specific commands.|
|`~bot-stats`           |            					          |Gives you some stats about the bot.				                                  |
|`~ping`          		  |								                |Gives you the latency of the bot and of the client.				                  |
|`~dropw`          		  |								                |Gives you the satus unarmed (You will drop your weapon)			                |
|`~inspectw`          	|								                |Let's you inspect the kind of weapon you have        			                  |
|`~pickw`          		  |	`<weaponname>`							  |Pick up a weapon, or kevlar/helmet				                                                      |  
|`~roll`          		  |	`[endurance/force/charisme/perception]`							    |Let's you roll a dice about your stats                                       |
|`~checkmag`          	|								                |Gives you the latency of the bot and of the client.				                  |
|`~cleanw`          		|								                |Your weapon gets dirtier the more you shot and you can jam, do this command to prevent that from happening by cleaning your weapon		  |
|`~reload`          		|								                |Your weapon does not have infinite bullet! Reload with this command				          |
|`~shoot`          		  |	`<"ennemy"/playername>`				  |Shoot on an ennemy (fake ennemy) / a player		                              |
|`~unjam`          		  |								                |Sometimes your weapon can jam, type this to unjam it				                  |
|`~weaplist`          		  |								                | Shows a list of available weapons			                  |
|`~switchw`          		  |	`[holster]`								                | Switch from your primary firearm to your secondary, or holster them				                  |
|`~rmkev`          		  |	`<helm/kev>`								                | Remove kevlar or helmet				                  |
|`~fireselect`          		  |								                | Switch from semi-auto to full-auto (If possible)			                  |
|`~srps`          		  |	`<valuetochange> <arg (if not necessary write anything)> <targetplayer>` 								                | ADMIN COMMAND : Sets values in the player roleplay sheet, and changes other useful values				                  |		                  |
|`~srpsinf`          		  |							                | ADMIN COMMAND : shows a list of all the values you can change with the `~srps` command 		                  |

## Recent Update

### ---
