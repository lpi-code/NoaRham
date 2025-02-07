import os
from dotenv import load_dotenv
import tweepy

# Charger les variables d'environnement depuis le fichier .env
load_dotenv()

# Authentification en utilisant les variables d'environnement
client = tweepy.Client(
    consumer_key=os.getenv("API_KEY"),
    consumer_secret=os.getenv("API_SECRET_KEY"),
    access_token=os.getenv("ACCESS_TOKEN"),
    access_token_secret=os.getenv("ACCESS_TOKEN_SECRET")
)

# Contenu du tweet
tweet_text = "Don't report me plz"

try:
    # Création du tweet
    response = client.create_tweet(text=tweet_text)
    print("Don't report me plz")
    print(f"ID du tweet: {response.data['id']}")

except tweepy.TweepyException as e:
    print(f"Erreur lors du tweet: {e}")
