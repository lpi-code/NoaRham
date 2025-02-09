import { Client, GatewayIntentBits, TextChannel, ChannelType } from 'discord.js';
import * as dotenv from 'dotenv';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Récupérer le token depuis la variable d'environnement
const TOKEN = process.env.DISCORD_TOKEN;

if (!TOKEN) {
  throw new Error('Le token Discord n\'est pas défini dans le fichier .env');
}

// Créer une instance de bot avec les intents nécessaires
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

// Fonction qui sera exécutée lorsque le bot se connecte
client.once('ready', async () => {
  console.log(`Bot connecté en tant que ${client.user?.tag}`);

  // Parcours tous les serveurs où le bot est présent
  client.guilds.cache.forEach(async (guild) => {
    console.log(`Connecté au serveur: ${guild.name} (ID: ${guild.id})`);

    // Recherche du premier canal texte dans le serveur
    const channel = guild.channels.cache.find(
      (c) => c.type === ChannelType.GuildText
    ) as TextChannel | undefined;

    if (channel) {
      // Envoie un message dans le premier canal texte trouvé
      await channel.send(
        'Hello, je suis un bot et je parle dans le premier canal texte que j\'ai trouvé !'
      );
      console.log(`Message envoyé dans le canal ${channel.name} du serveur ${guild.name}`);
    } else {
      console.log(`Le serveur ${guild.name} n'a pas de canal texte.`);
    }
  });
});

// Lancer le bot avec le token
client.login(TOKEN);
