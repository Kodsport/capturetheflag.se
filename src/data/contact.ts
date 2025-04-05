
export interface ContactInfo {
  email: string;
  address: {
    street?: string;
    city: string;
    postal?: string;
    country: string;
  };
  website?: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export const contactInfo: ContactInfo = {
  email: "ctf-kongress@kodsport.se",
  address: {
    street: "Cybersäkerhetsgatan 42",
    city: "Stockholm",
    postal: "112 33",
    country: "Sverige"
  },
  website: "https://ctf-sverige.se",
  social: {
    github: "https://github.com/kodsport",
    twitter: "https://twitter.com/kodsport",
    linkedin: "https://linkedin.com/company/kodsport"
  }
};
