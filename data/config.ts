export const CONFIG = {
  barbierName: "Brider Barber",
  instagram: "briderbarber",
  instagramUrl: "https://www.instagram.com/briderbarber",
  instagramEmbedUrl: "https://www.instagram.com/briderbarber/embed",
  calendlyUrl: "https://calendly.com/TON_USERNAME", // ← à remplacer
  address: "8 Rue de Bordeaux, 31200 Toulouse",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=8+Rue+de+Bordeaux+31200+Toulouse&output=embed",
  services: [
    {
      name: "Coupe",
      price: 15,
      description: "Coupe classique ou moderne, adaptée à ta morphologie",
      icon: "cut" as const,
    },
    {
      name: "Barbe",
      price: 20,
      description: "Taille, contour et soin de barbe",
      icon: "razor" as const,
    },
    {
      name: "Transfo",
      price: 20,
      description: "Changement de look complet",
      icon: "star" as const,
      popular: true,
    },
  ],
} as const;

export type Service = (typeof CONFIG.services)[number];
