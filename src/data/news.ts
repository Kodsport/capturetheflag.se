
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
    content: "Kommande årsmöte för CTF-Kongress Sverige kommer att hållas den 15 maj 2025 i Stockholm. Vi samlas på Hotel Scandic Stockholm Central med start klockan 10:00.\n\nUnder mötet kommer vi att diskutera föreningens verksamhet från det gångna året samt planera för framtiden. Det blir också val av ny styrelse och möjlighet att påverka föreningens kommande aktiviteter.\n\nEfter det formella mötet följer lunch och en workshop om nya trender inom CTF-tävlingar. Dagen avslutas med mingel och nätverkande.\n\nAnmälan är obligatorisk och ska göras senast den 1 maj via föreningens medlemsportal.",
    category: "Evenemang",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&w=800&q=80",
  },
  {
    id: 2,
    title: "Nya utmaningar i Capture The Flag 2025",
    date: "2025-03-20",
    excerpt: "Upptäck de spännande nya utmaningarna och kategorierna som kommer att ingå i årets CTF-tävlingar.",
    content: "Årets Capture The Flag-tävlingar kommer att innehålla flera spännande nya utmaningar och kategorier.\n\nVi introducerar en helt ny kategori kallad \"Quantum Security\" där deltagarna får testa sina färdigheter inom kvantdatorsäkerhet och kryptografi. Dessutom har kategorin \"IoT Exploitation\" utökats med fler utmaningar relaterade till smarta hem och industriella IoT-enheter.\n\nSom respons på medlemmarnas önskemål har vi också gjort nivåerna mer progressiva, vilket gör det lättare för nybörjare att komma igång samtidigt som experterna får riktigt svåra problem att lösa.\n\nUtmaningarna har utvecklats av en expertgrupp bestående av både akademiker och erfarna cybersäkerhetsexperter från näringslivet. Vi är övertygade om att årets tävlingar kommer att erbjuda något för alla, oavsett kunskapsnivå.",
    category: "Tävlingar",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&w=800&q=80",
  },
  {
    id: 3,
    title: "Medlemskap ger nya fördelar 2025",
    date: "2025-03-15",
    excerpt: "Som medlem i CTF-Kongress Sverige får du nu tillgång till exklusiva workshops och mer utbildningsmaterial.",
    content: "Vi är glada att kunna meddela att medlemskapet i CTF-Kongress Sverige nu ger ännu fler fördelar.\n\nFrån och med april 2025 får alla medlemmar tillgång till vår nya digitala läroplattform där vi samlat hundratals timmar av utbildningsmaterial inom cybersäkerhet och CTF-relaterade ämnen. Här finns allt från grundläggande kurser för nybörjare till avancerade workshops för erfarna säkerhetsexperter.\n\nMedlemmar får också rabatt på våra fysiska workshops och events, samt prioriterad registrering till populära evenemang med begränsat antal platser.\n\nVi har också inlett samarbeten med flera programvaruföretag som erbjuder rabatter på sina verktyg och tjänster exklusivt för våra medlemmar.\n\nDet har aldrig funnits ett bättre tillfälle att gå med i CTF-Kongress Sverige!",
    category: "Medlemskap",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800&q=80",
  },
  {
    id: 4,
    title: "Framgångar för Sverige i internationell CTF",
    date: "2025-03-10",
    excerpt: "Svenska deltagare uppnådde toppresultat vid den senaste internationella Capture The Flag-tävlingen i Amsterdam.",
    content: "Vi är stolta över att kunna rapportera att svenska deltagare nådde fantastiska resultat vid den senaste internationella Capture The Flag-tävlingen som hölls i Amsterdam förra helgen.\n\nLaget \"Swedish Bits\", bestående av medlemmar från CTF-Kongress Sverige, placerade sig på en imponerande tredje plats i den mycket konkurrensutsatta elitdivisionen. De visade särskilt starka färdigheter inom kategorin reverse engineering där de löste samtliga utmaningar.\n\nDessutom tog den svenska deltagaren Emma Lindgren hem individuella förstapriset i kategorin web exploitation, en prestation som ger henne en direktkvalificering till världsmästerskapen senare i år.\n\nDessa resultat befäster Sveriges position som en växande kraft inom den internationella CTF-communityn och visar på det hårda arbete som lagts ner på utbildning och träning inom föreningen.",
    category: "Tävlingar",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&q=80",
  },
  {
    id: 5,
    title: "Ny cybersäkerhetsutbildning lanseras",
    date: "2025-03-05",
    excerpt: "CTF-Kongress Sverige lanserar en ny utbildningsserie fokuserad på moderna penetrationstesttekniker.",
    content: "CTF-Kongress Sverige lanserar en ny utbildningsserie som fokuserar på moderna penetrationstesttekniker och verktyg.\n\nUtbildningen, som är uppdelad i tio moduler, kommer att täcka allt från grundläggande nätverkssäkerhet till avancerade exploateringsmetoder för webbaserade system och molntjänster.\n\nVarje modul innehåller både teoretiskt material och praktiska övningar där deltagarna får tillämpa sina kunskaper i realistiska scenarion. Utbildningen har utvecklats i samarbete med ledande experter från både akademin och näringslivet.\n\nDen första modulen börjar den 15 april och kommer att vara tillgänglig både online och som fysiska workshops i Stockholm, Göteborg och Malmö. Medlemmar i CTF-Kongress Sverige får rabatt på deltagaravgiften.\n\nRegistrering öppnar den 1 april på vår hemsida, och vi rekommenderar intresserade att registrera sig tidigt då antalet platser är begränsade, särskilt för de fysiska workshoparna.",
    category: "Utbildning",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&w=800&q=80",
  },
  {
    id: 6,
    title: "Samarbete med ledande tech-företag",
    date: "2025-03-01",
    excerpt: "Vi är glada att tillkännage nya samarbeten med ledande tech-företag för att främja CTF-utbildning i Sverige.",
    content: "CTF-Kongress Sverige är glada att kunna tillkännage nya strategiska samarbeten med flera ledande tech-företag i syfte att främja CTF-utbildning runt om i Sverige.\n\nSamarbetet inkluderar både ekonomiskt stöd för våra utbildningsprogram och tekniska resurser som gör det möjligt för oss att skapa mer realistiska och utmanande CTF-tävlingar.\n\nVåra nya partners kommer också att erbjuda gästföreläsare till våra events och workshops, vilket ger våra medlemmar direktkontakt med branschledande experter inom cybersäkerhet.\n\nDessutom kommer det att finnas praktikplatser och jobbmöjligheter exklusivt för medlemmar i CTF-Kongress Sverige, vilket ytterligare stärker värdet av ett medlemskap i vår organisation.\n\nDet här samarbetet representerar ett viktigt steg i vår strävan att göra Sverige till ett nav för CTF-tävlingar och cybersäkerhetsutbildning i Europa.",
    category: "Samarbeten",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=800&q=80",
  }
];
