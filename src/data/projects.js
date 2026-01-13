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
];
