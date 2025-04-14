
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
    location: { lat: 57.708, lng: 11.974 }, // TODO
    city: "Stockholm",
    country: "Sverige",
    website: "https://sakerhetssm.se",
    description: "Årlig CTF för gymnasiet, final i Stockholm",
    format: "Jeopardy"
  },
];
