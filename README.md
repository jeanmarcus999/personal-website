# jean-site

Site personnel statique construit avec [Astro](https://astro.build), Tailwind CSS et MDX.
Deploye sur GitHub Pages via GitHub Actions.

## Installation

```bash
npm install
npm run dev      # serveur local sur http://localhost:4321
npm run build    # produit dist/
npm run preview  # previsualise le build
```

## Deploiement sur GitHub Pages

### 1. Configurer `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://VOTRE_USERNAME.github.io',
  // Si le repo ne s'appelle pas USERNAME.github.io, ajoutez :
  // base: '/NOM_DU_REPO',
});
```

### 2. Activer GitHub Pages dans le repo

Settings > Pages > Source : **GitHub Actions**

Le workflow `.github/workflows/deploy.yml` se declenche a chaque push sur `main`
et deploie automatiquement le dossier `dist/`.

## Ajouter un billet de blog

1. Creer un fichier dans `src/content/posts/mon-titre.md`
2. Renseigner le frontmatter :

```yaml
---
title: "Titre du billet"
description: "Une ou deux phrases d'accroche."
pubDate: 2025-09-01
draft: false
---
```

3. Ecrire le contenu en Markdown sous le frontmatter.
4. Le billet apparait automatiquement dans `/ecrits` et dans le flux RSS.

## Structure des dossiers

```
src/
  components/     Header, Footer, PostCard
  content/posts/  Billets de blog en Markdown
  layouts/        BaseLayout (toutes pages) et PostLayout (billets)
  pages/          Routes : index, parcours, ecrits/, contact, rss.xml
  styles/         global.css (fonts + Tailwind)
public/
  cv.pdf          A remplacer par le vrai CV
  favicon.svg
.github/workflows/
  deploy.yml      Pipeline GitHub Pages
```
