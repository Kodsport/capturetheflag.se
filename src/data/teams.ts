
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
    location: { lat: 62.193842953397805, lng: 15.051327439834726 },
    country: "Sweden",
    website: "https://snht.se",
    description: "Svenska hackinglandslaget representerar Sverige internationellt i ECSC och ICO",
    achievements: [
      "6th European Cybersecurity Championship 2022",
      "11th European Cybersecurity Championship 2024",
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
    description: "An active CTF team composed of members ranging from absolute beginners to cybersecurity specialists, participating for both fun and learning",
    achievements: [],
    website: "https://shellskapsresan.se/",
    logo: "/team-logos/shellskapsresan.png"
  },
  {
    id: 6,
    name: "KAUotic Hacking Club",
    description: "A club at Karlstad University all about hacking, privacy and security",
    location: { lat: 59.4041117, lng: 13.5812303 },
    achievements: [
      "HTB Cyber Apocalypse 2024: 112th of 5694",
      "HTB Cyber Apocalypse 2025: 195th of 8130"
    ],
    city: "Karlstad",
    country: "Sweden",
    website: "https://www.kauotic.se/",
    logo: "/team-logos/kauotic_logo.webp"
  },
  {
    id: 7,
    name: "BankarKodFörGifflar",
    description: "inside of u there are two wolves...",
    website: "https://giffla.re/",
    location: { lat: 55.58617055893989, lng: 13.02252728546795 },
    country: "Sweden",
    city: "",
    logo: "/team-logos/gifflar.png",
    achievements: []
  },
  {
    id: 8,
    name: "Flägermeisters",
    description: "Competitive CTF Team from Lund University_",
    website: "https://flägermeiste.rs/",
    location: { lat: 55.71100487159305, lng: 13.210947499433571 },
    country: "Sweden",
    city: "Lund",
    logo: "/team-logos/flagermeisters.webp",
    achievements: []
  },
  {
    id: 9,
    name: "LiTHeHax",
    description: "An ethical hacking/CTF  organization from Linköpings University (LiU)",
    location: { lat: 58.40036550091464, lng: 15.578146295576643 },
    city: "Linköping",
    country: "Sweden",
    logo: "/team-logos/lithehax.png",
    website: "https://lithehax.se/",
    achievements: []
  },
  {
    id: 10,
    name: "HjärterHex",
    description: "A student-driven, interest-based association at Halmstad University, focused on cybersecurity and CTF competitions.",
    location: { lat: 56.664809605533534, lng: 12.877978842327776 },
    city: "Halmstad",
    country: "Sweden",
    logo: "/team-logos/HjarterHex.svg",
    achievements: [],
  },
  {
    id: 11,
    name: "MSAB",
    description: "",
    location: { lat: 59.316149784144095, lng: 18.03457864825989 },
    city: "Stockholm",
    country: "Sweden",
    website: "https://www.msab.com/",
    achievements: ["1st Sec-T CTF 2025"],
  },
  {
    id: 12,
    name: "Frostbyte",
    description: "A Student-driven CTF Team based in Luleås Tekniska University",
    location: { lat: 65.61792828073824, lng: 22.140113886894362 },
    city: "Luleå",
    country: "Sweden",
    logo: "/team-logos/frostbyte.png",
    achievements: [],
  }
];
