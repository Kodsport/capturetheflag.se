
export interface CompetitionLocation {
  lat: number;
  lng: number;
}

export interface CompetitionItem {
  id: number;
  name: string;
  location: CompetitionLocation;
  city: string;
  country: string;
  website?: string;
  description?: string;
  format?: string;
  logo?: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 1,
    name: "Säkerhets-SM",
    location: { lat: 59.329, lng: 18.068 },
    city: "Stockholm",
    country: "Sverige",
    website: "https://sakerhetssm.se",
    description: "Årlig CTF för gymnasieungdomar, final i Stockholm",
    format: "Jeopardy",
    logo: ""
  },
  {
    id: 2,
    name: "Crate-CTF",
    location: { lat: 59.40459910983686, lng: 17.94608100274887 },
    city: "Online",
    country: "",
    website: "https://www.foi.se/crate-ctf",
    description: "Årlig CTF från Totalförsvarets forskningsinstitut",
    format: "Jeopardy",
    logo: "/ctf-logos/crate.svg"
  },
  {
    id: 3,
    name: "Undutmaningen",
    location: { lat: 59.346186593025394, lng: 18.087993629715417 }, 
    city: "Online",
    country: "",
    website: "https://undutmaning.se",
    description: "SÄPO, MUST och FRA bjuder in till en utmaning. Deltagare bjuds in till mingel efteråt!",
    format: "Jeopardy",
    logo: "/ctf-logos/undut-logo25.png"
  },
  {
    id: 4,
    name: "Swedish Cybersecurity Challenge",
    location: { lat: 59.3652056, lng: 18.2518914 }, 
    city: "Online + Stockholm",
    country: "",
    description: "Qualifier for the SNHT team",
    format: "Jeopardy",
    website: "https://snht.se/",
    logo: "/team-logos/snht.png" // no logo?
  },
  {
    id: 5,
    name: "CERT-SE CTF",
    location: { lat: 59.34860425693864, lng: 18.01397665857083 }, 
    city: "Online",
    country: "",
    description: "CTF organiserad av CERT-SE med fokus på forensik",
    website: "https://www.cert.se/2024/09/cert-se-ctf2024.html",
    format: "Jeopardy",
    logo: ""
  },
  {
    id: 6,
    name: "Midnight Sun CTF",
    city: "Stockholm",
    country: "",
    website: "https://play.midnightsunctf.com/",
    format: "Jeopardy",
    logo: "/ctf-logos/favicon-mns.png",
    description: "HackingForSoju bjuder på CTF!",
    location: { lat: 59.3324242379726, lng: 18.05858283821012 }
  },
  {
    id: 7,
    name: "Sec-T CTF",
    city: "Stockholm",
    country: "",
    location: { lat: 59.32061228927417, lng: 18.055865041753073 },
    description: "CTF during the Sec-T Conference",
    website: "https://ctf.sec-t.org/",
    format: "Jeopardy",
    logo: "/ctf-logos/sec-t.png"
  }
];
