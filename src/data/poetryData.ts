export interface Poem {
  id: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  category: string;
  stanzas: string[];
}

export const poemList: Poem[] = [
  {
    id: "them-lessons",
    title: "Them Lessons",
    subtitle: "By ELM GWANDARU",
    author: "ELM GWANDARU",
    date: "September 2026",
    category: "Reflections & Survival",
    stanzas: [
      "Shit I planned, shit I didn't plan,\nOpen and closed at once,\nA song and a war for compliments,\nA pain, a home with unpaid mortgages,\nNothing is the same.",
      "I learned that doors can open\nwith nobody waiting on the other side,\nthat sometimes the key\nis just another thing you lose.",
      "I learned that love can be shelter\nand still leave you homeless,\nthat some hands hold you\nonly long enough to learn your shape.",
      "I learned silence has a language,\nand absence has a voice,\nthat the things we never said\ncan outlive everything we did.",
      "I learned you can win a war\nand still come home defeated,\nshake hands with your enemies\nwhile mourning the person you were\nbefore you learned how to fight.",
      "Some lessons came gently,\nlike rain against a window.\nOthers came dressed as people\nI called home.",
      "And I—\nI kept the receipts.\n\nEvery goodbye.\nEvery almost.\nEvery promise that expired\nwithout the courtesy of a warning.",
      "Shit I planned.\nShit I didn't.\n\nSomewhere between the two,\nI became someone\nI never introduced myself to.",
      "Nothing is the same.\n\nMaybe that's the lesson.\n\nNot everything is meant\nto remain recognizable\nafter it has taught you\nhow to survive it.",
    ],
  },
  {
    id: "the-fault-in-the-immortal",
    title: "The Fault in the Immortal",
    subtitle: "By ELM GWANDARU",
    author: "ELM GWANDARU",
    date: "September 2026",
    category: "Reflections & Philosophy",
    stanzas: [
      "They lost their minds, mortal men with shorter\nlifespans, subjected to routine,\n\nSome became slaves to the systems, others were\nenslaved by the system,\n\nThe big ruled the small, the small learned to\noutmaneuver the big,\n\nThinking was always our daemon, a last inward\nrefuge,\n\nBut how can a mortal man live outside the machine\nand still feel safe?",
      "They lost their ways in places that promised\ndeliverance,\n\nFound themselves in places forbidden by the systems,\n\nThe rich fuck the poor, and the poor learn new ways\nto be fucked by the rich,\n\nThe machines replaced our thinking, and we bowed\nbefore their manufactured imagination,\n\nBut how can a mortal man tell the truth when the\nsystem has already manufactured the minion?",
      "They lost their minds in schools that taught routine,\nobedience, and mono-thinking,\n\nSome became powerful bastards inside the very system\nthat fathered them,\n\nThe wives pointed at the husbands, the husbands at\nthe system, and parents fingered their fingerlings,\n\nThe reality is, human character is corruptible,\nbut the system mastered the art of corruption,\n\nBut how could they think, if thinking had already\nbeen done for them?",
      "They lost their minds building monuments and machines\nto honor some bastards,\n\nSome were birthed by the system but still kept their\nbrains for the greater good,\n\nThe rules made them tools, and human nature was\nreduced to function,\n\nThe few that stayed together were swallowed by the\nflood,\n\nBut how could a mortal man fight a battle he was\nsimply tossed into?",
      "Tears, beliefs, dogmas—\nI wish I could remember the language my grandmother\nspoke,\n\nTo teach it to my fingerlings,\nbefore another system teaches them who they are,\n\n'Tis life,\n\nAnd we but mortal,\n\nFind your way, young soul!",
    ],
  },
  {
    id: "verses-from-the-void",
    title: "Verses from the Void",
    author: "ELM GWANDARU",
    date: "August 2026",
    category: "Cosmic",
    stanzas: [
      "Stardust and silence.\nWords wrung from the cosmos at 3am.",
      "We stood at the edge of the desert dunes,\nwatching light travel across ten billion years\njust to touch the palm of our hand.",
    ],
  },
  {
    id: "the-silent-geometry",
    title: "The Silent Geometry",
    author: "ELM GWANDARU",
    date: "July 2026",
    category: "Sacred",
    stanzas: [
      "Trace the overlapping circles of the flower,\nwhere every line is a quiet whisper of creation.",
      "In the center of the wheel,\ntime ceases to move,\nand the soul finds its anchor.",
    ],
  },
];
