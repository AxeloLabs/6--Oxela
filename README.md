<div align="center">

README

🟥
🟧
🟩
⬛
⬜
🟫
🟨
🟪
🟦

# Oxela

DEMO (19 mai 2025):  
https://p6-oxela-firebase-webapp--p6--oxela--firebase-root.us-central1.hosted.app/en

CHAPTERS:  
1 - [Stack](#stack)  
2 - [Install](#install)  
3 - [Consoles](#consoles)  
4 - [Doc](#doc)  
5 - [Realeases doc](#realeases-doc)  
6 - [Blogs](#blogs)  
7 - [Pricing](#pricing)  
8 - [Bonnes pratiques](#bonnes-pratiques)

</div>

## 1 Stack

Project created on April 1st, 2025

SERVER-LESS

- [`firebase`](https://firebase.google.com/docs?hl=fr): Firebase v11  
  -- Firebase_App_Hosting  
  -- Firebase_Data Connect  
  -- Firebase Auth  
  -- Firebase Storage  
  -- Google Cloud Secrets

SERVER

- [`next`](https://nextjs.org/docs): Next v15 + Intl v4
- [`node`](https://nodejs.org/docs/latest/api/): v22

UI

- [`react`]() v19
- [`tailwind`]() v3
- [`zustand`]() v5

AI

- [`gemini`](): generative-ai : 0.21.0

PAYMENT

- [`stripe`]() v17

## 2 Install

```shell
- [`npm run dev`] run en dev mode
- [`npm run build`] build
```

## 3 Consoles

- [Budgets et alertes](https://console.cloud.google.com/billing/0114F9-3F8840-41992B/budgets?authuser=0&hl=fr&inv=1&invt=Abx2NA&organizationId=0&supportedpurview=project): Oxela

## 4 Doc

BACKEND

- https://firebase.google.com/docs/data-connect/configuration-reference?hl=fr
- [Firebase CLI](https://firebase.google.com/docs/cli?hl=fr): Firebase
- [Next + Firebase data connect](https://github.com/FirebaseExtended/firebase-framework-tools): Firebase extended
- <https://cloud.google.com/sdk/docs/cheatsheet?hl=fr>
- <https://cloud.google.com/sdk/gcloud/reference/services>
- <https://www.conventionalcommits.org/en/v1.0.0/>
- <https://firebase.google.com/docs/reference/data-connect>
- <https://graphql.org/learn/schema/>  
  IA
- https://ai.google.dev/gemini-api/docs/libraries?hl=fr

## 5 Realeases doc

To setup your release management process :

```shell
npm run changeset
npm run version-packages
```

Official releases:

- <https://firebase.google.com/support/releases>

## 6 Blogs

- <https://firebase.blog/>
- <https://cloud.google.com/blog/products/application-development?hl=en>
- <https://web.dev/?hl=fr>

## 7 Pricing

- <https://firebase.google.com/docs/app-hosting/costs?hl=fr>

## 8 Bonnes pratiques

1. Gere tes secrets avec google secret manager ici : <https://console.cloud.google.com/secret-manager/>

2. Tu veux un repo propre : pas de bump manuel, pas de tag manuel, pas de changelog manuel

```console
npx changeset
npm run version-packages
git tag
git push --tags
```

Explications :  
// 1 - configure le type de bump
npx changeset  
// 2 - ca a fait le bump (config precedement)
npm run version-packages

## END
