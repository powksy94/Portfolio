export const projects = [
  {
    slug: "bot-discord",
    title: "Bot Discord",
    description: "Création d'un bot dédié à un serveur Discord",
    tech: "Node.js, JavaScript, Discord API",
    externalLink: "https://github.com/powksy94/bot_discord",
    languages: [{ name: "JavaScript", value: 100 }],
    content: [
      "Liaison entre le code et l'API Discord via Node.js",
      "Codé en JavaScript avec appel de fichiers au format JSON",
      "Ajout de fonctionnalités :",
      {
        type: "list",
        items: [
          "Import de citations avec fonction asynchrone",
          "Menu interactif avec EmbedBuilder",
          "Gestion d'une librairie locale de sons (.ogg) avec lecture via connexion en groupe vocal",
          "Commande personnalisée avec gestion de rôles",
        ],
      },
    ],
  },
  {
    slug: "alice-in-bordeland-games",
    title: "Jeu console - Alice in Bordeland",
    description: "Création d'un jeu basé sur un manga en console",
    tech: "C#, programmation orientée objet, algorithmes",
    externalLink: "https://github.com/powksy94/Alice_in_Bordeland_Games",
    languages: [{ name: "C#", value: 100 }],
    content: [
      "Structure de classes en C#",
      "Boucles (for, foreach, while) pour les tours et la continuité du jeu",
      "Génération aléatoire de nombres et comparaison selon un algorithme d'arrondi",
      "Ajout de conditions selon le nombre de joueurs",
    ],
  },
  {
    slug: "site-flask-analysis",
    title: "Site d'analyse de fichiers et URL",
    description: "Création d'un site web avec gestion de logs et API",
    tech: "HTML, CSS, JavaScript, Python, Flask",
    externalLink: "https://github.com/powksy94/site",
    languages: [
      { name: "HTML", value: 36.8 },
      { name: "Python", value: 36.5 },
      { name: "CSS", value: 19.6 },
      { name: "JavaScript", value: 6.4 },
      { name: "Internal package", value: 0.7 },
    ],
    content: [
      "Accès aux logs avec rôle admin sécurisé",
      "Gestion des routes liant les différentes pages du site",
      "Analyse de fichiers et URLs, affichage des fichiers exécutables sur toutes plateformes",
      "Analyse des logs pour les développeurs via API",
      "Inscription et connexion utilisateurs avec base de données SQLite",
    ],
  },
  {
    slug: "hash-compare",
    title: "Hash Compare",
    description: "Outil de comparaison et d’analyse de fichiers par hash",
    tech: "Python",
    externalLink: "https://github.com/powksy94/-hashcompare",
    languages: [
      { name: "Python", value: 99 },
      { name: "Internal package", value: 1 },
    ],
    content: [
      "Création d’un outil permettant de comparer des fichiers via leur empreinte hash",
      "Détection des différences entre fichiers à partir d’algorithmes de hachage",
      {
        type: "list",
        items: [
          "Calcul et comparaison de hash (intégrité des fichiers)",
          "Analyse de fichiers suspects",
          "Affichage clair des résultats de correspondance",
          "Approche orientée sécurité et fiabilité",
        ],
      },
    ],
  },
  {
    slug: "password-mobile-app",
    title: "Password Mobile App",
    description:
      "Application mobile pour la gestion sécurisée des mots de passe",
    tech: "Flutter, Kotlin, C++, Other languages",
    externalLink: "https://github.com/powksy94/PasswordMobileApp",
    languages: [
      { name: "Flutter", value: 63.2 },
      { name: "others languages", value: 22.7 },
      { name: "Internal package", value: 14.1 },

    ],

    content: [
      "Développement d'une application mobile multiplateforme avec React Native",
      "Stockage sécurisé des mots de passe avec Firebase Authentication et Firestore",
      "Ajout de fonctionnalités :",
      {
        type: "list",
        items: [
          "Création et gestion de comptes utilisateur avec chiffrement des données",
          "Générateur de mots de passe aléatoires avec critères personnalisables",
          "Interface utilisateur intuitive avec navigation entre les sections",
          "Synchronisation en temps réel entre appareils via Firebase",
        ],
      },
    ],
  },
  {
    slug: "aliceinborderland-train-game",
    title: "Jeu console - AliceinBorderland Train Game",
    description: "Jeu console inspiré de l’univers d’Alice in Borderland basé sur la gestion d’un train",
    tech: "C#, programmation orientée objet, algorithmes",
    externalLink: "https://github.com/powksy94/AliceinBorderlandTrainGame",
    languages: [{ name: "C#", value: 100 }],
    content: [
      "Conception d’un jeu console en C# focalisé sur la gestion et la survie dans un train",
      "Architecture de classes pour gérer les éléments du jeu (joueur, train, obstacles)",
      "Boucles principales pour le déroulement du jeu et interactions temps réel",
      "Implémentation d’événements aléatoires et conditions de victoire/défaite",
      "Optimisation de la logique de progression et des retours utilisateurs",
    ],
  },

  {
    slug: "passwordmobileapp-backend",
    title: "API Backend pour Password Mobile App",
    description: "Backend RESTful supportant l’application Password Mobile App",
    tech: "Node.js, Express, MongoDB, JavaScript",
    externalLink: "https://github.com/powksy94/passwordmobileapp_backend",
    languages: [
      { name: "JavaScript", value: 85 },
      { name: "HTML", value: 5 },
      { name: "CSS", value: 5 },
      { name: "Internal package", value: 5 },
    ],
    content: [
      "Création d’un backend Express.js pour gérer les utilisateurs et les mots de passe",
      "Connexion à une base de données MongoDB pour stockage persistant",
      "Routes sécurisées avec authentification et validation des requêtes",
      "CRUD complet pour les mots de passe avec chiffrement et bonnes pratiques de sécurité",
      "Gestion des erreurs et réponses API claires pour intégration front-end",
    ],
  },

  {
    slug: "anecdote-app",
    title: "Anecdote App",
    description: "Application web pour soumettre, lire et voter des anecdotes",
    tech: "React, JavaScript, CSS",
    externalLink: "https://github.com/powksy94/anecdote_app",
    languages: [
      { name: "JavaScript", value: 70 },
      { name: "CSS", value: 20 },
      { name: "HTML", value: 10 },
    ],
    content: [
      "Développement d’une application React pour afficher des anecdotes",
      "Intégration de fonctionnalités pour ajouter, filtrer et voter des anecdotes",
      "Gestion de l’état avec hooks React (useState, useEffect)",
      "Interface utilisateur réactive et intuitive",
      "Animations simples pour l’amélioration de l’expérience utilisateur",
    ],
  },
];
