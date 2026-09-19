export interface Artwork {
  id: string;
  title: string;
  category: "Digital Canvas" | "Sacred Symbolism" | "Cosmic Landscape" | string;
  year: string;
  medium: string;
  description: string;
  imageUrl: string;
}

export const artworkList: Artwork[] = [
  {
    id: "flower-of-life-cosmos",
    title: "Sacred Flower over the Milky Way",
    category: "Sacred Symbolism",
    year: "2026",
    medium: "Digital Canvas & Procedural Shader",
    description: "An exploration of ancient geometry hovering over starlit desert dunes.",
    imageUrl: "/hero/lunar-desert-landscape.jpg",
  },
  {
    id: "buried-time",
    title: "Buried Time and the Golden Lock",
    category: "Cosmic Landscape",
    year: "2026",
    medium: "Digital Landscape",
    description: "An ancient closed chest submerged in dune sand beneath the starlight.",
    imageUrl: "/hero/lunar-desert-landscape.jpg",
  },
];
