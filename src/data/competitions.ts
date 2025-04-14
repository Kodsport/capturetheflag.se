
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
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 1,
    name: "Säkerhets-SM",
    location: { lat: 59.329, lng: 18.068 }, // Stockholm coordinates
    city: "Stockholm",
    country: "Sverige",
    website: "https://sakerhetssm.se",
    description: "Årlig CTF för gymnasiet, final i Stockholm",
    format: "Jeopardy"
  },
  {
    id: 2,
    name: "Crate-CTF",
    location: { lat: 59.350, lng: 18.070 }, // Slightly offset from Stockholm for visibility
    city: "Online",
    country: "",
    website: "https://www.foi.se/crate-ctf",
    description: "Årlig CTF från Totalförsvarets forskningsinstitut",
    format: "Jeopardy"
  },
  {
    id: 3,
    name: "Undutmaningen",
    location: { lat: 59.370, lng: 18.070 }, // Slightly offset from Stockholm for visibility
    city: "Online",
    country: "",
    website: "https://undutmaning.se",
    description: "Årlig CTF från SÄPO, MUST och FRA",
    format: "Jeopardy"
  },
  {
    id: 4,
    name: "Swedish Cybersecurity Challenge",
    location: { lat: 59.310, lng: 18.080 }, // Slightly offset from Stockholm for visibility
    city: "Online + Stockholm",
    country: "",
    description: "Qualifier for the SNHT team",
    format: "Jeopardy",
    website: "https://snht.se/"
  },
  {
    id: 5,
    name: "CERT-SE CTF",
    location: { lat: 59.290, lng: 18.060 }, // Slightly offset from Stockholm for visibility
    city: "Online",
    country: "",
    description: "CTF organized by the Swedish Computer Emergency Response Team",
    website: "https://www.cert.se/2024/09/cert-se-ctf2024.html",
    format: "Jeopardy"
  }
];
