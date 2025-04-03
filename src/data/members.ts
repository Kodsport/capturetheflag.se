
export interface MemberItem {
  id: number;
  name: string;
  role: string;
  organization: string;
  bio?: string;
  expertise: string[];
  image: string;
  contact?: {
    email?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export const membersData: MemberItem[] = [
  {
    id: 1,
    name: "Anna Lindberg",
    role: "Ordförande",
    organization: "Uppsala Universitet",
    expertise: ["Web Security", "CTF Organization", "Education"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&w=400&q=80",
    contact: {
      email: "anna.lindberg@ctf-kongress.se",
    }
  },
  {
    id: 2,
    name: "Erik Johansson",
    role: "Vice Ordförande",
    organization: "CyberSec AB",
    expertise: ["Penetration Testing", "Network Security", "CTF Design"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=400&q=80",
    contact: {
      email: "erik.johansson@ctf-kongress.se",
    }
  },
  {
    id: 3,
    name: "Maria Andersson",
    role: "Teknisk Koordinator",
    organization: "KTH Royal Institute of Technology",
    expertise: ["Binary Exploitation", "Reverse Engineering", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=400&q=80",
    contact: {
      email: "maria.andersson@ctf-kongress.se",
    }
  },
  {
    id: 4,
    name: "Johan Karlsson",
    role: "Utbildningsansvarig",
    organization: "Lunds Universitet",
    expertise: ["Cryptography", "Education", "Challenge Design"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&w=400&q=80",
    contact: {
      email: "johan.karlsson@ctf-kongress.se",
    }
  },
  {
    id: 5,
    name: "Sofia Nilsson",
    role: "Eventkoordinator",
    organization: "SecForce Sweden",
    expertise: ["Event Management", "Community Building", "Public Relations"],
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&w=400&q=80",
    contact: {
      email: "sofia.nilsson@ctf-kongress.se",
    }
  },
  {
    id: 6,
    name: "Lars Gustafsson",
    role: "Internationell Kontakt",
    organization: "Göteborgs Universitet",
    expertise: ["International Relations", "Competition Management", "Forensics"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=400&q=80",
    contact: {
      email: "lars.gustafsson@ctf-kongress.se",
    }
  },
  {
    id: 7,
    name: "Emma Pettersson",
    role: "Medlemsansvarig",
    organization: "Digital Security Consultants",
    expertise: ["Membership Development", "Web Development", "Social Engineering"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&w=400&q=80",
    contact: {
      email: "emma.pettersson@ctf-kongress.se",
    }
  },
  {
    id: 8,
    name: "Olof Svensson",
    role: "Kassör",
    organization: "Stockholm University",
    expertise: ["Financial Management", "Resource Planning", "Mobile Security"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&w=400&q=80",
    contact: {
      email: "olof.svensson@ctf-kongress.se",
    }
  }
];
