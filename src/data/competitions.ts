
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
  {
    id: 2,
    name: "Crate-CTF",
    location: { lat: 57.708, lng: 11.974 }, // TODO
    city: "Online",
    country: "",
    website: "https://www.foi.se/crate-ctf",
    description: "Årlig CTF från Totalförsvarets forskningsinstitut",
    format: "Jeopardy"
  },
  {
    id: 3,
    name: "Undutmaningen",
    location: { lat: 57.708, lng: 11.974 }, // TODO
    city: "Online",
    country: "",
    website: "https://undutmaning.se",
    description: "Årlig CTF från SÄPO, MUST och FRA",
    format: "Jeopardy"
  },
];
