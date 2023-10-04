# Gmail_App : Application à Microservices pour la Digitalisation des Processus d'E-mailing

Ce projet consiste en la conception et la réalisation d'une application à microservices visant à moderniser et digitaliser les processus d'e-mailing au sein de l'entreprise. L'application utilise divers outils et technologies pour atteindre ses objectifs, notamment SpringBoot, Angular, Kafka et MongoDB.

## Objectifs du Projet

L'objectif principal de ce projet était de repenser et de simplifier la gestion des e-mails au sein de l'entreprise en utilisant une architecture à microservices. Voici un aperçu des objectifs et des réalisations clés :

- **Conception des Microservices** : L'application est basée sur une architecture à microservices, ce qui permet une plus grande flexibilité et une meilleure évolutivité.

- **Développement Front-End** : La partie front-end de l'application a été développée en utilisant Angular, offrant ainsi une interface utilisateur moderne et interactive pour les utilisateurs finaux.

- **Développement Back-End** : Les microservices du back-end ont été construits avec SpringBoot, facilitant la gestion de la logique métier et de la communication entre les composants.

- **Gestion des Messages** : Kafka a été utilisé pour gérer efficacement les messages d'e-mails au sein de l'entreprise, permettant ainsi une communication en temps réel.

- **Stockage des Données** : MongoDB a été choisi comme base de données pour stocker et gérer les données liées aux e-mails de manière efficace.

## Outils Utilisés

- **SpringBoot** : Framework Java pour la création de microservices robustes et évolutifs.
- **Angular** : Framework JavaScript pour la création d'interfaces utilisateur modernes et interactives.
- **Kafka** : Plateforme de streaming de données pour la gestion des messages en temps réel.
- **MongoDB** : Base de données NoSQL utilisée pour le stockage des données relatives aux e-mails.
  
## Comment Utiliser ce Projet


Pour explorer et utiliser ce projet :

- Clonage du Projet : Clonez ce dépôt GitHub sur votre machine en utilisant la commande Git suivante :

```git clone https://github.com/votre-nom/utilisateur/application-microservices-emailing.git```

- Configuration de l'Environnement : Assurez-vous d'avoir les prérequis nécessaires (Java, Node.js, kafka, etc.) pour exécuter les composants de l'application.
- Utilisation de Kafka :

  - STEP 1: DOWNLOAD AND INSTALL KAFKA
```https://dlcdn.apache.org/kafka/3.2.0/kafka_2.13-3.2.0.tgz```
 
  - STEP 2: START THE KAFKA ENVIRONMENT

    - Start the Zookeeper service
```.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties```
 
    - Start the Kafka broker service
```.\bin\windows\kafka-server-start.bat .\config\server.properties```

 
  - STEP 3: CREATE A TOPIC TO STORE EVENTS

```.\bin\windows\kafka-topics.bat --create --topic topic-example --bootstrap-server localhost:9092```

  - STEP 4: WRITE SOME EVENTS INTO THE TOPIC

```.\bin\windows\kafka-console-producer.bat --topic topic-example --bootstrap-server localhost:9092```
```>hello world```
```>hi```

  - STEP 5: READ THE EVENTS

```.\bin\windows\kafka-console-consumer.bat --topic topic-example --bootstrap-server localhost:9092```

```.\bin\windows\kafka-console-consumer.bat --topic topic-example --from-beginning --bootstrap-server localhost:9092```


 





