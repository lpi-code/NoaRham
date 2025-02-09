import discord
from discord.ext import commands

# Remplace 'TON_TOKEN' par le token de ton bot
TOKEN = 'MTMzODEzNDI1Nzg5MzExMzkyMA.GypeyX.v_5IYJKmkf0SWtjjKorYittUXA_bBEKeVONGt4'

# Créer un objet intents pour pouvoir utiliser certaines fonctionnalités, comme les membres
intents = discord.Intents.default()

# Créer une instance de bot
bot = commands.Bot(command_prefix="!", intents=intents)

# Fonction qui sera exécutée lorsque le bot se connecte
@bot.event
async def on_ready():
    print(f'Bot connecté en tant que {bot.user}')

    # Parcours tous les serveurs où le bot est présent
    for guild in bot.guilds:
        print(f'Connecté au serveur: {guild.name} (ID: {guild.id})')
        
        # Recherche du premier canal texte dans le serveur
        channel = None
        for c in guild.text_channels:
            channel = c
            break  # S'arrêter au premier canal texte trouvé
        
        if channel:
            # Envoie un message dans le premier canal texte trouvé
            await channel.send("Hello, je suis un bot et je parle dans le premier canal texte que j'ai trouvé !")
            print(f'Message envoyé dans le canal {channel.name} du serveur {guild.name}')
        else:
            print(f'Le serveur {guild.name} n\'a pas de canal texte.')

# Lancer le bot avec le token
bot.run(TOKEN)