export type Product = {
  id: string;
  name: string;
  image: string;
  sizes: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "001",
    name: "Camiseta Bold Like the Ocean - Preta",
    image:
      "https://new.sizebay.com/cdn/shop/files/Gemini_Generated_Image_4b9l644b9l644b9l.png",
    sizes: ["M", "G", "GG"],
    description:
      "Uma camiseta preta estilosa e ousada como o oceano, perfeita para qualquer ocasião no VTEX Day 2026.",
  },
  {
    id: "002",
    name: "Camiseta Future Fashion Fun 2026 - Azul",
    image:
      "https://new.sizebay.com/cdn/shop/files/CamisetaAzul031-EstampaPreta_Previa.png",
    sizes: ["P", "M", "GG"],
    description:
      "O futuro da moda de forma divertida. Conforto e tecnologia no mesmo tecido.",
  },
  {
    id: "003",
    name: "Camiseta Future Fashion Fun 2026 - Preta",
    image:
      "https://new.sizebay.com/cdn/shop/files/CamisetaPretacor014-EstampaRoxa_968BB5eAzulCor_d2ecff.png",
    sizes: ["M", "GG"],
    description:
      "Versão preta da nossa coleção Future Fashion Fun. O básico que nunca sai de moda.",
  },
  {
    id: "004",
    name: "Camiseta Blooming the Future Of Fashion - Branca",
    image:
      "https://new.sizebay.com/cdn/shop/files/Camiseta_Bloomingthefutureoffashion_FrenteeVerso.png",
    sizes: ["P", "M"],
    description:
      "Floresça o futuro da moda com esta estampa exclusiva e tecido altamente respirável.",
  },
];
