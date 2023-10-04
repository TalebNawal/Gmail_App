# Gmail_App : Application à Microservices d'E-mailing

Ce projet consiste en la conception et la réalisation d'une application à microservices visant à moderniser et digitaliser les processus d'e-mailing au sein de l'entreprise. L'application utilise divers outils et technologies pour atteindre ses objectifs, notamment SpringBoot, Angular, Kafka et MongoDB.
<p>
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/3b334351-b4ff-4f73-a998-a02b9dd282e7">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/eb68cacc-26d4-448e-878c-b14898c74cbe">

<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/213e4305-4c6e-48e7-803e-9e038ef4e900">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/241d5859-13f2-4a7d-9eb5-a736adc8c1f1">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/11dce71b-245f-47ae-bbcb-61f8cd5f7136">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/2e04e46b-152a-4b7d-b1f6-a6babaf7ffc5">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/1abf839d-a869-42ba-9720-d856d0946d60">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/aafac9f1-2589-47e8-a3e5-e4ad8a655c17">
<img width="100" src="https://github.com/TalebNawal/Gmail_App/assets/101468806/2ea76169-3d4a-43ca-8ec3-3fe961dec6d0">
</p>



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

- **Clonage du Projet** : Clonez ce dépôt GitHub sur votre machine en utilisant la commande Git suivante :

```git clone https://github.com/votre-nom/utilisateur/application-microservices-emailing.git```

- **Configuration de l'Environnement** : Assurez-vous d'avoir les prérequis nécessaires (Java, Node.js, kafka, etc.) pour exécuter les composants de l'application.
- **Utilisation de Kafka** :

  - STEP 1: DOWNLOAD AND INSTALL KAFKA

```https://dlcdn.apache.org/kafka/3.2.0/kafka_2.13-3.2.0.tgz```
 
 Dans le dossier d'installation de Kafka lancer un terminal pour exécuter les commandes suivantes.

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

- **Exécuter les deux microservices ensemble, le frontEnd et MongoDb** :
  - **Le fontEnd** :
    
  ```ng serve```
  
  - **Le backEnd** : On démarre UserServiceApplication et EmailServiceApplication

  - **La base de données** : On lance mongoDb
  

 





