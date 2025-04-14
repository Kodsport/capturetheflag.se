
export interface TeamLocation {
  lat: number;
  lng: number;
}

export interface TeamItem {
  id: number;
  name: string;
  location: TeamLocation;
  city: string;
  country: string;
  website?: string;
  description?: string;
  achievements: string[];
}

export const teamsData: TeamItem[] = [
  {
    id: 1,
    name: "RoyalRoppers",
    location: { lat: 59.329, lng: 18.068 },
    city: "Stockholm",
    country: "Sverige",
    website: "https://royalroppers.team",
    description: "A top-performing CTF team from KTH Royal Institute of Technology",
    achievements: [
      "1:a Undutmaning 2025, 2024, 2023",
      "1:a Crate-CTF 2024, 2022",
      "NorseCode member",
    ]
  },
  {
    id: 2,
    name: "Swedish National Hacking Team",
    city: "",
    location: { lat: 59.11, lng: 15.45 },
    country: "Sverige",
    website: "https://snht.se",
    description: "Hackinglandslaget",
    achievements: [
      "6:a European Cybersecurity Championship 2022",
      "TODO",
      "TODO"
    ]
  }
];
