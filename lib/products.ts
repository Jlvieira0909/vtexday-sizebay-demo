export type Product = {
  id: string;
  name: string;
  images: string[];
  sizes: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "001",
    name: "Camiseta Bold Like the Ocean - Preta",
    images: [
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/001-frente.jpg",
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/001-costas.jpg",
    ],
    sizes: ["M", "G", "GG"],
    description:
      "Uma camiseta preta estilosa e ousada como o oceano, perfeita para qualquer ocasião no VTEX Day 2026.",
  },
  {
    id: "002",
    name: "Camiseta Future Fashion Fun 2026 - Azul",
    images: [
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/002-frente.jpg",
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/002-costas.jpg",
    ],
    sizes: ["P", "M", "GG"],
    description:
      "O futuro da moda de forma divertida. Conforto e tecnologia no mesmo tecido.",
  },
  {
    id: "003",
    name: "Camiseta Future Fashion Fun 2026 - Preta",
    images: [
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/003-frente.jpg",
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/003-costas.jpg",
    ],
    sizes: ["M", "GG"],
    description:
      "Versão preta da nossa coleção Future Fashion Fun. O básico que nunca sai de moda.",
  },
  {
    id: "004",
    name: "Camiseta Blooming the Future Of Fashion - Branca",
    images: [
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/004-frente.jpg",
      "https://szb-tenants-production.s3.us-east-1.amazonaws.com/7707/assets/004-costas.jpg",
    ],
    sizes: ["P", "M"],
    description:
      "Floresça o futuro da moda com esta estampa exclusiva e tecido altamente respirável.",
  },
];
