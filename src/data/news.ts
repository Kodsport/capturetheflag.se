
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  category: string;
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Årsmöte 2025 - Markera i kalendern",
    date: "2025-03-25",
    excerpt: "Kommande årsmöte för CTF-Kongress Sverige kommer att hållas den 15 maj 2025 i Stockholm. Anmäl dig nu!",
    category: "Evenemang",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
  },
  {
    id: 2,
    title: "Nya utmaningar i Capture The Flag 2025",
    date: "2025-03-20",
    excerpt: "Upptäck de spännande nya utmaningarna och kategorierna som kommer att ingå i årets CTF-tävlingar.",
    category: "Tävlingar",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=800&q=80",
  },
  {
    id: 3,
    title: "Medlemskap ger nya fördelar 2025",
    date: "2025-03-15",
    excerpt: "Som medlem i CTF-Kongress Sverige får du nu tillgång till exklusiva workshops och mer utbildningsmaterial.",
    category: "Medlemskap",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800&q=80",
  },
  {
    id: 4,
    title: "Framgångar för Sverige i internationell CTF",
    date: "2025-03-10",
    excerpt: "Svenska deltagare uppnådde toppresultat vid den senaste internationella Capture The Flag-tävlingen i Amsterdam.",
    category: "Tävlingar",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&q=80",
  },
  {
    id: 5,
    title: "Ny cybersäkerhetsutbildning lanseras",
    date: "2025-03-05",
    excerpt: "CTF-Kongress Sverige lanserar en ny utbildningsserie fokuserad på moderna penetrationstesttekniker.",
    category: "Utbildning",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&w=800&q=80",
  },
  {
    id: 6,
    title: "Samarbete med ledande tech-företag",
    date: "2025-03-01",
    excerpt: "Vi är glada att tillkännage nya samarbeten med ledande tech-företag för att främja CTF-utbildning i Sverige.",
    category: "Samarbeten",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=800&q=80",
  }
];
