
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
  date: string;
  website?: string;
  description?: string;
  format?: string;
}

export const competitionsData: CompetitionItem[] = [
  {
    id: 1,
    name: "SecurityFest CTF",
    location: { lat: 57.708, lng: 11.974 },
    city: "Göteborg",
    country: "Sverige",
    date: "2025-05-15",
    website: "https://securityfest.com",
    description: "Annual CTF competition during SecurityFest conference",
    format: "Jeopardy"
  },
  {
    id: 2,
    name: "Stockholm Cyber Summit CTF",
    location: { lat: 59.329, lng: 18.068 },
    city: "Stockholm",
    country: "Sverige",
    date: "2025-09-22",
    website: "https://stockholmcybersummit.se",
    description: "Industry-focused CTF with corporate challenges",
    format: "Attack/Defense"
  },
  {
    id: 3,
    name: "SÄPO CTF Challenge",
    location: { lat: 59.345, lng: 18.071 },
    city: "Stockholm",
    country: "Sverige",
    date: "2025-10-05",
    description: "Government-sponsored security competition",
    format: "Jeopardy"
  },
  {
    id: 4,
    name: "Umeå University Cyber Games",
    location: { lat: 63.818, lng: 20.264 },
    city: "Umeå",
    country: "Sverige",
    date: "2025-11-15",
    website: "https://umu.se/cybersec",
    description: "Academic CTF for university students",
    format: "Mixed"
  }
];
