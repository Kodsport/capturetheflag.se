
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
  members: number;
  website?: string;
  description?: string;
  achievements?: string[];
}

export const teamsData: TeamItem[] = [
  {
    id: 1,
    name: "CyberVikings",
    location: { lat: 59.329, lng: 18.068 },
    city: "Stockholm",
    country: "Sweden",
    members: 12,
    website: "https://cybervikings.se",
    description: "A top-performing CTF team from KTH Royal Institute of Technology",
    achievements: [
      "1st place Nordic CTF 2023",
      "Top 10 at HackTheBox University CTF 2023",
      "3rd place at SecurityFest CTF 2022"
    ]
  },
  {
    id: 2,
    name: "GothSec",
    location: { lat: 57.708, lng: 11.974 },
    city: "Gothenburg",
    country: "Sweden",
    members: 8,
    website: "https://gothsec.se",
    description: "Security researchers and CTF enthusiasts from western Sweden",
    achievements: [
      "2nd place at Swedish National Cyber Championships 2023",
      "Winners of GothCTF 2022"
    ]
  },
  {
    id: 3,
    name: "LundSecurity",
    location: { lat: 55.704, lng: 13.195 },
    city: "Lund",
    country: "Sweden",
    members: 10,
    description: "Computer science students specializing in cryptography and web security",
    achievements: [
      "3rd place Nordic CTF 2023",
      "1st place University Challenge 2022"
    ]
  },
  {
    id: 4,
    name: "UmeåHackers",
    location: { lat: 63.828, lng: 20.264 },
    city: "Umeå",
    country: "Sweden",
    members: 6,
    description: "A small but dedicated team from northern Sweden",
    achievements: [
      "Top 20 at European Cyber Cup 2023"
    ]
  },
  {
    id: 5,
    name: "UppsalaSec",
    location: { lat: 59.858, lng: 17.645 },
    city: "Uppsala",
    country: "Sweden",
    members: 9,
    website: "https://uppsalasec.se",
    description: "Cybersecurity enthusiasts from Uppsala University",
    achievements: [
      "1st place Swedish University CTF 2023",
      "2nd place Nordic Security Challenge 2022"
    ]
  },
  {
    id: 6,
    name: "MalmöDefenders",
    location: { lat: 55.604, lng: 13.003 },
    city: "Malmö",
    country: "Sweden",
    members: 7,
    description: "Security professionals focusing on web and infrastructure security",
    achievements: [
      "Top 5 at Scandinavian CTF 2023",
      "Winners of Scania Security Competition 2022"
    ]
  },
  {
    id: 7,
    name: "LinköpingLegion",
    location: { lat: 58.410, lng: 15.621 },
    city: "Linköping",
    country: "Sweden",
    members: 8,
    description: "Computer engineering students specializing in binary exploitation",
    achievements: [
      "2nd place at University Hacking League 2023",
      "Top 15 at International Collegiate CTF 2022"
    ]
  },
  {
    id: 8,
    name: "VäxjöVanguard",
    location: { lat: 56.879, lng: 14.809 },
    city: "Växjö",
    country: "Sweden",
    members: 5,
    description: "A team focused on IoT security and hardware challenges",
    achievements: [
      "Winners of Regional Security Tournament 2023"
    ]
  }
];
