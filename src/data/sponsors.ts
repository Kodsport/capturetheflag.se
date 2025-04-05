
export interface SponsorItem {
  id: number;
  name: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

export const sponsorsData: SponsorItem[] = [
  {
    id: 1,
    name: "Säkerhetsbolaget AB",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor1",
    tier: "platinum"
  },
  {
    id: 2,
    name: "CyberSkydd Sverige",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor2",
    tier: "gold"
  },
  {
    id: 3,
    name: "Secure Systems",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor3",
    tier: "gold"
  },
  {
    id: 4,
    name: "Binary Defense",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor4",
    tier: "silver"
  },
  {
    id: 5,
    name: "HackTech Solutions",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor5",
    tier: "silver"
  },
  {
    id: 6,
    name: "Nordic Security",
    logo: "/placeholder.svg",
    website: "https://example.com/sponsor6",
    tier: "bronze"
  }
];
