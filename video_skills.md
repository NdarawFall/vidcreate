# 🧠 VidCreate - Compétences & Standards Vidéo

Ce fichier sert de base de connaissances pour Gemini CLI et Antigravity. Il définit nos standards de création, nos styles préférés et les techniques validées.

## 📁 Structure des Assets
- `assets/images/` : Photos, illustrations, logos.
- `assets/audio/` : Musique de fond, effets sonores (SFX), voix (VO).
- `assets/video/` : Clips de fond, overlays transparents.
- `assets/fonts/` : Fichiers .woff2 personnalisés.
- `assets/docs/` : Scripts, storyboards, recherches.

## 🎨 Identité Visuelle (Design System)
*À remplir au fur et à mesure*
- **Couleurs** : [Ex: #000000, #FFFFFF]
- **Typographies** : [Ex: Inter, Montserrat]
- **Style de mouvement** : [Ex: Minimaliste, Énergique]

## ⚡ Techniques & Effets Validés
*Liste des effets qui fonctionnent bien dans ce projet*
1. **Entrée Expo** : Utilisation de `ease: "expo.out"` pour les titres.
2. **Accent Lines** : Utilisation de lignes de soulignement animées en `scaleX`.

## 🛠️ Règles d'Or
1. Toujours enregistrer les timelines dans `window.__timelines`.
2. Utiliser la classe `.clip` pour les éléments timés.
3. Préférer les animations `gsap.from()` pour les entrées.
4. Pas de `Math.random()` pour rester déterministe.
5. **Gestion de Projets** : Ne jamais écraser `index.html` à la racine pour un nouveau projet. Créer un dossier spécifique dans `projects/` (ex: `projects/mon-nouveau-video/index.html`).
