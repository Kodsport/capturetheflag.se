
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
  {
    id: 3,
    title: "Fyra svenska medaljer på ICO",
    date: "2025-07-02",
    excerpt: "Sverige vann tre silver och en brons i den första upplagan av International Cybersecurity Olympiad",
    content: "På National University of Singapore hölls International Cybersecurity Olympiad för första gången. Swedish National Hacking Team (SNHT) deltog med fyra unga CTF:are som alla tog medaljer i tävlingen.\n\n\"Jag tyckte att det var en rolig tävling\", säger Maxim som tog silver och var ensam lösare av den svåra pwn:en\n\nWriteups finns bland annat hos: https://ha1fdan.xyz/posts/ico2025-contest/\n\nTävlingen är inspirerad av International Olympiad in Informatics och skiljer sig från andra CTF:er. Tävlingsveckan var en blandning av utforskning i Singapore, hackande samt kinesiska, indiska och malaysiska kulturinslag under ceremonierna.\n\nInför nästa års tävling är Sverige representerat inom ICO-organisationen på både ordförandeposten och i den vetenskapliga kommittén.",
    category: "Tävling",
    image: "/blog-photos/ico-2025-team.webp",
  },
  {
    id: 4,
    title: "MSAB vinner SEC-T CTF 2025",
    date: "2025-09-14",
    excerpt: "Under SEC-T konferensen pågick det parallellt en tävling mellan stadens skarpaste",
    category: "Tävling",
    content: `
Årets Capture the Flag-tävling på Sec-T lockade många lag och bjöd på en varierad uppsättning utmaningar. Agnes, som ledde utvecklingen av tävlingen, sammanfattar:

- Det gick mycket bättre än vad jag oroade mig för! Det var jätteroligt att gå runt och höra vad folk tyckte och hade för idéer till solves. Fick mig inse hur roligt det är att skriva challs om konstiga saker man är fascinerad av. :) Såklart var det vissa challs som pajade, men det känns som något man typ alltid får räkna med.

Vinnare blev laget MSAB, som tog hem förstaplatsen före Exploit Saints och ./create_team. Simon kommenterar segern:

- Det känns kul att vinna till slut, RoyalRoppers har ju traditionellt slagit oss med minsta möjliga marginal både här och i andra svenska CTF:er. Vi körde 5 personer i vårt lag. Jag tyckte kvalitén var bra i år, de hade ju t.o.m. en v8-pwn med i tävlingen, vilket inte är något man ser på alla konferens-CTF:er.

Bilden visar på hur priset, bestående av Sec-T merch och presentkort, överlämnas till MSAB.
    `,
    image: "/blog-photos/sec-t-2025.png",
  }
];
