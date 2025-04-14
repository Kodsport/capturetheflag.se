
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
    content: "FAKE NEWS",
    category: "Evenemang",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
  },
  {
    id: 1,
    title: "Landslaget framtaget för 2025",
    date: "2025-03-25",
    excerpt: "Efter en intensiv tävlingshelg har laget valts ut blah blah",
    content: "Kommande årsmöte för CTF-Kongress Sverige kommer att hållas den 15 maj 2025 i Stockholm. Vi samlas på Hotel Scandic Stockholm Central med start klockan 10:00.\n\nUnder mötet kommer vi att diskutera föreningens verksamhet från det gångna året samt planera för framtiden. Det blir också val av ny styrelse och möjlighet att påverka föreningens kommande aktiviteter.\n\nEfter det formella mötet följer lunch och en workshop om nya trender inom CTF-tävlingar. Dagen avslutas med mingel och nätverkande.\n\nAnmälan är obligatorisk och ska göras senast den 1 maj via föreningens medlemsportal.",
    category: "Evenemang",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
  },
];
