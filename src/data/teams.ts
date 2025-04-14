
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
    country: "Sweden",
    website: "https://royalroppers.team",
    description: "A top-performing CTF team from KTH Royal Institute of Technology",
    achievements: [
      "1st Undutmaningen 2025, 2024, 2023",
      "1st Crate-CTF 2024, 2022",
    ]
  },
  {
    id: 2,
    name: "Swedish National Hacking Team",
    city: "",
    location: { lat: 59.11, lng: 15.45 },
    country: "Sweden",
    website: "https://snht.se",
    description: "Svenska hackinglandslaget tävlar i ECSC",
    achievements: [
      "6th European Cybersecurity Championship 2022",
    ]
  },
  {
    id: 3,
    name: "ChaGu",
    city: "Gothemburg",
    country: "Sweden",
    location: { lat: 57.708, lng: 11.974 },
    website: "https://chagu.org/",
    description: "A Chalmers + Göteborgs Universitet team",
    achievements: [
      "???"
    ]
  },
  {
    id: 4,
    name: "KebabEngineers",
    city: "Stockholm",
    country: "Sweden",
    location: { lat: 57.708, lng: 11.974 },
    description: "Engieers that love kebab (and CTF)",
    website: "https://kebab.team/",
    achievements: [
      "???"
    ]
  }
];
