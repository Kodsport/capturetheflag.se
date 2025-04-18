
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
  logo?: string;
}

export const teamsData: TeamItem[] = [
  {
    id: 1,
    name: "RoyalRoppers",
    location: { lat: 59.34704975526663, lng: 18.07272958343835 },
    city: "Stockholm",
    country: "Sweden",
    website: "https://royalroppers.team",
    description: "A top-performing CTF team from KTH Royal Institute of Technology",
    achievements: [
      "1st Undutmaningen 2025, 2024, 2023",
      "1st Crate-CTF 2024, 2022",
    ],
    logo: "/team-logos/royal-roppers.svg"
  },
  {
    id: 2,
    name: "Swedish National Hacking Team",
    city: "",
    location: { lat: 59.01796484774821, lng: 13.60163114615637 },
    country: "Sweden",
    website: "https://snht.se",
    description: "Svenska hackinglandslaget representerar Sverige internationellt i ECSC och ICO",
    achievements: [
      "6th European Cybersecurity Championship 2022",
    ],
    logo: "/team-logos/snht.png"
  },
  {
    id: 3,
    name: "ChaGu",
    city: "Gothemburg",
    country: "Sweden",
    location: { lat: 57.695984, lng: 11.9369461 },
    website: "https://chagu.org/",
    description: "A Chalmers + Göteborgs Universitet team",
    achievements: [
    ],
    logo: "/team-logos/chagu-logo.png"
  },
  {
    id: 4,
    name: "KebabEngineers",
    city: "Stockholm",
    country: "Sweden",
    location: { lat: 59.34498831576734, lng: 18.07384927552212 },
    description: "Engineers that love kebab (and CTF)",
    website: "https://kebab.team/",
    achievements: [
      "1st Crate-CTF 2023"
    ],
    logo: "/team-logos/kebab-favicon.ico"
  },
  {
    id: 5,
    name: "Shellskapsresan",
    city: "Skalhamn",
    country: "Sweden",
    location: { lat: 58.323236401890036, lng: 11.41149876911872 },
    description: "",
    achievements: [],
  }
];
