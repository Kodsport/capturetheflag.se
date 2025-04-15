
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
    title: "CTF-BBQ 2025 - Save the date!",
    date: "2025-04-15",
    excerpt: "Kommande årsmöte för CTF-Kongress Sverige kommer att hållas den 24 maj 2025 i Stockholm. Anmäl dig nu! Mer info finns i Discord",
    content: "Kommande årsmöte för CTF-Kongress Sverige kommer att hållas den 24 maj 2025 i Stockholm. Anmäl dig nu! Mer info finns i Discord",
    category: "Evenemang",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2070",
  },
  {
    id: 2,
    title: "Sverige deltar i International Cybersecurity Olympiad",
    date: "2025-04-15",
    excerpt: "För första gången hålls en internationell CTF för gymnasieelever",
    content: "International Cybersecurity Olympiad är en ny internationell CTF för gymnasieelever från hela världen som kommer att hållas i Singapore mellan 22 och 28 juni. SNHT kommer att skicka fyra unga CTF:are för att representera Sverige. Tävlingen är individuell, vilket skiljer sig från den klassiska lagsport som präglar CTF-tävlingar.\n\n",
    category: "Tävling",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
  },
];
