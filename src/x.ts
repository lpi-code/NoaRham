import { TwitterApi } from 'twitter-api-v2';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

// Vérifier que toutes les variables d'environnement nécessaires sont définies
const requiredEnvVars = ['API_KEY', 'API_SECRET_KEY', 'ACCESS_TOKEN', 'ACCESS_TOKEN_SECRET'];
requiredEnvVars.forEach(varName => {
  if (!process.env[varName]) {
    throw new Error(`La variable d'environnement ${varName} n'est pas définie.`);
  }
});

// Authentification
const client = new TwitterApi({
  appKey: process.env.API_KEY!,
  appSecret: process.env.API_SECRET_KEY!,
  accessToken: process.env.ACCESS_TOKEN!,
  accessSecret: process.env.ACCESS_TOKEN_SECRET!,
});

// Fonction pour po
const postTweet = async (text: string) => {
  try {
    const response = await client.v2.tweet(text);
    if (response.data) {
      console.log("Tweet posté avec succès!");
      console.log(`ID du tweet: ${response.data.id}`);
    } else {
      console.error("La réponse de l'API ne contient pas les données attendues.");
    }
  } catch (error) {
    console.error("Erreur lors du tweet:", error);
  }
};

postTweet("Plz don't report me, i need my A4 paper");