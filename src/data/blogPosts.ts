export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string[];
}

export class BlogPostData {
  // Array of all blog posts
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-life-and-times",
    title: "THE LIFE AND TIMES",
    subtitle: "by ELM GWandaru",
    author: "ELM GWandaru",
    date: "September 2026",
    category: "Reflections",
    readTime: "3 min read",
    excerpt:
      "A small sanctuary for those of us who sometimes wonder what the hell we are doing here. Life can feel strangely engineered—hours divided, days scheduled, minds occupied... and yet, beneath all that machinery, there is still something wild about being alive.",
    content: [
      "Welcome to **The Life and Times**.",
      "A small sanctuary for those of us who sometimes wonder what the hell we are doing here.",
      "Life can feel strangely engineered—hours divided, days scheduled, minds occupied, everyone moving along invisible lines. And yet, beneath all that machinery, there is still something wild about being alive.",
      "We are here, on this extraordinary little planet, spinning through an ocean of darkness, surrounded by seas we have barely explored and skies we still cannot fully understand.",
      "So this is a place to step outside the noise.",
      "We might talk about going to Mass on a Sunday morning. Or standing beside the ocean and remembering how small we are. We might wander through cities, books, art, faith, strange thoughts, beautiful places, human absurdity, and the quiet mysteries that make existence worth examining.",
      "Not everything here will be cheerful.\nNot everything will have a lesson.\nAnd certainly not everything needs to become *“a positive mindset.”*",
      "Sometimes life is beautiful. Sometimes it is brutal. Often, it is both before breakfast.",
      "**The Life and Times** is simply an invitation to notice it.",
      "To look closer.\nTo wonder more.\nTo travel when you can.\nTo pray when you feel like praying.\nTo question what you've been told.\nTo eat good food, see strange places, swim in unfamiliar oceans, sit in old churches, laugh with people you love—and occasionally stare at the ceiling wondering whether any of this is real.",
      "Maybe the world is a simulation.\nMaybe it isn't.",
      "Either way, we're here.",
      "**Might as well have a look around.**",
    ],
  },
  {
    slug: "colonization-and-the-inherited-standards",
    title: "Colonization & the Inherited \u2018Standards\u2019",
    subtitle: "On borrowed accents, mental colonization, and the structures that stayed",
    author: "ELM GWandaru",
    date: "September 2026",
    category: "Essays",
    readTime: "7 min read",
    excerpt:
      "When Kenyans go to Britain or America, they sometimes come back speaking with a white-man twang. Yet nobody goes to live among Kalenjins for thirty years and comes back speaking like one. I\u2019ve been sitting with that question for a while now.",
    content: [
      "For me, this is just something that I\u2019ve seen happening around me.",
      "When Kenyans, or even some Africans, go to places like Britain or America, they sometimes come back speaking with this white-man twang\u2014I don\u2019t even know what to call it. Yet locally, we have our own dialects. Take Kalenjins, for example. Kalenjins have a particular way of speaking, and you only need to be Kenyan to understand the joke in it.",
      "But because we don\u2019t consider the Kalenjin dialect, or the way they speak, to be \u201cgood\u201d or prestigious, nobody will go and live among Kalenjins for thirty years and come back speaking like a Kalenjin. No. Go to the Coast and spend years around people there, and you might even find yourself changing your Swahili twang because you have absorbed the way they speak. Why don\u2019t you go and live among Kikuyus and come back spelling your Rs and Ls, intertwining them? Why is that not something we see?",
      "**The problem with a country like Kenya is that we were not only colonized physically; we were also colonized mentally.**",
      "The mental aspect of colonization is that we began to see the white man\u2019s standards as our standards.",
      "Sometimes I think about colonization and ask myself: how bad was it? How badly were the structures we originally had disrupted that, once the white man left, we could not even return to some of our own institutions? We had to demolish or abandon many of our original institutions and follow the institutions that had been imposed on us.",
      "And I understand why, because when you think about it, by the time the colonizers were leaving a country like Kenya, they had already done a lot of damage. They had found a way to centralize power.",
      "**Oh shit.**",
      "Maybe even colonization itself was a way of centralizing power.",
      "Because when you really think about it, that may have been the point all along: to take systems that were decentralized, take communities that had their own institutions and ways of organizing themselves, and bring them under one structure that could be controlled from the centre.",
      "**And maybe that is the part of colonization we still haven\u2019t fully escaped.**",
      "The white man left, but the structure remained. The institutions remained. And, in some ways, so did the standards.",
      "Maybe colonization was never just about controlling land. Maybe it was about controlling how people organized themselves, how they saw themselves, and eventually, what they came to believe was worth aspiring to.",
      "**Fuck.**",
      "I\u2019ve never thought of it like that.",
      "Maybe the most enduring part of colonization wasn\u2019t that the white man took control.",
      "It was that, long after he left, we were still using his standards to decide what was worth having.",
    ],
  },
  {
    slug: "the-night-sky-as-sacred-text",
    title: "The Night Sky as Sacred Text",
    author: "ELM GWandaru",
    date: "August 2026",
    category: "Astronomy",
    readTime: "7 min read",
    excerpt:
      "For the ancient Egyptians, the heavens were not merely a backdrop to earthly life but a living scripture — constellations encoded wisdom, and the Milky Way was the river that carried souls to the Field of Reeds. To observe the sky is to read a language older than any civilization.",
    content: [
      "For the ancient Egyptians, the heavens were not merely a backdrop to earthly life but a living scripture — constellations encoded wisdom, and the Milky Way was the river that carried souls to the Field of Reeds. To observe the sky is to read a language older than any civilization.",
      "When we look up at the night sky from the quiet corners of the desert, the stars do not appear as distant nuclear furnaces; they feel like ancient eyes watching over the timeline of humanity.",
      "Every myth we have told, every cathedral we have erected, every poem we have carved into stone is an attempt to translate the silence of the sky into something we can hold.",
    ],
  },
  {
    slug: "sacred-geometry-and-consciousness",
    title: "Sacred Geometry & the Architecture of Consciousness",
    author: "ELM GWandaru",
    date: "July 2026",
    category: "Philosophy",
    readTime: "9 min read",
    excerpt:
      "The Flower of Life does not merely describe nature's patterns — it describes the mind's capacity for infinite recursion. When we trace its overlapping circles, we are mapping the structure of thought itself: nested, self-similar, expanding outward from a silent center.",
    content: [
      "The Flower of Life does not merely describe nature's patterns — it describes the mind's capacity for infinite recursion. When we trace its overlapping circles, we are mapping the structure of thought itself.",
      "From the cell division of an embryo to the orbits of planetary bodies, the same proportion recurs. Geometry is the silent grammar of reality.",
    ],
  },
  {
    slug: "desert-dust-and-deep-time",
    title: "Desert, Dust, and Deep Time",
    author: "ELM GWandaru",
    date: "June 2026",
    category: "Reflections",
    readTime: "5 min read",
    excerpt:
      "I stood at the foot of a dune and felt the weight of geological time pressing against my boots. The desert is not empty — it is full of silence, and silence, I have come to understand, is simply the sound of something very old thinking.",
    content: [
      "I stood at the foot of a dune and felt the weight of geological time pressing against my boots. The desert is not empty — it is full of silence.",
      "Silence, I have come to understand, is simply the sound of something very old thinking. In the desert, time loses its urgency and regains its depth.",
    ],
  },
  {
    slug: "on-the-solitude-of-stargazing",
    title: "On the Solitude of Stargazing",
    author: "ELM GWandaru",
    date: "May 2026",
    category: "Philosophy",
    readTime: "6 min read",
    excerpt:
      "There is a peculiar species of loneliness that arrives only when you look upward long enough. It is not the loneliness of isolation — it is the loneliness of scale. The realization that you are a temporary arrangement of ancient atoms, briefly sentient, briefly aware.",
    content: [
      "There is a peculiar species of loneliness that arrives only when you look upward long enough. It is not the loneliness of isolation — it is the loneliness of scale.",
      "The realization that you are a temporary arrangement of ancient atoms, briefly sentient, briefly aware, is both humbling and strangely liberating.",
    ],
  },
  {
    slug: "ancient-civilizations-and-water",
    title: "Ancient Civilizations and the Memory of Water",
    author: "ELM GWandaru",
    date: "April 2026",
    category: "Ancient Civilizations",
    readTime: "8 min read",
    excerpt:
      "Every great civilization was born beside water. The Nile, the Tigris, the Euphrates — these rivers were not just geographical features but living deities. The ancients understood something we have largely forgotten: that water is not a resource but a relationship.",
    content: [
      "Every great civilization was born beside water. The Nile, the Tigris, the Euphrates — these rivers were not just geographical features but living deities.",
      "The ancients understood something we have largely forgotten: that water is not a resource but a relationship, carrying the memory of rain, snow, and ancient tides.",
    ],
  },
];
