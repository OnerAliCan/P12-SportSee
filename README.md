# Démarrage du projet

Version testée de Node.js : v22.15.0

## Frontend

- Depuis la racine du projet, lancez les commandes suivantes :

```
npm install
npm run dev
```

## Backend

- Depuis le dossier /API, lancez les commandes suivantes :

```
yarn install
yarn dev
```

## Accéder à l'application

- Allez sur l'url depuis votre navigateur :

http://localhost:5173

## Sélection des utilisateurs

- Cliquez sur un utilisateur pour accéder à sa page profil :

> Utilisateurs de l'API : 12 et 18
>
> Utilisateurs mockés : 22 et 28
>
> Page d'erreur pour tester : 404

## Navigation

Pour revenir à la sélection des utilisateurs, cliquez sur le logo SportSee :

![](/src/assets/logo.svg 'This is a sample image.')

## Structure du projet

src/pages : Contient les pages Home, Profile et ErrorPage

src/components : Contient les composants UI réutilisables (Navbar, Dashboard, graphiques, etc.)

src/services : Contient DataContext et le service pour fetcher les données utilisateur

src/hooks : Contient les hooks personnalisés, comme useDataContext

## Données

Les utilisateurs 12 et 18 utilisent les données réelles via l'API NodeJS.

Les utilisateurs 22 et 28 utilisent des données mockées définies dans MockData.js.

La page 404 est disponible pour tester le comportement en cas d’utilisateur inexistant.
