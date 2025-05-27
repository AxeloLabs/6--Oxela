<div align="center">

WEB AGENCY 2025 (v0.2.0)

🟥
🟧
🟩
⬛
⬜
🟫
🟨
🟪
🟦

# Readme

(19 mai 2025)

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

- [`node`](): v22
- [`next`](https://starship.rs/): Next v15 + Intl v4
- [`firebase`](https://github.com/BurntSushi/ripgrep): App Hosting + Firebase Data Connect (avril 2025)

## 2 Install

```shell
- [`npm run dev`](): run en dev mode
- [`npm run build`](): build
```

## 3 Consoles

- [Budgets et alertes](https://console.cloud.google.com/billing/0114F9-3F8840-41992B/budgets?authuser=0&hl=fr&inv=1&invt=Abx2NA&organizationId=0&supportedpurview=project): Oxela

## 4 Doc

- [Firebase CLI](https://firebase.google.com/docs/cli?hl=fr): Firebase
- [Next + Firebase data connect](https://github.com/FirebaseExtended/firebase-framework-tools): Firebase extended

<https://cloud.google.com/sdk/docs/cheatsheet?hl=fr>
<https://cloud.google.com/sdk/gcloud/reference/services>

<https://www.conventionalcommits.org/en/v1.0.0/>

<https://firebase.google.com/docs/reference/data-connect>

<https://graphql.org/learn/schema/>

## 5 Realeases doc

To setup your release management process :

```shell
npm run changeset
npm run version-packages
```

<https://firebase.google.com/support/releases>

## 6 Blogs

<https://firebase.blog/>

<https://cloud.google.com/blog/products/application-development?hl=en>

<https://web.dev/?hl=fr>

## 7 Pricing

<https://firebase.google.com/docs/app-hosting/costs?hl=fr>

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
