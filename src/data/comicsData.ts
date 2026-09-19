export interface ComicEpisode {
  id: string;
  chapter: number;
  title: string;
  subtitle: string;
  date: string;
  coverImage: string;
  synopsis: string;
  panels: {
    panelNumber: number;
    caption: string;
    imageUrl: string;
  }[];
}

export const comicEpisodes: ComicEpisode[] = [
  {
    id: "chapter-1-the-awakening",
    chapter: 1,
    title: "The Awakening under Starlight",
    subtitle: "Episode I",
    date: "September 2026",
    coverImage: "/hero/lunar-desert-landscape.jpg",
    synopsis: "A wanderer stumbles across ancient ruins buried beneath the desert moon.",
    panels: [
      {
        panelNumber: 1,
        caption: "The dunes stretched endlessly into the cold midnight void...",
        imageUrl: "/hero/lunar-desert-landscape.jpg",
      },
      {
        panelNumber: 2,
        caption: "Beneath the sand, a faint golden keyhole reflected the starlight.",
        imageUrl: "/hero/lunar-desert-landscape.jpg",
      },
    ],
  },
];
