# Brider Barber

Site vitrine pour **Brider Barber**, barbier indépendant à Toulouse.

## Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4**
- **Framer Motion** — animations et transitions
- **react-calendly** — widget de réservation en ligne

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Configuration

1. Copier `.env.example` en `.env.local`
2. Ouvrir `data/config.ts` et remplacer `TON_USERNAME` par votre identifiant Calendly

## Déploiement (Vercel)

```bash
# Connecter le dépôt GitHub
git remote add origin https://github.com/USERNAME/brider-barber.git
git push -u origin main
```

1. Importer le projet sur [vercel.com](https://vercel.com)
2. Le déploiement est automatique à chaque push sur `main`

## Structure

```
app/
  layout.tsx        — Layout global, polices, SEO
  page.tsx          — Assemblage des sections
  globals.css       — Variables CSS, animations, scrollbar
components/
  Navbar.tsx        — Navigation sticky + drawer mobile
  Hero.tsx          — Hero 100vh + canvas particules
  Services.tsx      — Grille prestations + compteurs animés
  InstagramSection.tsx — Feed Instagram embed (lazy loaded)
  Booking.tsx       — Widget Calendly intégré
  Map.tsx           — Google Maps iframe
  Footer.tsx        — Footer avec liens
  ScrollReveal.tsx  — Wrapper Framer Motion réutilisable
  NeonButton.tsx    — Bouton néon orange / violet
  CursorGlow.tsx    — Curseur custom néon
data/
  config.ts         — Configuration centralisée
```

## Licence

Privé — Tous droits réservés.
