
export interface SponsorItem {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export const sponsorsData: SponsorItem[] = [
  {
    id: 1,
    name: "Kodsport Sverige",
    logo: "/logos/kodsport.png",
    website: "https://kodsport.se",
  },
  {
    id: 2,
    name: "Cparta Cyberdefense",
    logo: "/logos/cparta.svg",
    website: "https://cparta.se",
  },
];
